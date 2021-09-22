// react imports
import { SyntheticEvent, useEffect, useState } from 'react'

// third party imports
import { Button, Dropdown, DropdownProps, Form, Icon, InputOnChangeData, Segment, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

// // project imports
import { IState } from '../../store/modules/types'
import HeaderFC from '../../components/Header'

// local imports
import { IAddProduct, ICustomerOptions, IProductOptions, ISellerOptions, typeInput } from './types'
import { fetchCustomers } from '../../store/modules/customers/actions'
import { fetchProducts } from '../../store/modules/products/actions'
import { fetchSellers } from '../../store/modules/sellers/actions'
import { ICustomer } from '../../store/modules/customers/types'
import { IProduct } from '../../store/modules/products/types'
import { ISeller } from '../../store/modules/sellers/types'
import { CashierContainer } from './styles'
import { createOrder } from '../../store/modules/orders/actions'
import { useHistory } from 'react-router'


const Cashier = () => {
  // state
  const [product, setProduct] = useState<typeInput>('')
  const [seller, setSeller] = useState<typeInput>('')
  const [customer, setCustomer] = useState<typeInput>('')
  const [quantity, setQuantity] = useState<typeInput>('')
  const [products, setProducts] = useState<any>([])
  const [productsArrayToCreateOrder, setProductsArrayToCreateOrder] = useState<any[]>([])
  const [createsRow, setCreatesRow] = useState(false)
  const [totalVenda, setTotalVenda] = useState(0)
  const [rowId, setRowId] = useState(0)

  // redux
  const products_store = useSelector<IState, IProduct[]>(store => store.products)
  const sellers_store = useSelector<IState, ISeller[]>(store => store.sellers)
  const customers_store = useSelector<IState, ICustomer[]>(store => store.customers)

  // hooks
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchSellers())
    dispatch(fetchCustomers())
  }, [])

  // others
  const numbers = /^[0-9]+$/
  const productOptions: IProductOptions[] = []
  const sellerOptions: ISellerOptions[] = []
  const customerOptions: ICustomerOptions[] = []

  products_store.map(product =>
    productOptions.push({ key: product.id, text: product.name, value: product.id })
  )

  sellers_store.map(seller =>
    sellerOptions.push({ key: seller.id, text: seller.name, value: seller.id })
  )

  customers_store.map(customer =>
    customerOptions.push({ key: customer.id, text: customer.name, value: customer.id })
  )

  const handleDropdown = (event: SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
    let { name, value } = data

    if (name === 'product')
      setProduct(value)
    else if (name === 'seller')
      setSeller(value)
    else if (name === 'customer')
      setCustomer(value)

    setCreatesRow(false)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => {
    let { name, value } = data

    if (name === 'quantity')
      setQuantity(value)

    setCreatesRow(false)
  }

  const findUnitPrice = (product: typeInput) => {
    return products_store.find(item => item.id === product)?.price
  }

  const findName = (product: typeInput) => {
    return products_store.find(item => item.id === product)?.name
  }

  const renderTable = () => {
    return (
      products?.map((product: IAddProduct, index: number) => (
        <Table.Row key={index}>
          <Table.Cell>{product.product_name}</Table.Cell>
          <Table.Cell>{product.quantity}</Table.Cell>
          <Table.Cell>R$ {product.price}</Table.Cell>
          <Table.Cell>R$ {product.quantity*Number(product.price)}.00</Table.Cell>
          <Table.Cell>
            <Icon name='trash' color='red' className='trash-icon-table' onClick={() => removeProductService(product.id)} />
          </Table.Cell>
        </Table.Row>
      ))
    )
  }

  const addProductService = () => {
    if (!String(quantity).match(numbers)) {
      toast.error('Preencher campo de "Quantidade de itens" somente com números')
      return
    }

    setRowId(rowId + 1)
    products.push({
      'id': rowId,
      'product': product,
      'product_name': findName(product),
      'price': findUnitPrice(product),
      'quantity': quantity,
    })
    productsArrayToCreateOrder.push({
      'product': product,
      'quantity': Number(quantity),
    })
    setCreatesRow(true)
  }

  const removeProductService = (index: number) => {
    setProducts(products.filter((item: { id: number }) => item.id !== index))
  }

  const calculateTotal = () => {
    const total = products.map(
      (product: { quantity: number; price: any }) => product.quantity*Number(product.price)).reduce((prev: any, curr: any) => prev + curr, 0)
    return total
  }

  useEffect(() => {
    const total = calculateTotal()
    setTotalVenda(total)
  }, [createsRow, products])

  const callbackCreateOrder = () => {
    history.push('/vendas')
  }

  const onClickSubmitOrder = () => {
    if (!customer || !seller) {
      toast.error('Preencher campos de vendedor e cliente !')
      return
    }
    const data: any = {
      "customer": customer,
      "seller": seller,
      "items": productsArrayToCreateOrder,
    }

    dispatch(createOrder(data, callbackCreateOrder))
  }

  const onClickCancelOrder = () => {
    history.push('/vendas')
  }


  return (
    <CashierContainer>
      <HeaderFC />
      <Segment attached className='cashier-content'>
        <div className='left-content'>
          <div>
            <h3>
              Produtos
            </h3>
            <Form>
              <Form.Group>
                <Form.Field required width={8}>
                  <label>Escolha um produto</label>
                  <Dropdown
                    selection
                    clearable
                    name='product'
                    value={product}
                    onChange={handleDropdown}
                    placeholder='Produto/Serviço'
                    options={productOptions}
                  />
                </Form.Field>
                <Form.Input
                  fluid
                  name='quantity'
                  value={quantity}
                  onChange={handleChange}
                  label='Quantidade de itens'
                  placeholder='1'
                  width={4}
                  type="number"
                />
                <Form.Button content='Adicionar' className='add-button' color='blue' onClick={addProductService} />
              </Form.Group>
            </Form>
          </div>
          <Table basic='very' className='table-fc'>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Produto/Serviço</Table.HeaderCell>
                <Table.HeaderCell>Quantidade</Table.HeaderCell>
                <Table.HeaderCell>Preço unitário</Table.HeaderCell>
                <Table.HeaderCell>Total</Table.HeaderCell>
                <Table.HeaderCell />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {(createsRow) && renderTable()}
              {(!createsRow) && products.map((product: IAddProduct, index: number) => (
                <Table.Row key={index}>
                  <Table.Cell>{product.product_name}</Table.Cell>
                  <Table.Cell>{product.quantity}</Table.Cell>
                  <Table.Cell>R$ {product.price}</Table.Cell>
                  <Table.Cell>R$ {product.quantity*Number(product.price)}.00</Table.Cell>
                  <Table.Cell>
                    <Icon name='trash' color='red' className='trash-icon-table' onClick={() => removeProductService(product.id)} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className='right-content'>
          <div>
            <h3>
              Dados da Venda
            </h3>
            <Form>
              <Form.Field required>
                <label>Escolha um vendedor</label>
                <Dropdown
                  selection
                  clearable
                  name='seller'
                  value={seller}
                  onChange={handleDropdown}
                  className='seller-dropdown'
                  placeholder='Selecione o vendedor'
                  options={sellerOptions}
                />
              </Form.Field>
              <Form.Field required>
                <label>Escolha um cliente</label>
                <Dropdown
                  selection
                  clearable
                  name='customer'
                  value={customer}
                  onChange={handleDropdown}
                  className='customer-dropdown'
                  placeholder='Selecione o cliente'
                  options={customerOptions}
                />
              </Form.Field>
            </Form>
          </div>
          <div className='bottom-area'>
            <div className='total-sales'>
              <h3>Valor total da venda:</h3>
              <h2>R$ {totalVenda}</h2>
            </div>
            <div className='buttons-sales'>
              <Button content='Cancelar' color='red' onClick={onClickCancelOrder} />
              <Button content='Finalizar' color='green' onClick={onClickSubmitOrder} />
            </div>
          </div>
        </div>
      </Segment>
    </CashierContainer>
  )
}

export default Cashier

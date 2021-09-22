// react imports
import React, { useEffect, useState } from 'react'

// third party imports
import { Segment, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

// project imports
import { IOrderResponse } from '../../store/modules/orders/types'
import { fetchOrders } from '../../store/modules/orders/actions'
import { IState } from '../../store/modules/types'
import HeaderFC from '../../components/Header'
import { formatStringDate } from '../../utils'


const OrdersList = () => {
  // state
  const [loaderTable, setLoaderTable] = useState(true)

  // redux
  const orders_store = useSelector<IState, IOrderResponse[]>(store => store.orders)

  // hooks
  const dispatch = useDispatch()

  const callbackLoadTable = () => {
    setLoaderTable(false)
  }

  useEffect(() => {
    dispatch(fetchOrders(callbackLoadTable))
  }, [])

  return (
    <>
      <HeaderFC />
      <Segment attached loading={loaderTable}>
        <Table basic='very' className='table-fc' >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign='center'>Id</Table.HeaderCell>
              <Table.HeaderCell width={3}>Data - Hora</Table.HeaderCell>
              <Table.HeaderCell>Vendedor</Table.HeaderCell>
              <Table.HeaderCell>Cliente</Table.HeaderCell>
              <Table.HeaderCell>Preço Total </Table.HeaderCell>
              <Table.HeaderCell>Comissão</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {orders_store?.map((order: IOrderResponse) => (
              <Table.Row key={order.id}>
                <Table.Cell textAlign='center'>{order.id}</Table.Cell>
                <Table.Cell>{formatStringDate(order.created)}</Table.Cell>
                <Table.Cell>{order.seller_name}</Table.Cell>
                <Table.Cell>{order.customer_name}</Table.Cell>
                <Table.Cell>R$ {order.total_price}</Table.Cell>
                <Table.Cell>R$ {order.total_commission}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Segment>
    </>
  )
}

export default OrdersList

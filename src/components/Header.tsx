// third party imports
import { useHistory, useLocation } from 'react-router'
import { Header, Icon } from 'semantic-ui-react'

// local imports
import { HeaderContainer } from './styles'


const HeaderFC = () => {
  // hooks
  const history = useHistory()
  const location = useLocation()

  const getClassOrders = () => {
    let activeClass = ''

    if (location.pathname === '/vendas') {
      return activeClass = 'orders active-vendas'
    } else {
      return activeClass = 'orders'
    }
  }

  const getClassNewOrder= () => {
    let activeClass = ''

    if (location.pathname === '/') {
      return activeClass = 'active-vendas'
    }
  }

  return (
    <HeaderContainer>
      <Header attached='top' className='header-fc'>
        <h2>
          <Icon name='calculator'/>
          Fast Cashier
        </h2>
        <div className='header-right-content'>
          <h2 className={getClassOrders()} onClick={() => history.push('/vendas')}>
            Lista de Vendas
          </h2>
          <h2 className={getClassNewOrder()} onClick={() => history.push('/')}>
            Nova Venda
          </h2>
        </div>
      </Header>
    </HeaderContainer>
  )
}

export default HeaderFC

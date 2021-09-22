// react imports
import React from 'react'

// third party imports
import { Route, BrowserRouter } from 'react-router-dom'

// project imports
import Cashier from './pages/Cashier'
import OrdesList from './pages/OrdersList'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Cashier} path='/' exact />
      <Route component={OrdesList} path='/vendas' exact />
    </BrowserRouter>
  )
}

export default Routes

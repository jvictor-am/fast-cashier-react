// react imports
import React from 'react'

// third party imports
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'semantic-ui-css/semantic.min.css'

// project imports
import GlobalStyle, { PageContainer } from './global_styles/global'
import store from './store'
import Routes from './routes'


const App = () => {
  return (
    <>
      <PageContainer>
        <Provider store={ store }>
          <Routes />
          <ToastContainer position='bottom-right' autoClose={2000} theme='dark' />
        </Provider>
        <GlobalStyle />
      </PageContainer>
    </>
  )
}

export default App

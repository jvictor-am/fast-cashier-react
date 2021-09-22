// third party imports
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project imports
import api from '../../../services/api'

// local imports
import { fetchOrdersSuccess } from './actions'
import {
  OrderTypes,
  fetchOrdersType,
  IOrderResponse,
  createOrderType,
} from './types'


function* fetchOrdersSaga(action: fetchOrdersType) {
  try {
    const response: AxiosResponse<IOrderResponse> = yield call(api.get, 'order')

    if (response.status === 200) {
      yield put(fetchOrdersSuccess(response.data))
      toast.success('Vendas listadas com Sucesso !')
    }
  } catch (error) {
    toast.error('Erro ao carregar a lista de vendas !')
  }

  action.callback?.()
}

function* createOrderSaga(action: createOrderType) {
  try {
    const response: AxiosResponse = yield call(api.post, 'order/', action.payload)

    if (response.status === 201) {
      toast.success('Venda Finalizada com Sucesso !')
    }
  } catch (error) {
    toast.error('Erro ao Finalizar a venda !')
  }

  action.callback?.()
}

export default all([
  takeLatest(OrderTypes.FETCH_ORDERS, fetchOrdersSaga),
  takeLatest(OrderTypes.CREATE_ORDER, createOrderSaga),
])

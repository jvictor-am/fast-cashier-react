// third party imports
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project imports
import api from '../../../services/api'

// local imports
import { fetchCustomersSuccess } from './actions'
import {
  CustomerTypes,
  fetchCustomersType,
  ICustomer,
} from './types'


function* fetchCustomersSaga(action: fetchCustomersType) {
  try {
    const response: AxiosResponse<ICustomer[]> = yield call(api.get, 'customer')

    if (response.status === 200) {
      yield put(fetchCustomersSuccess(response.data))
    }
  } catch (error) {
    toast.error('Erro ao carregar a lista de clientes !')
  }

  action.callback?.()
}

export default all([
  takeLatest(CustomerTypes.FETCH_CUSTOMERS, fetchCustomersSaga),
])

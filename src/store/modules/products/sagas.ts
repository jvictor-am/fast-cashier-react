// third party imports
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project imports
import api from '../../../services/api'

// local imports
import { fetchProductsSuccess } from './actions'
import {
  ProductTypes,
  fetchProductsType,
  IProduct,
} from './types'


function* fetchProductsSaga(action: fetchProductsType) {
  try {
    const response: AxiosResponse<IProduct[]> = yield call(api.get, 'product')

    if (response.status === 200) {
      yield put(fetchProductsSuccess(response.data))
    }
  } catch (error) {
    toast.error('Erro ao carregar a lista de produtos !')
  }

  action.callback?.()
}

export default all([
  takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProductsSaga),
])

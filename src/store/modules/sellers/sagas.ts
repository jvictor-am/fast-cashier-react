// third party imports
import { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'

// project imports
import api from '../../../services/api'

// local imports
import { fetchSellersSuccess } from './actions'
import {
  SellerTypes,
  fetchSellersType,
  ISeller,
} from './types'


function* fetchSellersSaga(action: fetchSellersType) {
  try {
    const response: AxiosResponse<ISeller[]> = yield call(api.get, 'seller')

    if (response.status === 200) {
      yield put(fetchSellersSuccess(response.data))
    }
  } catch (error) {
    toast.error('Erro ao carregar a lista de vendedores !')
  }

  action.callback?.()
}

export default all([
  takeLatest(SellerTypes.FETCH_SELLERS, fetchSellersSaga),
])

// third party imports
import axios from 'axios'

// local imports
import { BASE_URL } from './constants'


const api = axios.create({
  baseURL: BASE_URL
})

export default api

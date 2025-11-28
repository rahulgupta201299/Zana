import Axios from 'axios'
import { NetworkTypes } from "./Types"
import { API_DOMAIN, API_TIME_OUT } from '../env';

// TODO
const asHttp = Axios.create({
  baseURL: API_DOMAIN,
  timeout: API_TIME_OUT,
});

export default class Network {
  async request({ url, method, data, params, headers }: NetworkTypes) {

    const options = {
      url,
      method,
      data,
      headers,
      params
    }

    try {
      const response = await asHttp.request(options)
      const { data } = response
      return data
    } catch (error: any) {
	  console.error("API Request Error:", error);
      throw error
    }
  }
}

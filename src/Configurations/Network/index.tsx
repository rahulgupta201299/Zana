import Axios from 'axios'
import { NetworkTypes } from "./Types"

// TODO
const asHttp = Axios.create({
  baseURL: "https://your-api-base-url.com",
  timeout: 60000,
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

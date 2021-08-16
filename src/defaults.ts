import { AxiosRequestConfig } from './types/index'
/**
 * {
 *    method:'get'
 *    timeout: 0,
 *    headers:{
 *      common:{
 *          Accept: 'application/json, text/plain,'
 *        }
 *      delete:{}
 *      get:{}
 *      head:{}
 *      options:{}
 *      post:{'Content-Type': 'application/x-www-form-urlencoded'}
 *      patch:{'Content-Type': 'application/x-www-form-urlencoded'}
 *      put:{'Content-Type': 'application/x-www-form-urlencoded'}
 *    }
 * }
 */
const defaults: AxiosRequestConfig = {
  method: 'get',

  timeout: 0,

  headers: {
    common: {
      Accept: 'application/json, text/plain, */*'
    }
  }
}

const methodsNoData = ['delete', 'get', 'head', 'options']

methodsNoData.forEach(method => {
  defaults.headers[method] = {}
})

const methodWithData = ['post', 'patch', 'put']

methodWithData.forEach(method => {
  defaults.headers[method] = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default defaults

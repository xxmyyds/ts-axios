import Axios from './core/Axios'
import { AxiosIntance, AxiosRequestConfig } from './types'
import { extend } from './helpers/util'
import defaults from './defaults'

// 创建混合对象的工厂函数
function createInstance(config: AxiosRequestConfig): AxiosIntance {
  const context = new Axios(config)

  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosIntance
}

const axios = createInstance(defaults)
export default axios

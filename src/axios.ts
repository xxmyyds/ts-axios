import Axios from './core/Axios'
import { AxiosIntance } from './types'
import { extend } from './helpers/util'

// 创建混合对象的工厂函数
function createInstance(): AxiosIntance {
  const context = new Axios()

  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosIntance
}

const axios = createInstance()
export default axios

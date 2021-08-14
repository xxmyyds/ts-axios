import { isPlainObject } from './util'

// 将普通对象数据转换为json字符串 (发请求时)
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

// 将响应的data数据字符串转化为json对象 (拦截响应数据时)
export function tranformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (error) {
      //
    }
  }
  return data
}

import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import { bulidURL } from './helpers/url'
import { transformRequest, tranformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'
import xhr from './xhr'

// 入口函数
function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 处理config的函数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

// 运输处理后的url的函数
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

// 运输处理后的data函数
function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

// 运输处理后的headers的函数
function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

// 运输处理后的响应数据的函数
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = tranformResponse(res.data)
  return res
}

export default axios

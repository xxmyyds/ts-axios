import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import { bulidURL } from '../helpers/url'
import { flattenHeaders } from '../helpers/headers'
import xhr from './xhr'
import transform from './tranform'

// 入口函数
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

// 处理config的函数
function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

// 运输处理后的url的函数
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url!, params)
}

// 运输处理后的响应数据的函数
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}

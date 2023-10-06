import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosError } from 'axios'

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: 'https://9505-113-185-51-41.ngrok.io' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
      headers?: AxiosRequestConfig['headers']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      console.log(`${baseUrl}/${url}`);
      const result = await axios({
        url: `${baseUrl}/${url}`,
        method,
        data,
        params,
        headers,
      })
      return {
        data: {
          data: result.data.data,
          error: null,
          success: true,
        }
      }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          data: null,
          error: err,
          success: false,
        },
      }
    }
  }

export default axiosBaseQuery;
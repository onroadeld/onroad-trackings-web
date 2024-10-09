import { config } from '@/config'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

type Response<T> = T

const client = axios.create({
	baseURL: `${config.baseUrl}/api`,
})

export const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
	const onSuccess = (response: AxiosResponse<Response<T>>) => {
		return response.data
	}
	const onError = (error: AxiosError<Response<unknown>>) => {
		if (error.response) {
			return Promise.reject(error.response.data)
		} else {
			return Promise.reject(new Error('Network/Server error'))
		}
	}
	return client(options).then(onSuccess).catch(onError)
}

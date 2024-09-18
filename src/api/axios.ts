import { config } from '@/config'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

const client = axios.create({
	baseURL: `${config.baseUrl}/api`,
})

export const request = async (options: AxiosRequestConfig) => {
	const onSuccess = (response: AxiosResponse) => {
		return response?.data
	}
	const onError = (error: AxiosError) => {
		return Promise.reject(error.response?.data)
	}
	return client(options).then(onSuccess).catch(onError)
}

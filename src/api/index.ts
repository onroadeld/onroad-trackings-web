import { TrackingType } from '@/utils/types'
import { request } from './axios'

export const getTrackingRequest = async (token: string) => {
	return request<TrackingType>({
		method: 'GET',
		url: 'tracking',
		params: { token },
	})
}

import { TrackingType } from '@/utils/types'
import { request } from './axios'

export const getTrackingRequest = async (
	token: string,
): Promise<TrackingType> => {
	return request({
		method: 'GET',
		url: 'tracking',
		params: { token },
	})
}

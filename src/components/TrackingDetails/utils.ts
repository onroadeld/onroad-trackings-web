import { format } from 'date-fns-tz'
import { enUS } from 'date-fns/locale'

const DATE_TIME_FORMAT = 'yyyy/MM/dd - hh:mm:ss a - zzz'

export const parseDate = (dateStr: string, timeZone: string) => {
	try {
		const dateObj = new Date(dateStr)
		return format(dateObj, DATE_TIME_FORMAT, { locale: enUS, timeZone })
	} catch (error) {
		console.log(error)
		return ''
	}
}

export const calculateDuration = (duration = 0): string => {
	const totalMinutes = Math.floor(duration / 60)
	const hours = Math.floor(totalMinutes / 60)
	const minutes = totalMinutes - hours * 60
	const seconds = duration - minutes * 60 - hours * 60 * 60

	const formattedHours = hours > 0 ? `${hours}h ` : ''
	const formattedMinutes = minutes > 0 ? `${minutes}m ` : ''
	const formattedSeconds = seconds > 0 ? `${seconds}s` : ''

	const formattedDuration = `${formattedHours}${formattedMinutes}${formattedSeconds}`

	return formattedDuration.trim()
}

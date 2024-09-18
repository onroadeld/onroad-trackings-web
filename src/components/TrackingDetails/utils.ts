import { format } from 'date-fns'

const DATE_TIME_FORMAT = 'yyyy-MM-dd - hh:mm:ss a'

export const parseDate = (dateStr: string) => {
	try {
		const dateObj = new Date(dateStr)
		return format(dateObj, DATE_TIME_FORMAT)
	} catch (error) {
		console.log(error)
		return ''
	}
}

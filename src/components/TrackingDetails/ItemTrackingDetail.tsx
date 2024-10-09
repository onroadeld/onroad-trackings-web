import { FC } from 'react'

type Props = {
	title: string
	value: string
}

export const ItemTrackingDetail: FC<Props> = ({ title, value }) => {
	return (
		<div className='flex gap-1'>
			<span className='font-medium text-[15px] min-w-[140px]'>
				{title}:
			</span>
			<span className='font-semibold text-base max-sm:text-sm'>
				{value}
			</span>
		</div>
	)
}

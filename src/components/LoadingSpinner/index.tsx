import { FC } from 'react'

export const LoadingSpinner: FC = () => {
	return (
		<div
			role='status'
			className='flex justify-center items-center w-full h-full'
		>
			<span className='loading loading-ring loading-lg'></span>
		</div>
	)
}

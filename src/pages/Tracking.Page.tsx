import { FC } from 'react'
import { Map } from '../components/Map'
import { Header } from '../components/Header'

const TrackingPage: FC = () => {
	return (
		<div className='h-full w-full flex flex-col'>
			<Header />
			<div className='flex-1 h-full w-full flex py-3'>
				<div className='flex-1 w-full text-2xl'>Data deploy</div>
				<div className='flex-2 w-full'>
					<Map />
				</div>
			</div>
		</div>
	)
}

export default TrackingPage

import { Header } from '@/components/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
	return (
		<div className='h-full w-full flex flex-col px-6 max-md:px-4 max-sm:px-0'>
			<Header />
			<div className='divider m-0 max-sm:m-2'></div>
			<Outlet />
		</div>
	)
}

import { Header } from '@/components/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout: FC = () => {
	return (
		<div className='h-full w-full flex flex-col px-6 pb-6 max-md:px-4 max-md:pb-4 max-sm:px-2 max-sm:pb-2'>
			<div className='fixed z-[-1] bg-black opacity-20 inset-0'></div>
			<Header />
			<Outlet />
		</div>
	)
}

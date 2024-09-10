import { FC } from 'react'
import { AppLogoIcon } from '@/assets/icons'

export const Header: FC = () => {
	return (
		<header className='h-auto py-2 flex justify-center border-b-[1px] border-b-neutral-50 border-opacity-40'>
			<AppLogoIcon />
		</header>
	)
}

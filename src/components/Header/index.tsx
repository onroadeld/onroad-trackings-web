import { FC } from 'react'
import { AppLogoIcon } from '@/assets/icons'

export const Header: FC = () => {
	return (
		<header className='h-[70px] flex items-center justify-center'>
			<AppLogoIcon className='max-sm:h-[40px]' />
		</header>
	)
}

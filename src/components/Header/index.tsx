import { FC } from 'react'
import { AppLogoIcon } from '@/assets/icons'

export const Header: FC = () => {
	return (
		<header className='h-auto py-3 flex justify-center max-sm:pb-0'>
			<AppLogoIcon className='max-sm:h-[40px]' />
		</header>
	)
}

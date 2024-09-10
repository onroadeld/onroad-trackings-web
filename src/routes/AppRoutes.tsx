import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import TrackingPage from '../pages/TrackingPage'
import NotFoundPage from '../pages/NotFoundPage'

export const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<TrackingPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

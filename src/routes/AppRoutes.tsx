import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import TrackingPage from '../pages/Tracking.Page'
import NotFoundPage from '../pages/NotFound.Page'

export const AppRoutes: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<TrackingPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}

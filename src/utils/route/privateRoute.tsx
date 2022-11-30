import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRoute = () => {
	const isAuth = true

	return isAuth ? <Outlet /> : <Navigate to='/login' />
}

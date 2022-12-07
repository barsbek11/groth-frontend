import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks'

export const PrivateRoute = () => {
	const isAuth = useAuth()

	return isAuth ? <Outlet /> : <Navigate to='/login' />
}

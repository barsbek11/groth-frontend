import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { LoginPage } from './login'
import { RegisterPage } from './register'
import style from './style.module.scss'

export const AuthRootComponent = () => {
	const location = useLocation()

	return (
		<div className={style.root}>
			<form>
				<Box
					width={600}
					display='flex'
					justifyContent='center'
					alignItems='center'
					flexDirection='column'
					boxShadow='5px 5px 10px #ccc'
					borderRadius={3}
					padding={5}
				>
					{location.pathname === '/register' ? (
						<RegisterPage />
					) : location.pathname === '/login' ? (
						<LoginPage />
					) : null}
				</Box>
			</form>
		</div>
	)
}

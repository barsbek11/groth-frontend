import { Box } from '@mui/material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { LoginPage } from './login'
import { RegisterPage } from './register'
import style from './style.module.scss'
import axios from 'axios'

export const AuthRootComponent = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const location = useLocation()

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		const userData = {
			email,
			password,
		}

		const user = await axios.post('http://localhost:5000/login', userData)

		console.log(userData)
	}

	return (
		<div className={style.root}>
			<form onSubmit={handleSubmit}>
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
						<LoginPage setEmail={setEmail} setPassword={setPassword} />
					) : null}
				</Box>
			</form>
		</div>
	)
}

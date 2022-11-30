import { Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
	return (
		<div>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='h4'
				component='h2'
			>
				Регистрация
			</Typography>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='username'
				variant='standard'
				placeholder='Введите ваш username'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='e-Mail'
				variant='standard'
				placeholder='Введите ваш e-Mail'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Пароль'
				variant='standard'
				placeholder='Введите ваш пароль'
				type='password'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Пароль'
				variant='standard'
				placeholder='Пароль'
				type='password'
			/>
			<Button
				sx={{ margin: '10px', background: '#000' }}
				fullWidth={true}
				variant='contained'
			>
				Регистрация
			</Button>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='body1'
				component='h2'
			>
				У вас уже есть аккаунта ?
				<Link style={{ marginLeft: '5px' }} to='/login'>
					Войти
				</Link>
			</Typography>
		</div>
	)
}

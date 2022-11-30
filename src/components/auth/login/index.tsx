import { Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
	return (
		<div>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='h4'
				component='h2'
			>
				Войдите в свой профиль
			</Typography>
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
			<Button
				sx={{ margin: '10px', background: '#000' }}
				fullWidth={true}
				variant='contained'
			>
				Войти
			</Button>
			<Typography
				fontFamily='Poppins'
				textAlign='center'
				variant='body1'
				component='h2'
			>
				У вас нет аккаунта ?
				<Link style={{ marginLeft: '5px' }} to='/register'>
					Регистрация
				</Link>
			</Typography>
		</div>
	)
}

import { Button, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

export const RegisterPage = () => {
	return (
		<div>
			<Typography
				fontFamily='Open Sans'
				textAlign='center'
				variant='h4'
				component='h2'
				sx={{
					color: '#2B2B2B',
					fontWeight: 700,
					fontSize: '24px',
					margin: '20px 0 32px 0',
				}}
			>
				Создайте свой профиль
			</Typography>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Имя'
				variant='outlined'
				type='text'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Email'
				variant='outlined'
				type='email'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Пароль'
				variant='outlined'
				type='password'
			/>
			<TextField
				margin='normal'
				fullWidth={true}
				id='standard-basic'
				label='Повторите Пароль'
				variant='outlined'
				type='password'
			/>
			<Typography
				fontFamily='Open Sans'
				variant='body2'
				fontSize='12px'
				color='#909090'
			>
				Нажимая Создать Аккаунт ниже, Вы даете согласие на наши Условия
				использования и Заявление о конфиденциальности
			</Typography>
			<Button
				sx={{
					marginTop: '44px',
					marginBottom: '15px',
					background: '#000',
					fontFamily: 'Open Sans',
				}}
				fullWidth={true}
				variant='contained'
			>
				Зарегистрироваться
			</Button>
			<Typography
				fontFamily='Open Sans'
				textAlign='center'
				variant='body2'
				component='h2'
				color='#909090'
			>
				У вас уже есть аккаунт?
				<Link style={{ marginLeft: '5px' }} to='/login'>
					Войти
				</Link>
			</Typography>
		</div>
	)
}

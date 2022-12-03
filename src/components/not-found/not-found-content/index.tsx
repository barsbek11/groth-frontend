import { Typography } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { INotFoundProps } from './not-found-interface'

export const NotFoundContent: FC<INotFoundProps> = ({
	text,
	link,
}: INotFoundProps) => {
	return (
		<>
			<Typography sx={{ color: 'whitesmoke', fontWeight: 500 }} variant='h2'>
				404
			</Typography>
			<Typography
				sx={{
					color: 'whitesmoke',
					fontWeight: 700,
					letterSpacing: 1,
					fontSize: '25px',
				}}
				variant='subtitle2'
			>
				{text}
			</Typography>
			<Link to={`${link}`}>Назад</Link>
		</>
	)
}

interface INotFoundProps {
	not: string
	count?: number | string
}

export const NotFound = (props: INotFoundProps) => {
	console.log(props)

	return <h1>Not Found...</h1>
}

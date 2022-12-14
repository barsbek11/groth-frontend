export interface IPropsLogin {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
}

export interface IPropsRegister {
	setEmail: (value: string) => void
	setPassword: (value: string) => void
	setFirstName: (value: string) => void
	setUsername: (value: string) => void
	setRepeatPassword: (value: string) => void
}

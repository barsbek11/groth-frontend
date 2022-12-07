import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: {},
	isAuth: false,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload
			state.isAuth = true
		},
	},
})

export const { login } = authSlice.actions
export default authSlice.reducer

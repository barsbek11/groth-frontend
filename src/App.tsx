import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthRootComponent } from './components/auth'
import { HomePage } from './components/home'
import { NotFoundRootComponent } from './components/not-found'
import { PrivateRoute } from './utils/route/privateRoute'

const App = () => {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<PrivateRoute />}>
					<Route path='/' element={<HomePage />} />
				</Route>
				<Route path='/register' element={<AuthRootComponent />} />
				<Route path='/login' element={<AuthRootComponent />} />
				<Route path='*' element={<NotFoundRootComponent />} />
			</Routes>
			<ToastContainer />
		</div>
	)
}

export default App

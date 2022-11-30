import { Routes, Route } from 'react-router-dom'
import { AuthRootComponent } from './components/auth'
import { HomePage } from './components/home'
import { NotFound } from './components/not-found'
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
				<Route path='*' element={<NotFound not='Not Found' count='3' />} />
			</Routes>
		</div>
	)
}

export default App

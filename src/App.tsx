import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
	Landingpage,
	ContentPlayer,
	Login,
	Library,
} from './components/pages/index';
import ProtectedRoute, {
	ProtectedRouteProps,
} from './components/utils/ProtectedRoute/ProtectedRoute.component';
function AppWrapper() {
	return (
		<Router>
			<App />
		</Router>
	);
}
function App() {
	const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
		token: localStorage.getItem('token'),
		redirect: '/login/',
	};
	return (
		<div className='App'>
			<Routes>
				<Route path='/content' element={<ContentPlayer />} />
				<Route path='/' element={<Landingpage />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/cms/'
					element={
						<ProtectedRoute
							{...defaultProtectedRouteProps}
							outlet={<Library />}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default AppWrapper;

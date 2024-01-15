import { useState } from 'react';
import Request from '../../utils/Request/Request';

const Login = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setError] = useState(false);
	const [isResult, setResult] = useState('');
	const [isEmail, setEmail] = useState('');
	const [isPassword, setPassword] = useState('');

	async function do_login() {
		const Response = await Request('/user/login/', {
			email: isEmail,
			password: isPassword,
		});
		console.log(Response);
		if (Response.token) {
			localStorage.setItem('token', Response.token);
		} else {
			setError(Response.error);
		}
	}

	return (
		<div>
			<input
				type='text'
				id='email'
				placeholder='email'
				onInput={(e) => setEmail(e.target.value)}
			/>
			<br />
			<br />
			<input
				type='text'
				id='password'
				placeholder='password'
				onInput={(e) => setPassword(e.target.value)}
			/>
			<br />
			<br />
			<button
				id='login'
				onClick={() => {
					do_login();
				}}
			>
				in loggen
			</button>
			<br />
			<div>{isError ? isError : ''}</div>
			{/*<div>{isLoaded ? 'call klaar' : ''}</div>
			<br />
			
			<br />
			<div>{isResult != '' ? isResult : ''}</div>
			<br />*/}
		</div>
	);
};

export default Login;

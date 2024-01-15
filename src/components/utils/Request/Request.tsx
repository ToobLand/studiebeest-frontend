const Request = async (Url: string, Data: object) => {
	const token = localStorage.getItem('token');
	const response = await fetch('http://localhost:8888' + Url, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
		body: JSON.stringify(Data),
	});
	const data = await response.json();
	// to do : check for Refresh token,
	// - check for invalid token and remove token and redirect to login page
	return data;
};
export default Request;

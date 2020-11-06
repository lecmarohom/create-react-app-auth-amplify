let utility = require( './utility');

export const register = (name, username, password) => {
    return dispatch => {

        let headers = {
			'Content-Type': 'application/json',
			'Accept' : 'application/json',
        };
        
        let body = JSON.stringify({
            name: name,
			username: username,
			password: password
            });
            
            return fetch( utility.GetURL('/SignIn/register'), {headers, method: 'POST', body})
			.then(res => res.json())
			.then(response => {
				console.log('jajaalalala')
				if(response.status === 200 ){
					return dispatch({
						type: 'SIGNUP_SUCCESS',
						response,
					})
				}
				else{
					console.log('login failed')
					return dispatch({
					type: 'SIGNUP_FAILED',
					response,
				})
				}
			})
    }
}
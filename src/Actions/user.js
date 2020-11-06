let utility = require( './utility');


export const getToken = (username, password) => {
	return dispatch => {
		
		let headers = {
			'Content-Type': 'application/json',
			'Accept' : 'application/json',
		};
	

        let body = JSON.stringify({
			username: username,
			password: password
			});
			return fetch( utility.GetURL('/SignIn'), {headers, method: 'POST', body})
			.then(res => res.json())
			.then(response => {
				if(response.status === 200 ){
					return dispatch({
						type: 'LOGIN_SUCCESS',
						response,
					})
				}
				else{
					console.log('login failed')
					return dispatch({
					type: 'LOGIN_FAILED',
					response,
				})
				}
			})
	}

}

export const logout = () => {
	return dispatch => {
		return dispatch({
			type: 'LOGOUT',
		})
	}
}



// export const login = (loginData) => {
//     return {
//       type: SET_LOGIN_STATE,
//       payload: loginData,
//     };
//   };

// export const logout = (loginData) => {
//     return {
//       type: SET_LOGOUT_STATE,
//       payload: loginData,
//     };
//   };




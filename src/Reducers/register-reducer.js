const details = {
    name: '',
    username: '',
	password: '',
    isAuthenticated: '',
    invalidLogin: ''
}
export default function user(state=details, action){
    let info;
    switch (action.type) {
        case 'SIGNUP_SUCESS':
            const {user} = action.response;
			localStorage.setItem('name:', user.name);
			localStorage.setItem('username', user.username);
			localStorage.setItem('password', user.password);
			localStorage.setItem('isAuthenticated', true);

			info = Object.assign({}, state, {
				isAuthenticated: true,
				invalidLogin: false,
			 });
            return info;

        case 'SIGNUP_FAILED':
            info = Object.assign({}, state, {invalidLogin: 'true'});
            return info;
            
        default:
		    return state;
    };
};
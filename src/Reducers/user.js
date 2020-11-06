// import {user} from '../Actions'

const details = {
    name: '',
    username: '',
	password: '',
	isAuthenticated: ''
}
export default function user(state=details, action){
    let info;
    switch (action.type) {
        case 'LOGIN_SUCESS':
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

        case 'LOGIN_FAILED':
            info = Object.assign({}, state, {invalidLogin: 'true'});
            return info;
            
        case 'LOGOUT':
            localStorage.clear();
			info = Object.assign({}, state, {
				token: '',
				isAuthenticated: false,
				invalidLogin: false});
            return info;
            
        default:
		    return state;
    };
};


// export default function user(state=details, action){
//     let info;
//     switch (action.type) {
//         case 'LOGIN_SUCESS':
//             const {user} = action.response;
// 			localStorage.setItem('token', action.response.token);
// 			localStorage.setItem('firstName:', user.firstName);
// 			localStorage.setItem('username', user.username);
// 			localStorage.setItem('password', user.password);
// 			localStorage.setItem('role', user.role);
// 			localStorage.setItem('_id', user._id);
// 			localStorage.setItem('isAuthenticated', true);

// 			info = Object.assign({}, state, {
// 				token: action.response.token,
// 				isAuthenticated: true,
// 				invalidLogin: false,
// 				role: user.role });
//             return info;

//         case 'LOGIN_FAILED':
//             info = Object.assign({}, state, {invalidLogin: 'true'});
//             return info;
            
//         case 'LOGOUT':
//             localStorage.clear();
// 			info = Object.assign({}, state, {
// 				token: '',
// 				isAuthenticated: false,
// 				invalidLogin: false});
//             return info;
            
//         default:
// 		    return state;
//     };
// };

// export default function user (state=details, action) {
//     switch (action.type){
//         case user.login:
//             return{
//                 ...state,
//                 ...action.payload,
//                 isLoggedIn : true,
//             };
//         case user.logout:

//     };
// };



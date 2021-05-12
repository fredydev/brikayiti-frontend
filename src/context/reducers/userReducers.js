const initState = {
	token: '',
	username: '',
	email: '',
	message: '',
	isLoading: false,
	isLoggedIn: false
};
// eslint-disable-next-line
export default function(state = initState, action) {
	// console.log(action)
	// console.log(state.type)
	switch (action.type) {
		case 'LOGIN_USER':
			// console.log(action)
			return {
				...state,
				token: action.payload.token,
				username: action.payload.username,
				email: action.payload.email,
				isLoggedIn: true
			}
		case 'REGISTER_USER':
			return {
				...state,
				token: action.payload.token,
				username: action.payload.username,
				email: action.payload.email,
				// a voir
			}
		case 'FAIL':
			return {
				...state,
				message: action.message,
				isLoggedIn: false
			}	
		case 'LOG_OUT':
			return {
				initState
			}
		default:
			// console.log("polo")
			console.log(state)
			return state;
	}
}
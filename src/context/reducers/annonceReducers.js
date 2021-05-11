const initState = {
	annonces: [],
	total: 0,
	action: null,
};
// eslint-disable-next-line
export default function( action,state = initState) {
	switch (action.type) {
		case 'GET_ANNONCES':
			return {
				...state,
				annonces: action.payload,
				total: action.payload.length,
			}
		case 'GET_ANNONCE':
			return {
				...state,
				annonce: action.payload,
			}
		case 'CREATE_ANNONCE':
			return {
				...state,
			}
		// case 'UPDATE_ANNONCE':
		// 	return {
		// 		...state,
		// 	}
		case 'ADD_OR_REDUCE':
			return {
				...state,
				action: action.payload,
			}
		case 'DELETE_ANNONCE':
			return {
				...state,
				annonces: state.annonces.filter(annonce => annonce.id !== action.payload.id),
			}
		case 'DELETE_SINGLE_ANNONCE':
			return {
				...state,
				annonces: {},
			}
		default:
			return state;
	}
}
const initState = {
	categories: [],
};
// eslint-disable-next-line
export default function( action,state = initState) {
	switch (action.type) {
		case 'GET_CATEGORIES':
			return {
				...state,
				categories: action.payload.values
			}
		case 'CREATE_CATEGORY':
			return {
				...state,
			}
		// case 'UPDATE_CATEGORY':
		// 	return {
		// 		...state,
		// 	}
		case 'DELETE_CATEGORY':
			return {
				...state,
				categories: state.categories.filter(category => category.id !== action.payload.id),
			}
		default:
			return state;
	}
}
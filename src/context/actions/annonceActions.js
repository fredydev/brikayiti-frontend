import axios from 'axios';
import { dispatcher } from '../GlobalState';
import { API } from '../api';

export const getAnnonces = async (query) => {
	console.log("noula")
	dispatcher.setIsLoaded(false)
	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};
	fetch(API+"/annonces"+query,requestOptions)
	.then(response => response.json())
    .then(result => {
		console.log(result)
		dispatcher.dispatchAnnonce({
			type: 'GET_ANNONCES',
			payload: result
		})
	})
	.then(() => dispatcher.setIsLoaded(true))
}

export const getAnnonce = id => {
	dispatcher.setIsLoaded(false)
	axios.get(API+'/annonces/' + id)
		.then(res => {
			dispatcher.dispatchAnnonce({
				type: 'GET_ANNONCE',
				payload: res.data
			})
		})
		.then(() => dispatcher.setIsLoaded(true))
	
}

export const createAnnonce = (data, user) => {
	dispatcher.setIsLoaded(false)
	dispatcher.dispatchAnnonce({
		type: 'CREATE_ANNONCE',
		payload: axios.post(API+'/annonces', data, {headers: {token: user.token}})
	})
}

export const updateAnnonce = (id, data, user) => {
	dispatcher.setIsLoaded(false)
	dispatcher.dispatchAnnonce({
		type: 'UPDATE_ANNONCE',
		payload: axios.put(+'/annonces/' + id, data, {headers: {auth: user.token}})
	})
}

export const addOrReduce = (id, action, user) => {
	const act = {action};
	axios.put(API+'/annonces/' + id, act, {headers: {auth: user.token}})
		.then(res => {
			dispatcher.dispatchAnnonce({
				type: 'ADD_OR_REDUCE',
				payload: action,
				message: res.data.message
			});
		})
		
}

export const deleteAnnonce = (id, user) => {
	dispatcher.setIsLoaded(false)
	axios.delete(API+'/annonces/' + id, {headers: {auth: user.token}})
		.then(res => {
			dispatcher.dispatchAnnonce({
				type: 'DELETE_ANNONCE',
				payload: res.data
			})
		})
		.then(() => dispatcher.setIsLoaded(true))
	
}

export const deleteSingleAnnonce = (id, user) => {
	dispatcher.setIsLoaded(false)
	axios.delete(API+'/annonces/' + id, {headers: {auth: user.token}})
		.then(res => {
			dispatcher.dispatchAnnonce({
				type: 'DELETE_SINGLE_ANNONCE',
				payload: res.data
			})
		})
		.then(() => dispatcher.setIsLoaded(true))
}
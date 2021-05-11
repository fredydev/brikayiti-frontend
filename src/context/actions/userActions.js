// import axios from 'axios';
import { dispatcher } from '../GlobalState';
import { API } from "../api";
import { Auth } from 'aws-amplify'

export const loginUser =  user => {
	Auth.signIn(user.username, user.password)
		.then(res=>{
			//console.log(user)
			getUserdata(res.attributes.sub)
			.then(data=>{
				//console.log(data)
				dispatcher.dispatchUser({
					type: 'LOGIN_USER',
					payload: data
				})
			})
			.catch(err=>console.log(err))
		})
		.catch(err=>{
			//console.log(err)
			dispatcher.dispatchUser({
				type: 'FAIL',
				message: err
			});
			dispatcher.setIsError(true);
		})
	
}
export const onRouteUpdateContext =  () => {
	Auth.currentAuthenticatedUser()
	.then(user => {
		//console.log(user)
		getUserdata(user.attributes.sub)
		.then(data=>{
			//console.log(data)
			dispatcher.dispatchUser({
				type: 'LOGIN_USER',
				payload: data
			})
		})
		.catch(err=>console.log(err))	
	})
	.catch(err => {
		window.localStorage.setItem('gatsbyUser', null)
	})
}
export const getUserdata = async (sub) => {
	let token = await getToken()
	let myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer "+token)
	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};
	let result = await fetch(API+"/users/"+sub,requestOptions)
	.then(resp=>resp.json())
	.then(data=>{
		let newdata = {...data.user}
		newdata.token = token
		return newdata
	})
	.catch((err)=>{
		return err
	})
	return result
}

const getToken = async () => {
	let  token = (await Auth.currentSession()).getIdToken().getJwtToken()
	return token
}
export const registerUser = (stage,user = {}) => {
	if(stage===0){
		console.log("registring")
		Auth.signUp(user)
		.then(()=>{
			console.log(user)
			dispatcher.setSignupStage(1)
		})
		.catch(err=>{
			console.log('error signing up...', err)
		})
	}
	else{
		Auth.confirmSignUp(user.username, user.authCode)
		.then((data)=>{
			console.log(data)
			dispatcher.setSignupStage(data)
			console.log("confirmation done")
		})
		.catch(err=>console.log("error confirming", err))
	}
}

export const logOut = () => {
	Auth.signOut()
	.then(()=>{
		return	dispatcher.dispatchUser({
			type: 'LOG_OUT',
		})
	})
	
}
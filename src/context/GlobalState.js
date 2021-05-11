import React, { useState, useReducer, createContext } from 'react';
// import axios from 'axios';

import { getCategory, createCategory, updateCategory, deleteCategory } from './actions/categoryActions';
import { onRouteUpdateContext, loginUser, registerUser, logOut } from './actions/userActions';
import { getAnnonces, getAnnonce, createAnnonce, updateAnnonce, addOrReduce, deleteAnnonce, deleteSingleAnnonce } 
from './actions/annonceActions';


import annonceReducers from './reducers/annonceReducers';
import categoryReducers from './reducers/categoryReducers';
import userReducers from './reducers/userReducers';

export const GlobalContext = createContext();

export let dispatcher = {}

export const GlobalState = props => {
  const [annonces, dispatchAnnonces] = useReducer(annonceReducers, {annonces: {}});
  const [annonce, dispatchAnnonce] = useReducer(annonceReducers, {annonce: {}});
  const [category, dispatchCategory] = useReducer(categoryReducers, {category: {}});
  const [user, dispatchUser] = useReducer(userReducers, {user: {}});
  // console.log(user)
  const [isLoaded, setIsLoaded] = useState(false);
  const [isRedirected, setIsRedirected] = useState(false);
  const [isError, setIsError] = useState(false);
  const [signupStage, setSignupStage] = useState(0);

  dispatcher = {
    dispatchAnnonces,
    dispatchAnnonce,
    dispatchCategory,
    dispatchUser,
    setIsLoaded,
    setIsRedirected,
    setIsError,
    setSignupStage
  }

  const annonceActions = {
    getAnnonces,
    getAnnonce,
    createAnnonce,
    updateAnnonce,
    addOrReduce,
    deleteAnnonce,
    deleteSingleAnnonce
  }

  const categoryActions = {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
  }

  const userActions = {
    onRouteUpdateContext,
    loginUser,
    registerUser,
    logOut
  }

  // category, user,

  return (
    <GlobalContext.Provider
      value={{ annonces, annonce, category, user, isLoaded, isRedirected, isError,
               annonceActions, categoryActions, userActions,signupStage }}
    >

      {props.children}

    </GlobalContext.Provider>
  );
};
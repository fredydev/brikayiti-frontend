import React,{useContext} from "react"
import {Redirect, Route} from "react-router-dom"
import { GlobalContext } from '../context/GlobalState';

const PrivateRoute = ({component: Component, ...rest}) => {
    const context = useContext(GlobalContext)
    const {isLoggedIn} = context.user;
    return (
      <Route {...rest} render={props => (
        isLoggedIn ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: {from: props.location}
          }}/>
        )
      )}
      />
    );
  };
  
//   PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//   };
  
 
  export default (PrivateRoute);
  
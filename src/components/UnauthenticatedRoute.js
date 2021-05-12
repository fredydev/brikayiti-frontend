import React from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute({ children,auth, ...rest }) {
  const context = useContext(GlobalContext)
  const redirect = querystring("redirect");
  // console.log(auth)
  return (
    <Route {...rest}>
      {!isAuthenticated ? (
        children
      ) : (
        <Redirect to={redirect === "/" || redirect === null ? "/dashboard" : redirect} />
      )}
    </Route>
  );
}
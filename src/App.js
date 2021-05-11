import React,{useEffect} from 'react';
import Main from './components/Main';
import './App.css';
 import {onRouteUpdateContext} from "./context/actions/userActions"
import { BrowserRouter } from 'react-router-dom';


const App = () => {

  useEffect(() => {
    onRouteUpdateContext()
  }, []);

    return (
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
    );
}

export default App;
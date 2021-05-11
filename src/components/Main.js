import React from 'react'
import Home from "./homepage"
import Login from "./authentication-ui/Login"
import Signup from "./authentication-ui/Signup"
import Annonces from "./annonces/post/index"
import Search from "./annonces/get/index"
import Profile from "./profile"
import Annonce from "./annonces/get/One"
import {Switch, Route} from "react-router-dom"
import { GlobalState } from '../context/GlobalState';

export default function Main() {
    return (
        <div>
            <GlobalState>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/new-annonce" component={Annonces} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/:category/:subcategory/:id" component={Annonce} />
                    {/* <Route exact path='/login' component={() => <Login leaders={this.props.leaders} />} />
                    <Route exact path="/menu" component={() => <Signup dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <PrivateRoute exact path="/favorites" component={() => <Favorites favorites={this.props.favorites} deleteFavorite={this.props.deleteFavorite} />} />
                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                    <Redirect to="/home" /> */}
                </Switch>
            </GlobalState>
            
        </div>
    )
}

import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import {Link} from 'react-router-dom';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Quizzpage from "./Quizzpage.js";
import Login from "./login.js";

import Q404 from "./Q404.js";


class Menu extends Component {
	render() {
		return (
			<div id="MenuBar">
                <nav>

                    <Link  className="menuCase" to={'/about'}><img src={HTTP_SERVER_PORT_PICTURES + "profil.svg"} alt="profil button"/> </Link>
                    <Link  className="menuCase" to={'/about'}><img src={HTTP_SERVER_PORT_PICTURES + "scoreboard.svg"} alt="scoreboard button"/> </Link>
                    <Link  className="menuCase" to={'/about'}><img src={HTTP_SERVER_PORT_PICTURES + "create_quiz.svg"} alt="create quiz button"/> </Link>
                    <Link  className="menuCase" to={'/about'}><img src={HTTP_SERVER_PORT_PICTURES + "logout.svg"} alt="logout button"/> </Link>

                </nav>
            </div>
		)
	}
}

class Nav extends Component {
    render() {
        return (
            <div id="NavBar">

                <Link  className="header-logo" to={'#'}><img src={HTTP_SERVER_PORT_PICTURES + "logo.png"} alt="Q'Art's logo"/> </Link>


                <form className="search_bar" action="#">
                    <input type="text" placeholder="Search..." name="search2"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>

                <div className="header-toogle">
                    <Link className="header-toogle-open" to={'#NavBar'}><img src={HTTP_SERVER_PORT_PICTURES + "menu_open.png"} width="30" alt="Open Menu"/></Link>
                    <Link className="header-toogle-close" to={'#'}><img src={HTTP_SERVER_PORT_PICTURES + "menu_close.png"} width="30" alt="Close Menu"/></Link>
                </div>


                <Menu/>

            </div>
        )
    }
}


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact={true} path="/Login" component={Login} />
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/about" component={About} />
                        <Route exact={true} path="/quizz/:id" component={Quizzpage} />
                        <Route path="*" component={Q404} />
                    </Switch>

					<Nav/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

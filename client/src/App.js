import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import {Link} from 'react-router-dom';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";

import Login from "./login.js";

import Q404 from "./Q404.js";


class Nav extends Component {
	render() {
		return (
			<div id="NavBar">
                <nav>

                    <Link  className="navCase" to={'/about'}><img src="/src/img/profil.svg" alt="profil button"/> </Link>
                    <Link  className="navCase" to={'/about'}><img src="/img/scoreboard.svg" alt="scoreboard button"/> </Link>
                    <Link  className="navCase" to={'/about'}><img src="img/create_quiz.svg" alt="create quiz button"/> </Link>
                    <Link  className="navCase" to={'/about'}><img src="/src/img/logout.svg" alt="logout button"/> </Link>



                </nav>
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
                        <Route path="*" component={Q404} />
                    </Switch>

					<Nav/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

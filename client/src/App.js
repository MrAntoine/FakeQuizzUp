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
                    <div className="navCase">
                    <Link  to={'/profil'}>Profil</Link>
                    </div>

                    <div className="navCase">
                        <Link  to={'/profil'}>Scoreboard</Link>
                    </div>

                    <div className="navCase">
                        <Link  to={'/profil'}>Create a quizz</Link>
                    </div>

                    <div className="navCase">
                        <Link  to={'/profil'}>About us</Link>
                    </div>


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

import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";

import Login from "./login.js";
import ScoreBoard from "./ScoreBoard.js"
import Q404 from "./Q404.js";


class Nav extends Component {
	render() {
		return (
			<div>
				Coucou
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
                        <Route exact={true} path="/Scoreboard" component={ScoreBoard} />
                        <Route exact={true} path="/Login" component={Login} />
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/about" component={About} />
                        <Route path="*" component={Q404} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

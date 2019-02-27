import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

import {Link} from 'react-router-dom';

import {BrowserRouter, Switch, Route} from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Quizzpage from "./Quizzpage.js";
import Login from "./login.js";
import ScoreBoard from "./ScoreBoard.js"
import Q404 from "./Q404.js";


class Menu extends Component {


	render() {
	    if(this.props.display==0)
	        return null
		return (
			<div id="MenuBar">
                <nav>
                    <Link  onClick={(e) => this.props.toggle(e)} className="menuCase" to={'/profil'}><img src={HTTP_SERVER_PORT_PICTURES + "profil.svg"} alt="profil button"/> </Link>
                    <Link  onClick={(e) => this.props.toggle(e)} className="menuCase" to={'/scoreboard'}><img src={HTTP_SERVER_PORT_PICTURES + "scoreboard.svg"} alt="scoreboard button"/> </Link>
                    <Link  onClick={(e) => this.props.toggle(e)} className="menuCase" to={'/newQuizz'}><img src={HTTP_SERVER_PORT_PICTURES + "create_quiz.svg"} alt="create quiz button"/> </Link>
                    <Link  onClick={(e) => this.props.toggle(e)} className="menuCase" to={'/logout'}><img src={HTTP_SERVER_PORT_PICTURES + "logout.svg"} alt="logout button"/> </Link>
                </nav>
            </div>
		)
	}
}

class Nav extends Component {
    render() {
        return (
            <div id="NavBar">


                    <Link className="header-logo" to={'#'}><img src={HTTP_SERVER_PORT_PICTURES + "logo.png"}
                                                                alt="Q'Art's logo"/> </Link>
                    <form className="search_bar" action="#">
                        <input type="text" placeholder="Search..." name="search2"/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </form>


                <div className="header-toogle" onClick={(e) => this.props.display(e)}>
                    <Link id='open' className="header-toogle-open" to={'#'}><img src={HTTP_SERVER_PORT_PICTURES + "menu_open.png"} width="30" alt="Open Menu"/></Link>
                    <Link id='close' className="header-toogle-close" to={'#'}><img src={HTTP_SERVER_PORT_PICTURES + "menu_close.png"} width="30" alt="Close Menu"/></Link>
                </div>

            </div>
        )
    }
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {display: 0};
        this.display = this.display.bind(this);
    }

    display(e) {
       // e.preventDefault();
        if (this.state.display == 1) {
            console.log(1);
           document.getElementById("close").style.display = 'none';
            document.getElementById("open").style.display = 'inline-block';

        }else {
            document.getElementById("close").style.display = 'inline-block';
            document.getElementById("open").style.display = 'none';
            console.log(2);
        }
        this.setState({display : 1 - this.state.display});
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Nav display={this.display}/>
                    <Menu toggle={this.display} display={this.state.display}/>
                    <Switch>
                        <Route exact={true} path="/Scoreboard" component={ScoreBoard} />
                        <Route exact={true} path="/Login" component={Login} />
                        <Route exact={true} path="/" component={Home} />
                        <Route exact={true} path="/about" component={About} />
                        <Route exact={true} path="/quizz/:id" component={Quizzpage} />
                        <Route path="*" component={Q404} />
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;

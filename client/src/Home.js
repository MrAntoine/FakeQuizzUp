import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {Link} from 'react-router-dom';
import axios from "axios";

class Thumbnails extends Component {
    render (){
        const divStyle = {
            backgroundImage: 'url(' + HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon + ')',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        };

        return (
            <Link  to={'/quizz/' + this.props.quizz._id}>
            <div className="quizItem" style={divStyle}>
                <span>
                    <h1 className='quizName'>{this.props.quizz.name}</h1>
                </span>
                <img className='quizPicture' src={HTTP_SERVER_PORT_PICTURES + this.props.quizz.icon}/>
            </div>
            </Link>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <h1 id="quizCategories">Quizz categories : </h1>
                <div className='quizList'>
                    {quizzes.map(q => <Thumbnails quizz={q}/>)}
                </div>
            </div>
        );
    }
}

export default Home;
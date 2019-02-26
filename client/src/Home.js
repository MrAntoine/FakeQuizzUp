import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class Thumbnail extends Component {
    render (){
        return (
            <div>
                {this.props.quizz.name}
            </div>
        )
    }

}

class Home extends Component {
    render() {
        return (
            <div>
                {quizzes.map(q=><Thumbnail key={q.name} quizz={q}></Thumbnail>)}
            </div>
        );
    }
}

export default Home;

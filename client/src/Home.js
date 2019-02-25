import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class thumbnails extends Component {
    render (){
        return (
            <div>
                this.props.quizzes
            </div>
        )
    }

}

class Home extends Component {
    render() {
        return (
            <div>
                {quizzes.map(q=><thumbnails quizz={q}></thumbnails>)}
            </div>
        );
    }
}

export default Home;

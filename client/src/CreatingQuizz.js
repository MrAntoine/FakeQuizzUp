import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class CreatingQuizz extends Component {
    render() {
        return(
            <div>

                    <form>
                            <input type="text" placeholder="Quizz name"/>
                            <input type="text" placeholder="Categories"/>
                            <input type="text" placeholder="Number of Question"/>
                        <div id="submit">
                            <input id="button" type="submit"/>
                        </div>

                </form>

            </div>
        );
    }
}

export default CreatingQuizz;
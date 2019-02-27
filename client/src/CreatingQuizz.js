import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';


class CreatingQuizz extends Component {
    constructor(props){
       super(props)
       this.state={
           quizz:null
       }
    }
    createquizz(e){
        e.preventDefault()
        this.setState({
            quizz:{
                name:document.getElementById('name').value,
                keywords:document.getElementById('categorie').value,
                questions:{
                    question:document.getElementById('question').value
                }
            }
        })
        console.log(this.state.quizz)
    }
    render() {
        return(
            <div>

                    <form onSubmit={(e)=>this.createquizz(e)}>
                            <input type="text" placeholder="Quizz name" id="name"/>
                            <input type="text" placeholder="Categories" id="categorie"/>

                            <input type="text" placeholder="Question" id="question"/>
                            <input type="text" placeholder="Answers" id="answers1"/>
                            <input type="text" placeholder="Answers" id="answers2"/>
                            <input type="text" placeholder="Answers" id="answers3"/>
                            <input type="text" placeholder="Answers" id="answers4"/>
<br/>
                            <input id="button" type="submit"/>
                </form>

            </div>
        );
    }
}

export default CreatingQuizz;
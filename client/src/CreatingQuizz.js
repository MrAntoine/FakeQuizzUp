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

    addingsolution(e){
        let solution=[]
        for(let i = 0; i < e.target.elements.length; i++) {
            if(e.target.elements[i].checked)
                solution.push(i);
        }

    }
    createquizz(e,t){
        e.preventDefault()
        this.setState({
            quizz:{
                name:document.getElementById('name').value,
                keywords:document.getElementById('categorie').value,
                questions:{
                    question:document.getElementById('question').value,
                    txtAnswers:[document.getElementById('answers1').value,document.getElementById('answers2').value,document.getElementById('answers3').value,document.getElementById('answers4').value],
                    solutions:this.addingsolution(e),
                    score: document.getElementById('score'),
                }
            }
        })
        console.log(this.state.quizz)
    }
    render() {
        return(
            <div>

                    <form onSubmit={(e)=>this.createquizz(e)} class="createquizzform">
                            <input type="text" placeholder="Quizz name" id="name"/>
                            <input type="text" placeholder="Categories" id="categorie"/>

                            <input type="text" placeholder="Question" id="question"/>
                            <input type="text" placeholder="Answers" id="answers1"/><input type="checkbox" value="0"/>
                            <input type="text" placeholder="Answers" id="answers2"/><input type="checkbox" value="1"/>
                            <input type="text" placeholder="Answers" id="answers3"/><input type="checkbox" value="2"/>
                            <input type="text" placeholder="Answers" id="answers4"/><input type="checkbox" value="3"/>
                        <input type="text" placeholder="Score" id="score"/>
<br/>
                            <input id="button" type="submit"/>
                </form>

            </div>
        );
    }
}

export default CreatingQuizz;
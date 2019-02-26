import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';

class Question extends Component {


    render() {
        return (
            <div>
                {this.props.question.question}

            </div>
        );
    }
}

class TxtAnswers extends Component {


    render() {
        console.log(this.props.question);
        const t = this.props.question.txtAnswers.map(s => <div key={s}><input type="checkbox" value={s} name="test"/> {s}</div>);
        return (
            <div>
                {t}
            </div>
        );
    }
}
class ImgAnswers extends Component {


    render() {
        console.log(this.props.question);
        const t = this.props.question.imgAnswers.map(s => <div key={s}><input type="checkbox" value={s} name="test"/><img src={HTTP_SERVER_PORT_PICTURES + s} /></div>);
        return (
            <div>
                {t}
            </div>
        );
    }
}

class Quizzpage extends Component {

    constructor(props) {
        super(props);

        this.quizz = quizzes.filter(q=> q._id == this.props.match.params.id)[0];
        this.state = {current : 0, score : 0};
    }


    reponse(e)  {
        e.preventDefault();
        const question = this.quizz.questions[this.state.current];
        let choices = [];
        let verification = false;
        for(let i = 0; i < e.target.elements.length; i++) {
            if(e.target.elements[i].checked)
                choices.push(i);
        }
        // choices == question.solutions
            if(choices.length == question.solutions.length){
                for(let i = 0; i<choices.length; i++){
                    if(choices[i]===question.solutions[i]){
                        verification = true;
                    }
                    else{
                        verification = false;
                    }
                }
            }
            if(verification){
                this.state.score = this.state.score + question.points;
            }


        this.setState({current : this.state.current + 1 });


    }

    render() {
        if(this.state.current == this.quizz.questions.length)
            return (
                <div>C fini {this.state.score}</div>
            );

        const question = this.quizz.questions[this.state.current];
        return (
            <div>

                {this.quizz.name}

                <Question question = {question} />
                <form onSubmit={(e)=> this.reponse(e)}>
                <TxtAnswers question={question}/>
                <ImgAnswers question={question}/>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default Quizzpage;

import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios';
import {Link} from "react-router-dom";
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
        const t = this.props.question.txtAnswers.map(s => <div key={s} id={"txtanswers"}><input type="checkbox" value={s} name="test"/> {s}</div>);
        return (
            <div className="grid-text">
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
            <div className="grid-img">
                {t}
            </div>
        );
    }
}

class Quizzpage extends Component {

    constructor(props) {
        super(props);

        this.quizz = quizzes.filter(q=> q._id == this.props.match.params.id)[0];

        this.maxScore = this.quizz.questions.map(q=>q.points).reduce((acc,current)=>acc+current);
        const miScore = this.maxScore/2;
        console.log("maxScore=",this.maxScore);
        console.log(miScore)
        this.state = {current : 0, score : 0};
    }

    async loadData() {
        const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizz')).data;  // We need to wait for the response.
        this.setState({quizzes: quizzes});
      }

      componentDidMount(){
          this.loadData()
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
                let ok=true;
                for(let i = 0; ok && i<choices.length; i++){
                    if(choices[i]!==question.solutions[i]){
                        ok=false;
                    }
                }
                if(ok){
                    this.state.score = this.state.score + question.points;
                }
            }





        this.setState({current : this.state.current + 1 });


    }

    render() {
        if(this.state.current == this.quizz.questions.length) {
            let c = null;

            if (this.state.score == this.maxScore)
                c = "Youpi";

            else if(this.state.score<this.maxScore/2)
                c = "Peut mieux faire";

            return (
                <div>C fini {this.state.score} sur {this.maxScore} {c}
                    <Link to={"/"}>
                    <button>Home</button>
                    </Link>
                </div>
            );
        }
        const question = this.quizz.questions[this.state.current];
        return (
            <div id={"Quizzpage"}>

                <h4>{this.quizz.name}</h4>
                <div id="img">
                <img id="icon" src={HTTP_SERVER_PORT_PICTURES + this.quizz.icon}/>
                </div>
                    <br/>
                <div id="question">
                <Question question = {question} />
                </div>
                <br/>
                <form id="responseForm" onSubmit={(e)=> this.reponse(e)}>
                <TxtAnswers question={question} />
                <ImgAnswers question={question}/>

                    <div id="submit">
                    <input id="button" type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Quizzpage;

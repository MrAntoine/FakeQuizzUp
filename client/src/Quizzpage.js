import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios';
import {Link} from "react-router-dom";

import Timer from "./Timer.js";

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

        this.state = {current : 0, score : 0, start : 1};
    }


    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 1);
    }

    stopTimer() {
        this.setState({isOn: false})
        clearInterval(this.timer)
    }

    resetTimer() {
        this.setState({time: 0, isOn: false})
    }

    async loadData() {
        const quizzes = (await axios.get(HTTP_SERVER_PORT + 'quizz')).data;  // We need to wait for the response.
        this.setState({quizzes: quizzes});
      }

      componentDidMount(){
          this.loadData()
          //this.handleChange();
}
    componentWillMount() {
        clearInterval(this.timer);
    }


    reponse(e) {
        if (e != null) {
      ;
            e.preventDefault();
            const question = this.quizz.questions[this.state.current];
            let choices = [];
            let verification = false;
            for (let i = 0; i < e.target.elements.length; i++) {
                if (e.target.elements[i].checked)
                    choices.push(i);
            }
            // choices == question.solutions
            if (choices.length == question.solutions.length) {
                let ok = true;
                for (let i = 0; ok && i < choices.length; i++) {
                    if (choices[i] !== question.solutions[i]) {
                        ok = false;
                    }
                }
                if (ok) {
                    this.state.score = this.state.score + question.points;
                }
            }
        }
        this.setState({current : this.state.current + 1 , start : 1});


    }

    render() {
        let st = this.state.start;

        console.log("current",this.state.current);
        if(this.state.current == this.quizz.questions.length) {
            let c = null;

            if (this.state.score == this.maxScore)
                c = "Youpi";

            else if(this.state.score<this.maxScore/2)
                c = "Peut mieux faire";
            else
                c = "Tu peux t'améliorer mais bien joué!";

            return (
                <div>C fini {this.state.score} sur {this.maxScore} {c}
                    <Link id="Home_btn" to={'/'}>Home</Link>
                </div>
            );
        }
        const question = this.quizz.questions[this.state.current];
        return (
            <div id={"Quizzpage"}>
                <div id="titres">
                    <h4>{this.quizz.name}</h4>
                    <Timer whenFinished={() =>  this.reponse(null)} start = {st} />
                </div>

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

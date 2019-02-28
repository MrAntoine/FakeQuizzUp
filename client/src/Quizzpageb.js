import React, {Component} from 'react';
 
// import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES} from './constants.js';
import {HTTP_SERVER_PORT} from './constants.js';
import axios from 'axios';

class Question extends Component {
 
 
    render() {
        return (
            <form onSubmit={(e) => this.props.nextQuestion(e)} className="center">
                <h2>{this.props.question.question}</h2><br/>
                {this.props.question.imgAnswers.map(img => <div><input type="checkbox" /><img src={HTTP_SERVER_PORT_PICTURES + img} className="imgquizz" alt="/"/></div> )}

                {this.props.question.txtAnswers.map(txt => <div><input type="checkbox" name='c' />{txt}</div>  )}

                <input type="submit" />
             </form>
        );
    }
    
}
 

 
class Quizzpageb extends Component {
 
    constructor(props) {
        super(props);
 
        this.state = {
            quizz : null,
            current : 0,
            score : 0,
            maxScore : 0
        };
 
        this.nextQuestion = this.nextQuestion.bind(this);
    }
 
    async componentDidMount(){
        console.log("id",HTTP_SERVER_PORT+"quizz/"+this.props.match.params.id);
        const quizz = (await axios.get(HTTP_SERVER_PORT+"quizz/"+this.props.match.params.id)).data;
        console.log("quizz",quizz);
        this.setState({
            quizz : quizz
        });
    }


     
    isEqual(a, b){
        if (a.length !== b.length){
            return false;
        }
 
        for (var i = 0; i < a.length; i++){
            if (a[i] !== parseInt(b[i])){
                return false;
            }
        }
 
        return true;
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



    nextQuestion(e) {
        let choices = [];
        for (let i = 0; i < e.target.elements.length; i++){
            if(e.target.elements[i].checked){
                choices.push(i);
            }
        }

        console.log(choices);
        console.log(this.state.quizz.questions[this.state.current].solutions);


        if(this.isEqual(choices,this.state.quizz.questions[this.state.current].solutions)){
            console.log("Changement !!")
            this.setState({score : this.state.score + this.state.quizz.questions[this.state.current].points});
        }

        e.preventDefault();
        this.setState({current: this.state.current + 1});
 
        this.setState({maxScore : this.state.maxScore + this.state.quizz.questions[this.state.current].points});
    }
 
    render(){
        if (this.state.quizz == null)
           return <p>Loading...</p>;
        console.log("quizz",this.state.quizz);
        if(this.state.current === this.state.quizz.questions.length)
            return (
                <div>
                    You finished the quizz ! {this.state.score} / 
                    {/* {this.state.maxScore} */}
                </div>
            )
 
        return(
            <div>

                <Question nextQuestion={this.nextQuestion} question={this.state.quizz.questions[this.state.current]} />
            </div>
        )
    }
}
 
export default Quizzpageb;





 
    

 
 
 
  

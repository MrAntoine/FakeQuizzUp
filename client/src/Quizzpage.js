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
                <input type="checkbox" value={"test"} name={"ee"} style={{width:"100px"}}/> Test
                {t}
            </div>
        );
    }
}

class Quizzpage extends Component {

    constructor(props) {
        super(props);

        this.quizz = quizzes.filter(q=> q._id == this.props.match.params.id)[0];
        this.state = {current : 0};
    }


    render() {
        const question = this.quizz.questions[this.state.current];
        return (
            <div>
                {this.quizz.name}
                <input type="checkbox" value="test" />
                <Question question = {question} />
                <TxtAnswers question={question}/>

            </div>
        );
    }
}

export default Quizzpage;

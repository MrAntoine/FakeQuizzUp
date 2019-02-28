import React, {Component} from 'react';

import {quizzes, users} from './examples';
import {HTTP_SERVER_PORT_PICTURES,HTTP_SERVER_PORT} from './constants.js';
import {Link} from 'react-router-dom';
import axios from "axios";


class QThumb extends Component {

    render(){
        return(
            <div>
                <h4 className='flow-text' >{this.props.quiz.name}</h4>
                <Link to={'/quizz/' + this.props.quiz._id} ><img src={HTTP_SERVER_PORT_PICTURES + this.props.quiz.icon} className="quizItem"alt="Props"/> </Link>
            </div>
        )
    }
}


class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            quizzes: []
        }
    }

    async componentDidMount(){
        console.log("before");
        const quizzes = (await axios.get(HTTP_SERVER_PORT+"quizz")).data;
        //console.log("quizzes",this.state.quizzes);

        this.setState({
            quizzes : quizzes
        });
    }

    render(){
        if(this.state.quizzes==[]){
            return <div>loading..</div>
        }
        console.log("Quizzes",this.state.quizzes)
        return(
            <div>
                <h1 id="quizCategories">Quizz categories : </h1>
                <div className='quizList'>
                    {this.state.quizzes.map (q => <QThumb key ={q._id} quiz={q} />)}
                </div>
            </div>

        )
    }
}





export default Home;
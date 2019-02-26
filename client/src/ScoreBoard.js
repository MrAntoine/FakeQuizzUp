import React, {Component} from 'react';



class ScoreBoard extends  Component{

    constructor(props) {
        super(props);
        this.state = { 
            user:' user1',
            points: '250',
            passed_quizzes: '20',


         };
      }
    render() {
        return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-content">
                        <p>{this.state.user}</p>
                        <p>{this.state.points}</p>
                        <p>{this.state.passed_quizzes}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
         
    
}

export default ScoreBoard

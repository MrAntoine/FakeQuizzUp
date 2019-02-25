import React, {Component} from 'react';




class Login extends Component {
    handleChange = (e) => {
        // this.setState({
        //   [e.target.id]: e.target.value
        // })
      }
      handleSubmit = (e) => {
        // e.preventDefault();
        // this.props.signIn(this.state)
      }
    state = {
        login: '',
        password: ''
      }
    render() {
        return (
        
                <div className="container">
                    <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="login">login</label>
                        <input type="text" id='login' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                  
                    </div>
                    </form>
                </div>

            
           
            
        )
          
    }
}

export default Login

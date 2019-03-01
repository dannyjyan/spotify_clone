import React from 'react';
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: ""
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
  
    renderErrors(){
      return (
        <ul>
          {this.props.errors.map((error, idx)=> {
            return (
              <li key={`error-${idx}`}> {error} </li>
            )
          })}
        </ul>
      )
    }

    render(){
      return(
          <div className="login-form-container">
            {this.renderErrors()}
            <form className="login-form" onSubmit={this.handleSubmit}>
              <div>To continue, log in to Spotify.</div>
              <div className="row">
                <input type="text" value={this.state.username} placeholder="Email address or username" className="login-input" id="login-username"
                onChange={this.update('username')}/>
              </div>
              <div className="row">
                <input type="password" value={this.state.password} placeholder="Password" className="login-input" id="login-password"
                onChange={this.update('password')}/>
              </div>
              <div className="row row-submit">
                <input type="submit" className="login-button" value="Log In"/>
              </div>   
            </form>
          </div>
      )
    }
    
  

}


export default LoginForm;
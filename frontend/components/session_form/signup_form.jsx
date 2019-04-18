import React from 'react'
import {Link} from 'react-router-dom';
import merge from 'lodash/merge';

class SignupForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
        confirmEmail: "",
        // errors: this.props.errors.slice()
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.renderErrors = this.renderErrors.bind(this);
      this.loginCorgi = this.loginCorgi.bind(this);
    }

    loginCorgi(){
      this.props.login({username: 'Corgi', password: 'password'});
    }
    handleSubmit(e) {
        e.preventDefault();
        // if (this.state.email !== this.state.confirmEmail){
        //   const newErrors = merge({}, {errors: this.props.errors}, {errors: ["Emails do not match"]})
        //   this.setState(newErrors)
        //   return;
        // }
        const user = Object.assign({}, this.state);
        this.props.signup(user)
    }
    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
    renderErrors(){
      // const allErrors = merge({}, {errors: this.props.errors}, {errors: this.state.errors})
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
    componentWillUnmount(){
      // dispatch action to hit reducer errors
      // dispatch({
      //   type: 'RESET_SESSION_ERRORS'
      // });
    }

    render(){
        return(
          <div className="sign-up">
            {this.renderErrors()}
            <div className="login-header">
              <div className="lh-scope">
                <div className="login-head">  
                  <Link to="/" className="chillify-home-link">
                    <img className="spotify-logo-black" src={window.images.black_logo}/>
                    <span className="chillify-login-text">Chillify</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="login-content">
              <div className="signup-to-continue">Sign up with your email address</div>
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="signup-row" >
                  <div className="col-xs-12">
                    <input type="email" value={this.state.email} placeholder="Email" className="form-control signup-input"
                    onChange={this.update('email')}/>
                    </div>
                </div>
                <div className="signup-row" >
                  <div className="col-xs-12">
                    <input type="email" value={this.state.confirmEmail} placeholder="Confirm Email" className="form-control signup-input" 
                    onChange={this.update('confirmEmail')}/>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="col-xs-12">
                      <input type="password" value={this.state.password} placeholder="Password" className="form-control signup-input" 
                    onChange={this.update('password')}/>
                    </div>
                </div>
                <div className="signup-row">
                    <div className="col-xs-12">
                      <input type="text" value={this.state.username} placeholder="What should we call you?" className="form-control signup-input" 
                    onChange={this.update('username')}/>
                    </div>
                </div>
                
                <div className="signup-row row-submit">
                  <div className="col-xs-12 signup-button-div">
                    <input type="submit" className="btn-green" value="SIGN UP"/>
                  </div>
                  <div className="col-xs-12">
                    <input type="button" className="btn-green" value="DEMO" onClick={this.loginCorgi}/>
                  </div>
                </div>

              </form>
              <div className="show-signup">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="divider"></div>
                  </div>
                </div>   
                <div className="row">
                  <div className="col-xs-12">
                    <p className="primary">Already have an account?                    
                      <Link to="/login" className="login-button-small"> Login </Link>
                    </p>
                  </div>
                </div>   


              </div>
              
            </div>
          </div>
        )
  
    }
    
  

}


export default SignupForm;
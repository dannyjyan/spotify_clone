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
      this.demoLogin = this.demoLogin.bind(this);
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
    demoLogin(){
      this.setState({username: 'Corgi', password: 'password'});
      setTimeout(() => {
        const user = Object.assign({}, this.state);
        this.props.login(user);
        }, 1000);
    }

    render(){
      return(
          <div className="login-form-container">
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
              <div className="login-to-continue">To continue, log in to Chillify.</div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="divider"></div>
                  </div>
                </div>   
              <form className="login-form" onSubmit={this.handleSubmit}>
                <div className="row" >
                  <div className="col-xs-12">
                    <input type="text" value={this.state.username} placeholder="Username" className="form-control login-input" id="login-username"
                    onChange={this.update('username')}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                      <input type="password" value={this.state.password} placeholder="Password" className="form-control login-input" id="login-password"
                    onChange={this.update('password')}/>
                    </div>
                </div>
                
                <div className="row row-submit">
                  <input type="submit" className="login-button btn-green" value="LOG IN"/>
                </div>
                <div className="row row-submit">
                  <input type="button" className="login-button btn-green" value="DEMO" onClick={this.demoLogin}/>
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
                    <h4 className="dont-have-account">Don't have an account?</h4>
                  </div>
                </div>   
                <div>
                  <div className="row">
                    <div className="col-xs-12">
                      <Link to="/signup" className="btn btn-block signup-button-white">SIGN UP FOR CHILLIFY</Link>
                    </div>
                  </div>   
                </div>


              </div>
              
            </div>
          </div>
      )
    }
    
  

}


export default LoginForm;
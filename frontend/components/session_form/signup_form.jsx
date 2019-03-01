import React from 'react'

class SignupForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
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
            <div className="signup-form-container">
              {this.renderErrors()}
              <div>Sign up with your email address.</div>
              <form className="signup-form" onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <input type="email" value={this.state.email} placeholder="Email" className="signup-input" id="signup-email"
                    onChange={this.update('email')}/>
                    </li>
                    <li>
                        <input type="password" value={this.state.password} placeholder="Password" className="signup-input" id="signup-password"
                        onChange={this.update('password')}/>
                    </li>
                    <li>
                        <input type="text" value={this.state.username} placeholder="What should we call you?" className="signup-input" id="signup-username"
                        onChange={this.update('username')}/>
                    </li>

                    <div className="row row-submit">
                        <input type="submit" className="signup-button" value="Sign Up"/>
                    </div>   
                </ul>
              </form>
            </div>
        )
  
    }
    
  

}


export default SignupForm;
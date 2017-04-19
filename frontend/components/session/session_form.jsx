import React from 'react';


class SessionForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(formInput){
    return (e) => this.setState({[formInput]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render(){

    let formTitle = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    let errorsString = Object.keys(this.props.errors).length === 0 ? "" : JSON.stringify(this.props.errors);

    return (
      <div>

        <h2>{formTitle}</h2>

        <div>{errorsString}</div>

        <form onSubmit={this.handleSubmit}>
          <label>Email: </label>
          <input
            type='text'
            value={this.state.email}
            onChange={this.handleChange('email')}
          />

          <label>Password: </label>
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />

          <input type='submit' />
        </form>
      </div>
    );

  }

}

export default SessionForm;

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

    let formType = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';
    let errorsString = Object.keys(this.props.errors).length === 0 ? "" : JSON.stringify(this.props.errors);

    return (

      <div className='session-form-blackout'>
        <div className='session-form-div'>

          <div>{errorsString}</div>

            <form onSubmit={this.handleSubmit} id='session-form'>

              <input
                type='text'
                value={this.state.email}
                onChange={this.handleChange('email')}
                placeholder='Email Address'
              />

              <input
                type='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                placeholder='Password'
              />

              <button form='session-form' type='submit'>{formType}</button>
            </form>
        </div>
      </div>

    );

  }

}

export default SessionForm;

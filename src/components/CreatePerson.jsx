import React from 'react'

class CreatePerson extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      userName: '',
      password: '',
      confirm: ''
    }
  }

  trackForm = e => {
    switch (e.target.id) {
      case 'email':
        this.setState({email: e.target.value})
        break;
      case 'userName':
        this.setState({userName: e.target.value})
        break;
      case 'password':
        this.setState({password: e.target.value})
        break;
      case 'confirm':    
        this.setState({confirm: e.target.value})
        break;
      default:
        break;
    }
  }

  submit = e => {
    e.preventDefault()
    console.log(this.state)
    // tie to redux and backend from here
  }

  render() {
    return (
      <div id='create-person'>
        <div id='sub-create-person'>
        <h2>Create Your Account!</h2>
          <form onChange={e => this.trackForm(e)} id='create-person-form'>
            <label>Email</label><br/>
              <input id='email' placeholder='you@pets.xyz'></input><br/>
            <label>User Name</label><br/>
              <input id='userName' placeholder='coolKat123'></input><br/>
            <label>Password</label><br/>
              <input id='password' placeholder='At Least 8 Characters'></input><br/>
            <label>Confirm Password</label><br/>
              <input id='confirm' placeholder='The Same 8+ Characters'></input><br/>

            <button onClick={(e) => this.submit(e)}>Submit</button>
          </form>
        </div>
        <p>Already have an account? Login here.</p>
      </div>

    )
  }
}

export default CreatePerson
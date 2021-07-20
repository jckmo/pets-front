import React from 'react'

class CreateFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      friendName: '',
      friendBirthdate: '',
    }
  }

  trackForm = e => {
    switch (e.target.id) {
      case 'friendName':
        this.setState({friendName: e.target.value})
        break;
      case 'friendBirthdate':
        this.setState({friendBirthdate: e.target.value})
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
      <div id='create-friend'>
        <div id='sub-create-friend'>
          <h2>Create An Entry For Your Furry Friend</h2>
          <form id='create-friend-form' onChange={e => this.trackForm(e)}>
            <label>Friends name</label>
              <input id='friendName' placeholder='Ruby'></input>
            <label>Birthdate</label>
              <input id='friendBirthdate' placeholder='03/14/2020'></input>

            <button onClick={e => this.submit(e)}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateFriend
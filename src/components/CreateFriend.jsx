import React from 'react'

class CreateFriend extends React.Component {
  constructor() {
    super()
    this.state = {
      friendName: '',
      month: '',
      day: '',
      year: ''
    }
  }

  trackForm = e => {
    switch (e.target.id) {
      case 'friendName':
        this.setState({friendName: e.target.value})
        break;
      case 'month':
        this.setState({month: e.target.value})
        break;
      case 'day':
        this.setState({day: e.target.value})
        break;
      case 'year':
        this.setState({year: e.target.value})
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
            <div id='birthdate-div'>
              <input placeholder='Month - 3' type="number" id="month" min="1" max="12" />
              <input placeholder='Day - 14' type="number" id="day" min="1" max="31" />
              <input placeholder='Year - 2020' type="number" id="year" min="1990" max="2021" />
            </div>
            <button onClick={e => this.submit(e)}>Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateFriend
import React from 'react'

class CreateFriend extends React.Component {
  render() {
    return (
      <div id='create-friend'>
        <div id='sub-create-friend'>
          <label>Blank Label</label>
            <input placeholder='blank'></input>
          <label>Blank Label</label>
            <input placeholder='blank'></input>
          <label>Blank Label</label>
            <input placeholder='blank'></input>

          <button>Submit</button>
        </div>
      </div>
    )
  }
}

export default CreateFriend
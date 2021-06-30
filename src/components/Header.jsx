import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id='header'>
        <div id='sub-header-left'>
          <p>Home</p>
          <p>About</p>
          <p>Our Services</p>
        </div>
        <div id='sub-header-right'>
          <p>Dude, Where's My Pet?</p>
        </div>
      </div>
    )
  }
}

export default Header
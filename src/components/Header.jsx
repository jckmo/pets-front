import React from 'react'

class Header extends React.Component {
  render() {
    return (
      <div id='header'>
        <div id='sub-header-left'>
          <p id='header-link' onClick={() => this.props.history.push('/home')}>Home</p>
          <p id='header-link' onClick={() => this.props.history.push('/about')}>About</p>
          <p id='header-link' onClick={() => this.props.history.push('/services')}>Our Services</p>
          <p id='header-link' onClick={() => this.props.history.push('/create-person')}>Join Us</p>
        </div>
        <div id='sub-header-right'>
          <p>Dude, Where's My Pet?</p>
        </div>
      </div>
    )
  }
}

export default Header
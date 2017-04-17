import React, { Component } from 'react';
import Title from './header/Title.js';

class Header extends Component {
  handleChange(e)
  {
    this.props.changeTitle(e.target.value);
  }
  
  render() {
    return (
      <div>
      <Title title={this.props.someTitle}/>
      <input value={this.props.someTitle} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Header;

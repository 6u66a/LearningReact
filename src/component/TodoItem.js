import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { text, complete } = this.props;
    return (
      <h1>{text}</h1>
    );
  }
}

export default TodoItem;
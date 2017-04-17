import React, { Component } from 'react';

export default class SubpageOne extends Component{
  componentWillMount(){
    console.log("I´m up");
  }
  
  render(){
    console.log(this.props);
    return(
    <h1>SubpageOne {this.props.match.params.paramone}</h1>
  )
  }
}
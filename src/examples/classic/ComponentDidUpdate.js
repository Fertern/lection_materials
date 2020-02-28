import React, { Component } from 'react'

export default class Example extends Component {
  componentDidUpdate(){
    console.log("Rerendered!")
  }
  render() {
    return <div>Lifecycle "componentDidUpdate"</div>;
  }
}

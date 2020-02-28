import React, { Component } from 'react'

export default class Example extends Component {
  componentWillUnmount(){
    console.log("Component is dead.")
  }
  render() {
    return <div>Lifecycle "componentWillUnmount"</div>;
  }
}

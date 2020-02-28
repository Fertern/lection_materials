import React, { Component } from 'react'

export default class Example extends Component {
  componentDidMount(){
    console.log("MOUNTED AND LOADED!")
  }
  render() {
    return <div>Lifecycle "componentDidMount"</div>;
  }
}

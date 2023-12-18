import React, { Component } from 'react'

export default class Event extends Component {
    // phuong thuc alert 
    handleAlert= ()=>{
        alert("Log")
    }
  render() {
    return (
      <div className='container'>
        <input onBlur={(e)=>{console.log(e.target.value);}} type="text" />
        <button className='btn btn-primary mt-5' onClick={()=>{this.handleAlert()}}>Show message</button>
      </div>
    )
  }
}

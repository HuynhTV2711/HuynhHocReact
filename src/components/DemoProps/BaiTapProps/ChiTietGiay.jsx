import React, { Component } from 'react'

export default class ChiTietGiay extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.chiTietGiay.image} alt="" />
      </div>
    )
  }
}

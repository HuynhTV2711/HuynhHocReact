import React, { Component } from 'react'
import HeaderComponent from './HeaderComponent'
import SliderComponent from './SliderComponent'
import ProductListComponent from './ProductListComponent'
import FooterComponent from './FooterComponent'

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        <HeaderComponent/>
        <SliderComponent/>
        <ProductListComponent/>
        <FooterComponent/>
      </div>
    )
  }
}

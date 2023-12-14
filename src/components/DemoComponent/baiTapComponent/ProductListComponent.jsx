import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
  render() {
    return (
      <div>
        <h2 className='text-center my-5'>List điện thoại mới ra mắt</h2>
          <ProductComponent />
      </div>
    )
  }
}

import React, { Component } from 'react'
import ModelGioHangRedux from './ModelGioHangRedux'
import DanhSachSanPhamRedux from './DanhSachSanPhamRedux'

export default class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h3 className='text-center my-5'>Bài tập giỏ hàng dùng redux</h3>
        <ModelGioHangRedux/>
        <h3 className='text-center my-5'>Danh sách sản phẩm</h3>
        <DanhSachSanPhamRedux/>
      </div>
    )
  }
}

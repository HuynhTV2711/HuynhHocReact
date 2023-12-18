import React, { Component } from 'react'
import dataGiay from './../BaiTapProps/datagiay.json'
import DanhSachGiay from './DanhSachGiay'
import GioHang from './GioHang'


export default class BaiTapGiayCach2 extends Component {
  state = {
    arrGiay: dataGiay,
    gioHang: [],
    soLuongSanPhamTrongGioHang: 0
  }

  themGioHang = (spChon) => {
    let spGioHang = {
      id: spChon.id,
      name: spChon.name,
      price: spChon.price,
      image: spChon.image,
      soLuong: 1
    }
    // Kiểm tra sp có trong giỏ hàng chưa
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((item, index) => {
      return item.id === spGioHang.id
    })
    let sltgh = this.state.gioHang.reduce((tsl, item, index) => {
      return tsl += item.soLuong
    }, 1)
    if (index != -1) {
      gioHangCapNhat[index].soLuong += 1;
    }
    else {
      gioHangCapNhat.push(spGioHang);
    }
    this.setState({
      gioHang: gioHangCapNhat,
      soLuongSanPhamTrongGioHang: sltgh
    })
  }

  xoaSanPham = (maSP) => {
    // Tìm trong giỏ hàng có sp được lick
    // Cách 1 dùng findindex
    // let gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((item, index) => {
    //   return maSP === item.id
    // })
    // if (index != -1) {
    //   gioHangCapNhat.splice(index, 1)
    // }

    // Cách 2 dung fillter
    let gioHangCapNhat = this.state.gioHang.filter(item=>item.id !== maSP)
    this.setState({
      gioHang: gioHangCapNhat
    })
  }
  // Tăng giảm số lương
  tangGiamSoLuong =(maSp, tangGiam)=>{//tangGiam ==true tăng số lượng/ giảm không quá 1
    let gioHangCapNhat = [...this.state.gioHang]
    let index = gioHangCapNhat.findIndex((item,index)=>{
      return item.id === maSp
    })
    if (tangGiam == true) {
      gioHangCapNhat[index].soLuong +=1
    }else{
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -=1
      }
    }
    this.setState({
      gioHang: gioHangCapNhat
    })
  }

  render() {
    return (
      <div className='container'>
        <h4 className='text-center mt-5'>Shop giày</h4>
        <p className='text-end' data-bs-toggle="modal" data-bs-target="#exampleModal">Giỏ hàng <span className='text-danger'>({this.state.soLuongSanPhamTrongGioHang})</span></p>
        <DanhSachGiay arrGiay={this.state.arrGiay} themGioHang={this.themGioHang} />
        <GioHang gioHang={this.state.gioHang} xoaSanPham={this.xoaSanPham} tangGiamSoLuong={this.tangGiamSoLuong} />
      </div>
    )
  }
}

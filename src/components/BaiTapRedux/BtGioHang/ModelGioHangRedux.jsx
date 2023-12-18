import React, { Component } from 'react'
import {connect} from 'react-redux'

 class ModelGioHangRedux extends Component {
    renderGioHang = ()=>{
        return this.props.gioHang.map((item, index)=>{
            return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" width={100}/></td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
            </tr>
        })
    }
  render() {
    console.log(this.props);
    return (
      <table className='table'>
        <thead>
        <tr>
            <td>Mã SP</td>
            <td>Tên SP</td>
            <td>Hình ảnh</td>
            <td>Đơn giá</td>
            <td>Số lượng</td>
            <td>Thành tiền</td>
        </tr>
        </thead>
        <tbody>
        {this.renderGioHang()}
        </tbody>

      </table>
    )
  }
}
const  mapStateToProps = (state)=>{
    console.log(state);
    return {gioHang: state.GioHangReducer.gioHang}
}
export default connect(mapStateToProps,null)(ModelGioHangRedux)
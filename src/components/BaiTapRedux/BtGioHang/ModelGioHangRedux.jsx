import React, { Component } from 'react'
import {connect} from 'react-redux'
import { thayDoiQuantity, xoa } from '../../../redux/actions/gioHangActions'

 class ModelGioHangRedux extends Component {
    renderGioHang = ()=>{
        return this.props.gioHang.map((item, index)=>{
            return <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><img src={item.image} alt="" width={100}/></td>
                <td>{item.price}</td>
                <td><button onClick={()=>{this.props.thayDoiQuantity(item.id, false)}}>-</button>{item.quantity}<button onClick={()=>{this.props.thayDoiQuantity(item.id, true)}}>+</button></td>
                <td>{item.price * item.quantity}</td>
                <td><button onClick={()=>{this.props.xoa(item)}}>Xóa</button></td>
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
            <td></td>
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
    // console.log(state);
    return {gioHang: state.GioHangReducer.gioHang}
}
const mapDispatchToProps = (dispatch)=>{
  return {
    xoa: (data)=>{
      dispatch(xoa(data))
    },
    thayDoiQuantity: (id, tangGiam)=>{
      dispatch(thayDoiQuantity(id, tangGiam));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ModelGioHangRedux)
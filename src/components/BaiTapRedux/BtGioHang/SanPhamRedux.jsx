import React, { Component } from 'react'
import dataGiay from './../../data/dataGiay'
import { connect } from 'react-redux'

 class SanPhamRedux extends Component {
    renderSanPham = ()=>{
        return dataGiay.map((item, index)=>{
            return <div className='col-4'>
                <img src={item.image} alt="" width={100}/>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={()=>(this.props.themSanPham(item))}>Thêm</button>
            </div>
        })
    }
  render() {
    return (
      <div className='row'>
        {this.renderSanPham()}
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch)=>{
   return   {
    themSanPham:(sanPham)=>{
        dispatch({
            type: "THEM_SAN_PHAM",
            payload: sanPham
        })
    }
   }
}

export default connect(null, mapDispatchToProps)(SanPhamRedux)
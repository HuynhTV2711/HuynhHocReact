import React, { Component } from 'react'

export default class DanhSachGiay extends Component {
    render() {
        // console.log(this.props);
        const { arrGiay, themGioHang } = this.props
        return (
            <div className='row'>
                {arrGiay.map((item, index)=>{
                    return (<div className="card col-3">
                    <img className="card-img-top" src={item.image} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">{item.name}</h4>
                        <p className="card-text">{item.price}</p>
                    </div>
                    <button onClick={()=>{themGioHang(item)}}>Thêm vào giỏ hàng</button>
                </div>)
                })}
            </div>
            
        )
    }
}

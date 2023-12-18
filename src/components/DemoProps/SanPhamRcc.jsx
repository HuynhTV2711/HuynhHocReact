import React, { Component } from 'react'
export default class SanPhamRcc extends Component {
    
  render() {
    console.log(this.props);
    const {item} = this.props;
    return (
        <div>
        <div class="card">
            <img class="card-img-top" src={item.hinhAnh} alt="Title" />
            <div class="card-body">
                <h4 class="card-title">{item.tenPhim}</h4>
                <p class="card-text">{item.ngayKhoiChieu}</p>
            </div>
        </div>
        
    </div>
    )
  }
}

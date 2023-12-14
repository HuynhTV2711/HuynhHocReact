import React, { Component } from 'react'

export default class SinhVien extends Component {
    // Thuoocj tinh cua lop hoat dong tat ca cac phuong thuc ben trong class
    hoTen= " Van Huynh";
    lop= "BCS09";
    arrNumber = [1,2,3,4,6];
    renderSinhVien= ()=>{
        return (
            <ul>
            <li>{this.hoTen}</li>
            <li>{this.lop}</li>
        </ul>
        )
    }
    // phuong thuc render
  render() {
    // ho la bien chi hoat dong trong haam
    const ho = "Tran"
    return (
      <div className='container'>
       {this.renderSinhVien()}
      </div>
    )
  }
}

import React, { Component } from 'react'
import datagiay from './datagiay.json'
import ListGiay from './ListGiay'

// export default class BaiTapProps extends Component {
//     state={
//         arrGiay : datagiay
//     }

//     // Cách 1 truyền từng giá trị trong vòng lặp
//     renderGiay = ()=>{
//         return(this.state.arrGiay.map((item, index)=>{
//             return (
//                <div className='col-3' >
//                    <ListGiay item={item}/>
//                </div>
//             )
//         }))
//     }
//   render() {
//     return (
//       <div className='container'>
//         <div className='row'>
//         {this.renderGiay()}
//         </div>
//         </div>
//     )
//   }
// }
export default class BaiTapProps extends Component {
    state={
        arrGiay : datagiay,
       
    }

    // Cách 2 truyền nguyên giá trị của mảng
    
  render() {
    return (
      <div className='container'>
        <ListGiay arrGiay={this.state.arrGiay}/>
        </div>
    )
  }
}


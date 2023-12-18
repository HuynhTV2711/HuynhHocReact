import React, { Component } from 'react'
import SanPhamRcc from './SanPhamRcc';
import data from './../data/data.json'
import SanPhamRfc from './SanPhamRfc';


export default class DemoProps extends Component {
    // 1 đối tượng: thuộc tính => thay đổi thuộc tính => render lại giao diện
    //  và phương thức
    // Props giống như các thuộc tính bên trong thẻ html/ truyền dữ liệu từ component cha đến component con
    state={
        arrFilm : data
    }
    renderFilm = ()=>{
        return (this.state.arrFilm.map((item, index)=>{
            return (
                // Function component nhận props thông qua tham số props
                // <div className='col-3' key={index}><SanPhamRfc item={item}/></div>
                // Class component nhận props thông qua this.props
                <div className='col-3' key={index}><SanPhamRcc item={item}/></div>

            )
        }))
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
}

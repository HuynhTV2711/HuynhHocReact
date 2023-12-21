import React, { Component } from 'react'
import axios from 'axios'
import Footer from './Footer';

export default class DemoLifeCircle extends Component {
    state={
        number: 1,
    }
    componentDidMount(){
        // DidMounting chỉ chạy 1 lần duy nhất sau lần render đầu tiên
        // Dùng để gọi API khi user load trang
        // axios get
        axios({
          method: "GET",
          url: 'https://api.tiki.vn/raiden/v2/menu-config?platform=desktop'
        })
        .then((result)=>{
          console.log(result.data.menu_block);
        })
        .catch((error)=>{
          console.log(error);
        })
        console.log("did mount cha");
       
    }
  render() {
    // render chạy đầu tiên sau constructor và trước didmount
    console.log("render");
    return (
      <div>
        <h2>Lifecircle</h2>
        <div className='d-flex'>
        <button onClick={()=>{
            this.setState({
                number : this.state.number-1
            })
        }} className='btn btn-primary'>-</button>
        <p className='p-3 bg-danger'>{this.state.number}</p>
        <button onClick={()=>{
            this.setState({
                number : this.state.number+1
            })
        }} className='btn btn-primary'>+</button>
        </div>
        {this.state.number < 2 ?<Footer/>:""}
        
      </div>
    )
  }
  componentDidUpdate(){
    console.log("did update");
    // tự động chạy sau khi RErender chạy xong
  }
}

// 1:46
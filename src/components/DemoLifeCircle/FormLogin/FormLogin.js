import axios from "axios";
import React, { Component } from "react";

export default class FormLogin extends Component {
    state={
        userName: "",
        passWord: ""
    }
    handleOnchange=(event)=>{
        let {name, value} = event.target
        console.log(name);
        console.log(value);
        this.setState({
          [name]: value
        })
    }
    handleLogin=()=>{
        console.log(this.state);
        axios({
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            method: "POST",
            data: {
                taiKhoan: this.state.userName,
                matKhau: this.state.passWord
            },
            headers:{
                TokenCybersoft : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY'
            }
        })
        .then((res)=>{
            console.log(res);
            alert("Đăng nhập thành công!!!")
        })
        .catch((err)=>{
            console.log(err);
            alert("Đăng nhập thất bại, vui lòng kiểm tra username và mật khẩu")
        })
        
    }
  render() {
    return (
      <div>
        <h3>Form Login</h3>
        <form action="" className="space-y-5">
        <div className="mb-3">
          <label htmlFor className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            id
            aria-describedby="helpId"
            placeholder="Username"
            value={this.state.userName}
            onChange={this.handleOnchange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            // Dat ten name trung voi key
            name="passWord"
            id
            aria-describedby="helpId"
            placeholder="Password"
            value={this.state.passWord}
            onChange={this.handleOnchange}
          />
        </div>
        <button className="btn btn-primary" type="button" onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    );
  }
}


//admin0003
//123456
import React, { Component } from 'react'

export default class DemoIfElse extends Component {
  // State trong react
  state = {
    isLogin: false,
    userName: "Huynh"
  }
  // 2 thuoc tinh cua component


  // Cach 1 dung ham render
  // Phuong thuc render content
  // renderContent = ()=>{
  //     if (this.isLogin) { //Nguoi dung da dang nhap
  //         this.userName = "Huynh"
  //         return <div>
  //             Hello {this.userName}<button>LogOut</button>
  //         </div>
  //     } else {//Nguoi dung chua dang nhap
  //         return <div>
  //             <button>Login</button>
  //         </div>
  //     }
  // }
  // Phuong thuc login
  login = () => {
    // setState laf phuwowng thuwcs baats ddoongf bo
    this.setState({
      isLogin: true,
      userName: "Rin Em"
    }, () => { console.log(this.state); })
  }
  logOut = () => {
    this.setState({
      isLogin: false
    }, () => { console.log(this.state); })
  }
  // Phwowng thuc render cua component IfElse
  render() {
    return (
      <div>
        {/* {this.renderContent()} truyen ham vao */}
        {/* Cach 2 dung toan tu 3 ngoi */}
        {this.state.isLogin === true ? <div>
          Hello {this.state.userName}<button onClick={this.logOut}>LogOut</button>
        </div> : <button onClick={this.login}>Login</button>}
      </div>
    )
  }
}

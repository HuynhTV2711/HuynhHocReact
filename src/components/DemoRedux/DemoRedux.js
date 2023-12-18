import React, { Component } from 'react'
import {connect} from 'react-redux'

class DemoRedux extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
            <p>Toi ten la {this.props.hoTen}</p>
            <button className='btn btn-primary' onClick={()=>{this.props.thayDoiHoTen("Six")}}>Ten o nha</button>
      </div>
    )
  }
}

// Ham lay du lieu tu store ve
// state daij dien cho reducer trong configstore
const mapStateToProps =(state)=>{
    const {hoTen} = state
    return {
        hoTen,
    }
}
// Ham tao ra cac phuong thuc de ban dispatch dua du lieu len store
const mapDispatchToProps = (dispatch)=>{
    return{
        thayDoiHoTen: (data)=>{
            dispatch({
                // type giup dinh dang ra dispatch duoc ban len
                type: "CHANG_NAME",
                // Payload la du lieu duoc ban len store
                payload: data
            })
        }
    }
}
// Keets noi giua component vowis store redux
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux)
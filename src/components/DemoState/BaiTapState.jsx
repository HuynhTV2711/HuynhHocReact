import React, { Component } from 'react'

export default class BaiTapState extends Component {
    state={
        color : "red"
    }
    doiMauXe = (mau)=>{
        this.setState({
            color : mau
        })
    }
  render() {
    return (
      <div>
        {/* Duong dan img tinh tu index.html */}
        <img src={`./img/${this.state.color}-car.jpg`} alt="" width={300} />
        <button onClick={()=>this.doiMauXe("red")}>Red</button>
        <button onClick={()=>this.doiMauXe("steel")}>Steel</button>
        <button onClick={()=>this.doiMauXe("black")}>Black</button>
        <button onClick={()=>this.doiMauXe("silver")}>Silver</button>
      </div>
    )
  }
}

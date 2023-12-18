import React, { Component } from 'react'
import ChiTietGiay from './ChiTietGiay';

export default class ListGiay extends Component {
    state={ 
        chiTietGiay : {
        id: 5,
        name: "Adidas Swift Run",
        alias: "adidas-swift-run",
        price: 550,
        description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 674,
        image: "http://svcy3.myclass.vn/images/adidas-swift-run.png"
    }}
    chiTietGiay=(giay)=>{
        this.setState({
            chiTietGiay : giay
        })
        console.log(this.chiTietGiay);

    }
  render() {
    const {arrGiay} = this.props;
    console.log(arrGiay);
    return (
        <div>
        <div className='row' >{
            arrGiay.map((item, index)=>{
                return (<div className='col-3' key={index}>
                <div class="card">
                <img class="card-img-top" src={item.image} alt="Title" width={300} height={400}/>
                <div class="card-body">
                    <h4 class="card-title">{item.name}</h4>
                    <p class="card-text">{item.price}</p>
                </div>
                <button className='btn btn-primary' onClick={()=>{this.chiTietGiay(item)}} >Chi Tiết</button>
                
            </div>
            </div>)
            })}
    </div>
    <div className='row'>
        <ChiTietGiay chiTietGiay={this.state.chiTietGiay}/>
    </div>
    </div>
    )
  }
}

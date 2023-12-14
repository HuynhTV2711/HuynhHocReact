import React, { Component } from 'react'

export default class SliderComponent extends Component {
  render() {
    return (
      <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselId" data-bs-slide-to={0} className="active" aria-current="true" aria-label="First slide" />
          <li data-bs-target="#carouselId" data-bs-slide-to={1} aria-label="Second slide" />
          <li data-bs-target="#carouselId" data-bs-slide-to={2} aria-label="Third slide" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100 d-block" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img src="https://plus.unsplash.com/premium_photo-1682147474777-90dc55cdbc67?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100 d-block" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1602206304384-428fc5a49a5a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-100 d-block" alt="Third slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    )
  }
}

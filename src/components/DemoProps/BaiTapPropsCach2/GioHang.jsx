import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
    // console.log(this.props);
    const { gioHang, xoaSanPham, tangGiamSoLuong} = this.props
    return (
      <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Giỏ hàng</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <div className="table-responsive">
                  <table className="table table-primary">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Đơn giá</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((item, index) => {
                        return <tr className>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td><img src={item.image} alt="" width={100} /></td>
                          <td className='d-flex'>
                            <button onClick={()=>{tangGiamSoLuong(item.id, false)}}>-</button>
                            {item.soLuong}
                            <button onClick={()=>{tangGiamSoLuong(item.id, true)}}>+</button>
                            </td>
                          <td>{item.price}</td>
                          <td>{item.soLuong * item.price }</td>
                          <td><button className='btn btn-danger' onClick={()=>{xoaSanPham(item.id)}}>Xóa</button></td>
                        </tr>
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5}>Tổng tiền</td>
                        <td>{gioHang.reduce((tongTien, item, index)=>{
                          return tongTien += item.soLuong * item.price 
                        },0)}</td>
                        <td></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}





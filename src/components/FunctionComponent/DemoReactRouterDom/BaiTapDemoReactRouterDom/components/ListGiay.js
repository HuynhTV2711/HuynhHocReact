import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ListGiay = () => {
  // hook useEffect  sử dụng cho 3 trạng thái của component là mounting, updateting, và unmounting
  // Đầu tiên: quá trình mounting, sử dụng quá trình mounting trên function component ta sử dụng useEffect có 2 tham số là 1 hàm (xử lí và tham số thứ 2 là 1 mảng rỗng)
  // Nhận vào 1 hàm(1 số xử lí trong quá trình chạy mounting didmount), và 1 [] nếu muốn chỉ chạy coponent đimount 1 lần duy nhất thì [] nhận giá trị rỗng
  const [listGiay, setListGiay] = useState([])
  useEffect(() => {
    // Sử dụng để gọi dữ liệu về và render lên giao diện lần dầu  tiên render component
    let promise = axios({
        method: "GET",
        url: "https://shop.cyberlearn.vn/api/Product"
    })
    promise
    .then((result) => {
        setListGiay(result.data.content)
    }).catch((err) => {
        console.log(err);
    });
    return ()=>{
        console.log("Will Unmount");
    }
  }, []);
  const navigate = useNavigate();
  console.log(listGiay);
  return (
    <div className="grid grid-cols-4 gap-4">
      {listGiay?.map((item, index)=>{
        return <div key={index} className="border border-red-500 rounded">
        <img
          src={item.image}
          alt="Shoe"
          width={100}
        />
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        {/* <Link to={`/detail/${item.id}`} className="px-4 py-2 bg-green-500 rounded">Xem chi tiết</Link> */}
        <button onClick={()=>{navigate(`/detail/${item.id}`)}} className="px-4 py-2 bg-green-500 rounded">Xem chi tiết</button>
      </div>
      })}
    </div>
  );
};

export default ListGiay;

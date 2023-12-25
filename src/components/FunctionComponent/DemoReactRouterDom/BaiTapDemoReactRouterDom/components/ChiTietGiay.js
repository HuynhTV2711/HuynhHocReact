import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const ChiTietGiay = () => {
    const [detail, setDetail] = useState([])
    const params = useParams();
    // console.log(params);
    const location = useLocation();
    // console.log(location);
    useEffect(() => {
        let promise = axios({
            method: "GET",
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
        })
        promise
            .then((result) => {
                    setDetail(result.data.content)
            }).catch((err) => {
                console.log(err);
            });

    }, [params])
    // truyền param để chạy cả quá trình mounting và updating là bên trong [] ta truyền vào dữ liệu sẽ thay đổi mà ta muôn skieerm tra khi thay đổi sẽ chạy userEffect
    const navigate = useNavigate();

    return (
        <div>
            <h1 className='text-3xl font-bold text-red-500 text-center py-10'>Chi tiết giày</h1>
            <div className="flex">
                <div className="w-4/12">
                    <img src={detail.image} alt="" width={300} />
                </div>
                <div className="w-8/12">
                    <h2 className='font-bold text-xl'>{detail.name}</h2>
                    <p>{detail.description}</p>
                    <p>{detail.price}</p>

                </div>
            </div>
            <h1 className='text-3xl font-bold text-red-500 text-center py-10'>Xem thêm các sản phẩm khác</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    detail.relatedProducts?.map((item, index) => {
                        return <div key={index} className="border border-red-500 rounded">
                            <img
                                src={item.image}
                                alt="Shoe"
                                width={100}
                            />
                            <h4>{item.name}</h4>
                            <p>{item.price}</p>
                            {/* <Link to={`/detail/${item.id}`} className="px-4 py-2 bg-green-500 rounded">Xem chi tiết</Link> */}
                            <button onClick={() => { navigate(`/detail/${item.id}`) }} className="px-4 py-2 bg-green-500 rounded">Xem chi tiết</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ChiTietGiay
import React from 'react'
import { Link} from "react-router-dom";


const Page404 = () => {
  return (
    <div>
        Đường dẫn sai
        <Link to={'/'}>Trở về trang chủ</Link>
    </div>
  )
}

export default Page404
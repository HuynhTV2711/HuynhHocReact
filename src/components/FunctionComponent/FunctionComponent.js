import React, { useState } from "react";
import DemoProps from "./DemoProps";
import { Outlet } from "react-router-dom";

const FunctionComponent = () => {
    // Demo state trong function component
    // tạo 1 state giúp lưu trữ giá trị số
    // hook useState taoj ra 1 state va phuong thuc setState
    // state laf tenState, phuong thuc getState la setState 10 laf gias tri ban dau cua state
    const [tenState, setTenState] = useState(10);
    const [sinhVien, setSinhVien] = useState({
        name: "Van Huynh", lop: "BCS09", tuoi: 26
    })
    return (
        <div className="mx-auto container py-5">
            <h1 className="text-3xl font-bold">Function component</h1>
            <p>{sinhVien.name}</p>
            <p>{sinhVien.lop}</p>
            <p>{sinhVien.tuoi}</p>
            <button onClick={() => {
                // Cach 1 tao 1 object moi va gan gia tri
                // let newSinhVien = { name: "RinEm", lop: "FS", tuoi: 27 }
                // setSinhVien(newSinhVien)
                // Dung spred operator va sau do gan gia tri cho cac thuoc tinh 
                setSinhVien({ ...sinhVien, name: "rinem", lop: "JSFST", tuoi: 27 })
            }} className="px-4 py-2 bg-green-500 rounded text-white">
                Thay doi</button>
                {/* Demo props trong function component */}
            <DemoProps tenState={tenState} setTenState={setTenState}/>
            <Outlet/>
        </div>
    );
};

export default FunctionComponent;



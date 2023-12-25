import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from "../../../redux/slice/userSlice";

const TableUser = ({setValues}) => {
    const dispatch = useDispatch()
    // state đại diện cho reducer trong config store
    const {arrUser} = useSelector((state)=>{
        return state.userSlice
    })
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Password
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Loại người dùng
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrUser?.map((item, index)=>{
                            return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4">{item.id}</td>
                            <td className="px-6 py-4">{item.name}</td>
                            <td className="px-6 py-4">{item.email}</td>
                            <td className="px-6 py-4">{item.password}</td>
                            <td className="px-6 py-4">{item.loaiNguoiDung}</td>
                            <td className="px-6 py-4">{item.phone}</td>
                            <td className="px-6 py-4 space-x-3">
                                <button onClick={()=>{setValues(item)}} className="text-2xl text-yellow-500"><i class="fa-regular fa-pen-to-square"></i></button>
                                <button onClick={()=>{dispatch(deleteUser(item.id))}} className="text-2xl text-red-500"><i class="fa-regular fa-trash-can"></i></button>
                            </td>
                        </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    );
};

export default TableUser;

// 2:00
import React from "react";
import { useFormik } from 'formik';
// import { object, string, number, date, InferType } from 'yup';
import * as Yup from 'yup'
import { validationUserInput } from "../../util/validation";
import TableUser from "./TableUser";
import { useDispatch, useSelector } from "react-redux";
import { getValuesUser, updateUser } from "../../../redux/slice/userSlice";

const BaiTapFormik = () => {
    const {showError} = useSelector((state)=> {
        return state.userSlice
    })
    const dispatch = useDispatch()
    const formik = useFormik({
        // initialValues là object chứa các thuộc tính input của người dùng được lấy từ name="..."
        // Lưu ý khi sử dụng formik  các thẻ input đầu vào lấy dữ liệu từ người dùng cần có thuộc tính name trung với giá trị thuộc tính có trong initialValues
        initialValues: {
            id: "",
            name: "",
            email: "",
            password: "",
            loaiNguoiDung: "",
            phone: ""
        },
        // onSubmit là hàm sẽ chạy khi người dùng  kích hoặt sự kiện onsubmit và pass qua hết tất cả dữ liệu dầu vào validation
        // tham số value đại diện cho dữ liệu nhập vào sau khi nhập xong
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            dispatch(getValuesUser(values));
            resetForm();
        },
        validationSchema: validationUserInput,
    }
    );
    // handleChange: 1 hàm giúp lấy dữ liệu người dùng nhập vào cho formik khi người dùng nhập
    // handleBlur: 1 hàm giúp kiểm tra người dùng thoát khỏi input
    // handleSubmit: 1 hàm giúp chạy sự kiện onSubmit và trả về kết quả người dùng nhập cũng như các xử lí
    // values: đại diện cho dữ liệu gnuwowif dùng nhập vào
    // errors là nơi lưu trữ các lỗi người dùng nhập
    // touched kiểm tra nguwowid dùng đã tương tác với ô input hay chưa(nếu chưa thì k kiểm tra dữ liệu đầu vào)
    // setValues dùng để đẩy dữ liệu khi click vào edit(sẽ set dữ liệu cho initialValues và hieeen thị lên các ô input) cái ô input phải có các thuộc tính giống trong initalValues
    const { handleChange, handleBlur, handleSubmit, values, errors, touched, setValues, resetForm } = formik;
    // console.log(errors);
    // console.log(touched);
    return (
        <div>
            <h1 className="pt-5 text-3xl font-bold text-red-500 text-center">Demo Formik - yup</h1>
            <form className="container mx-auto py-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* id */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="id"
                            id="id"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.id}
                        />
                        <label
                            htmlFor="id"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            ID
                        </label>
                        {errors.id && touched.id ?<p className="text-red-300 text-sm">{errors.id}</p>: ""}

                    </div>
                    {/* name */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Name
                        </label>
                        {errors.name && touched.name ?<p className="text-red-300 text-sm">{errors.name}</p>: ""}


                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* email */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Email
                        </label>
                        {errors.email && touched.email ?<p className="text-red-300 text-sm">{errors.email}</p>: ""}

                    </div>
                    {/* Password */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        <label
                            htmlFor="password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Password
                        </label>
                        {errors.password && touched.password ?<p className="text-red-300 text-sm">{errors.password}</p>: ""}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    {/* Loại người dùng */}
                    <div className="inline-block relative mb-5">
                        <label htmlFor="loaiNguoiDung" className="sr-only">Underline select</label>
                        <select id="loaiNguoiDung" name="loaiNguoiDung" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer" onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.loaiNguoiDung}>
                            <option value="">Chọn loại người dùng</option>
                            <option value="Học sinh">Học sinh</option>
                            <option value="Giáo viên">Giáo viên</option>
                            <option value="Thu ngân">Thu ngân</option>
                            <option value="Bảo vệ">Bảo vệ</option>
                        </select>
                        {errors.loaiNguoiDung && touched.loaiNguoiDung ?<p className="text-red-300 text-sm">{errors.loaiNguoiDung}</p>: ""}

                    </div>
                    {/* phone */}
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                        />
                        <label
                            htmlFor="phone"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Phone
                        </label>
                        {errors.phone && touched.phone ?<p className="text-red-300 text-sm">{errors.phone}</p>: ""}
                        {/* dùng taons tử 3 ngôi để kiểm tra xem người dùng có tương tác với ô dữ liệu hay chưa mới show ra thông báo lỗi */}
                    </div>
                </div>
                <p className="text-red-300 text-sm mb-5">{showError}</p>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-1000 mr-3"
                >
                    Submit
                </button>
                <button
                onClick={()=>{dispatch(updateUser(values), resetForm())}}
                    type="button"
                    className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 duration-1000"
                >
                    Update
                </button>
            </form>
            <TableUser setValues={setValues}/>
        </div>
    );
};

export default BaiTapFormik;

// 1:30
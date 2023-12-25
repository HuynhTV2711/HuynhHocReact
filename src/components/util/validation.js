import * as Yup from 'yup'
export const validationUserInput = Yup.object({
    // Nơi chứa các thuôc tính từ initialValue cần validation
    // string kiểm trâ kiểu chuỗi
    // required kiểm tra dữ liệu rỗng
    // 
    name : Yup.string().required("Vui lòng không bỏ trống"),
    id: Yup.string().required("Vui lòng không bỏ trống"),
    name: Yup.string().required("Vui lòng không bỏ trống"),
    email: Yup.string().required("Vui lòng không bỏ trống").email("định dạng email chưa đúng"),
    password: Yup.string().required("Vui lòng không bỏ trống").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])/, " mật khẩu chứa chữ hoa, chữ thường, số, ký tự đặt biêt").min(6, "vui lòng nhập tối thiểu 6 ký tự").max(10, "Vui lòng nhập tối đa 10 ký tự"),
    // password: Yup.string().required("Vui lòng không bỏ trống").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{6,16}$/, " mật khẩu gồm 6-16 ký tự chứa chữ hoa, chữ thường, số, ký tự đặt biêt"),
    loaiNguoiDung: Yup.string().required("Vui lòng không bỏ trống"),
    // matches có 2 tham số là regex và thông báo lỗi
    phone: Yup.string().required("Vui lòng không bỏ trống").matches(/^(0|84)(\d{9,10})$/, "Định dạng số điện thoại không đúng"),
})
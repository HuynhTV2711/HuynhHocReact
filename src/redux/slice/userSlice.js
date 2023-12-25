import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrUser : [],
    showError: '',
}

const userSlice = createSlice({
  name: "user",
//   initialState nhận vào dữ liệu mặc điịnh slice
  initialState,
  reducers: {
    // là nơi tạo hàm giúp xử lí thay đổi dữ liệu cho slice
    // state là giá trị của initialValue
    getValuesUser: (state, action)=>{
        // action nhận về 2 tham số là type là kiể user/getValuesUser, payload là dữ liệu được gửi lên từ component
        // console.log(state);
        // console.log(action);

        // kiểm tra người dùng có id chưa, nếu có thì k cho thêm và hiể thị thông báo
        let user = state.arrUser.find((item, index)=>{
            return item.id === action.payload.id
        });
        if (!user) {
            state.arrUser.push(action.payload);
            state.showError ='';
        } else {
            state.showError ='Lỗi, người dùng đã tồn tại';
        }
        
    },
    deleteUser: (state, action)=>{
        console.log(state);
        console.log(action);
        console.log(state.arrUser);
        let index = state.arrUser.findIndex((item, index)=>{
            return item.id === action.payload
        });
        if (index!=-1) {
            state.arrUser.splice(index,1);
        }
    },
    updateUser:(state, action)=>{
        console.log(state);
        console.log(action);
        let index = state.arrUser.findIndex((item, index)=>{
            return item.id === action.payload.id
        })
        if (index != -1) {
           state.arrUser[index] = action.payload
        }
    }
  }
});

export const {getValuesUser, deleteUser, updateUser} = userSlice.actions

export default userSlice.reducer
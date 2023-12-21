import {produce} from 'immer';
import {THEM_SAN_PHAM, XOA, UPDATE_QUANTITY} from './../types/gioHangTypes'
const stateGioHang = {
  gioHang: [], //Giá trị mặc định ban đầu của giỏi hàng
};
export const GioHangReducer = (state = stateGioHang, action) => {
  return produce(state, draftState => {
  switch (action.type) {
    case THEM_SAN_PHAM:{
      let index = state.gioHang.findIndex((item, index)=>{
        return item.id === action.payload.id;
      })
      if (index !== -1) {
        draftState.gioHang[index].quantity += 1;
      } else {
        draftState.gioHang.push(action.payload)
      }
      break};
      case XOA:{
        let index = state.gioHang.findIndex((item, index)=>{
          return item.id === action.payload.id;
        })
        if (index !== -1) {
          draftState.gioHang.splice(index, 1);
        }
        break
      };
      case UPDATE_QUANTITY:{
        console.log(action);
        let index = state.gioHang.findIndex((item, index)=>{
          return item.id === action.payload;
        })
        if (action.tangGiam === true) {
          draftState.gioHang[index].quantity += 1;
        }else{
          if (draftState.gioHang[index].quantity > 1) {
            draftState.gioHang[index].quantity -= 1;
          }
        }
        break
      }
    default:
      return state
  }
});
};
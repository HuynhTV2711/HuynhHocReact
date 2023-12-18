import { configureStore } from "@reduxjs/toolkit";
import {GioHangReducer} from './reducer/gioHangReducer'
export const store = configureStore({
  reducer: {
    // demo ve luu tru du lieu tren store
    hoTen: (state, action) => {
      // Bat nhung tin hieu dispatch duoc gui tu duoi component leen
      switch (action.type) {
        case "CHANG_NAME":
          console.log(action);

          return action.payload;

        default:
          break;
      }
      return "Van Huynh";
    },
    GioHangReducer,
  },
});

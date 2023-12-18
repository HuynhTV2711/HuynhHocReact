const stateGioHang = {
  gioHang: [
    {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 1,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  ], //Giá trị mặc định ban đầu của giỏi hàng
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM":
      let newGioHang = [...state.gioHang];
      // console.log(newGioHang);
      // console.log(action);
      let index = newGioHang.findIndex((item, index) => {
        return item.id === action.payload.id;
      });
      console.log(index);
      if (index !== -1) {
        newGioHang[index].quantity += 1;
      } else {
        newGioHang.push(action.payload)
      }
      state.gioHang = newGioHang;
      return {...state};
    default:
      return { ...state };
  }
};

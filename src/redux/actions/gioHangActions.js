export const xoa=(data)=>{
    return {
        type: "XOA",
        payload: data
    }
}

export const thayDoiQuantity =(id, tangGiam)=>{
    return {
        type: "UPDATE_QUANTITY",
        payload: id, tangGiam,
    }
}

export const themSanPham = (sanPham)=>{
    return {
        type: "THEM_SAN_PHAM",
        payload: sanPham
    }
}
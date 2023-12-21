import { Route, Routes } from "react-router-dom";
import BaiTapGioHangRedux from "./components/BaiTapRedux/BtGioHang/BaiTapGioHangRedux";
import DemoIfElse from "./components/CauTrucDieuKien/DemoIfElse";
import BaiTapComponent from "./components/DemoComponent/baiTapComponent/BaiTapComponent";
import Event from "./components/DemoDataBinding/Event";
import SinhVien from "./components/DemoDataBinding/SinhVien";
import DemoLifeCircle from "./components/DemoLifeCircle/DemoLifeCircle";
import FormLogin from "./components/DemoLifeCircle/FormLogin/FormLogin";
import BaiTapProps from "./components/DemoProps/BaiTapProps/BaiTapProps";
import BaiTapGiayCach2 from "./components/DemoProps/BaiTapPropsCach2/BaiTapGiayCach2";
import DemoProps from "./components/DemoProps/DemoProps";
import DemoRedux from "./components/DemoRedux/DemoRedux";
import BaiTapState from "./components/DemoState/BaiTapState";
import DemoVongLapComponent from "./components/DemoVongLap/DemoVongLapComponent";
import FunctionComponent from "./components/FunctionComponent/FunctionComponent";
import DemoReactRouteDom from "./components/FunctionComponent/DemoReactRouterDom/DemoReactRouteDom";
import ListGiay from "./components/FunctionComponent/DemoReactRouterDom/BaiTapDemoReactRouterDom/components/ListGiay";
import Template from "./components/FunctionComponent/DemoReactRouterDom/BaiTapDemoReactRouterDom/template/Template";
import IndexPage from "./components/FunctionComponent/DemoReactRouterDom/BaiTapDemoReactRouterDom/components/IndexPage";
import ChiTietGiay from "./components/FunctionComponent/DemoReactRouterDom/BaiTapDemoReactRouterDom/components/ChiTietGiay";
import Page404 from "./components/FunctionComponent/DemoReactRouterDom/BaiTapDemoReactRouterDom/components/Page404";



function App() {
  return (

    //     {/* Các Component đang sử dụng bootstrap dùng class component */}
    //  {/* <div className="App ">*/}
    //   {/* <BaiTapComponent/> */}
    //   {/* Demo data binding */}
    //   {/* <SinhVien/> */}
    //   {/* Demo Event */}
    //   {/* <Event/> */}
    //   {/* Demo if else vaf state */}
    //   {/* <DemoIfElse/> */}
    //   {/* Demo bai tap state thay doi mau xe o to*/}
    //   {/* <BaiTapState/> */}
    //   {/* Demo map de render mang san pham len giao dien */}
    //   {/* <DemoVongLapComponent/> */}
    //   {/* Demo Props trong react */}
    //   {/* <DemoProps title="title"/> */}
    //   {/* Bai tap on tap Props */}
    //   {/* <BaiTapProps/> */}
    //   {/* <BaiTapGiayCach2/> */}
    //   {/* Demo Redux */}
    //   {/* <DemoRedux/> */}
    //   {/* Bai tap gio hang dung redux immer và action creator */}
    //   {/* <BaiTapGioHangRedux/> */}
    //   {/* Demo life circle */}
    //   {/* <DemoLifeCircle/>
    //   // Demo Form xu li dang nhap goi API gan TOKEN, DATA */}
    //   {/* <FormLogin/> */}
    //   // </div>


    // ***************************************************************************
    //   {/* Các component sử dụng tailwind CSS dùng function component*/}
    //   {/* Demo function component, useState, props trong rafce  */}
    // Demo react-route-dom them thẻ <> fragment bao Routes trong Routes chứa các Route(gồm element là các component muốn thêm vào, path là đường dẫn url)
    // <>
    //   <Routes>
    //     {/* Khi đi vào trang chủ sẽ vào trang FunctionComponents */}
    //     {/* <Route element={<FunctionComponent/>} path="/index"/> */}
    //     <Route element={<FunctionComponent/>} path="/">
    //       {/* trong FunctionComponent thêm thẻ <Outlet/> vào ở đầu thì DemoReactComponent ở vị trí đó */}
    //       <Route element={<DemoReactRouteDom/>} path="demo"/>
    //     </Route>
    //   </Routes>
    // </>

    // *************************************************
    // Demo teplate header, footer, NavLink, active tab,
    <>
      <Routes>
        <Route element={<Template/>} path="/">
          {/* index sẽ được chạy luôn đầu tiên khi gọi đến url home: localhost:3000 */}
          <Route element={<IndexPage/>} index/>
          {/* trong listGiay sẽ dùng useEfect để gọi API, lưu ý trong useState phải gán giá trị mặc đih cho state hoặc kiểm tra dữ liệu trước khi map vd listGiay?.map */}
        <Route element={<ListGiay/>} path="listGiay"/>
        {/* tạo ra các root có thể truyền id lên url giúp thực hiện quá trình kiểm tra xem người dùng đang muốn oc sản phẩm nào */}
        {/* trong chi tiet giay có userParams để lấy params, trong useLocation trả về tất cả các url phía sau localhost:3000, thẻ LINK(khi lick vô thì chuyển hướng), và useNavigate để chuyển hướng người dùng đến 1 trang web sau khi xử lí(có thể ứng dụng cho đăng nhập thành công chuyển thẳng về trang chủ) */}
        {/* trong ChiTietGiay dùng userEffect để chạy didMoun và didUpdate bằng cách thay đổi giá trị vào [] */}
        <Route element={<ChiTietGiay/>} path="detail/:id"/>
        </Route>
        {/* route kiểm tra page not Found */}
        <Route element={<Page404/>} path="*"></Route>
      </Routes>
    </>

  );
}

export default App;


// 2:18
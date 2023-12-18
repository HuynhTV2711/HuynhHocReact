import BaiTapGioHangRedux from "./components/BaiTapRedux/BtGioHang/BaiTapGioHangRedux";
import DemoIfElse from "./components/CauTrucDieuKien/DemoIfElse";
import BaiTapComponent from "./components/DemoComponent/baiTapComponent/BaiTapComponent";
import Event from "./components/DemoDataBinding/Event";
import SinhVien from "./components/DemoDataBinding/SinhVien";
import BaiTapProps from "./components/DemoProps/BaiTapProps/BaiTapProps";
import BaiTapGiayCach2 from "./components/DemoProps/BaiTapPropsCach2/BaiTapGiayCach2";
import DemoProps from "./components/DemoProps/DemoProps";
import DemoRedux from "./components/DemoRedux/DemoRedux";
import BaiTapState from "./components/DemoState/BaiTapState";
import DemoVongLapComponent from "./components/DemoVongLap/DemoVongLapComponent";


function App() {
  return (
    <div className="App container">
      {/* Demo component */}
    {/* <BaiTapComponent/> */}
    {/* Demo data binding */}
    {/* <SinhVien/> */}
    {/* Demo Event */}
    {/* <Event/> */}
    {/* Demo if else vaf state */}
    {/* <DemoIfElse/> */}
    {/* Demo bai tap state thay doi mau xe o to*/}
    {/* <BaiTapState/> */}
    {/* Demo map de render mang san pham len giao dien */}
    {/* <DemoVongLapComponent/> */}
    {/* Demo Props trong react */}
    {/* <DemoProps title="title"/> */}
    {/* Bai tap on tap Props */}
    {/* <BaiTapProps/> */}
    {/* <BaiTapGiayCach2/> */}
    {/* Demo Redux */}
    {/* <DemoRedux/> */}
    {/* Bai tap gio hang dung redux */}
    <BaiTapGioHangRedux/>
    </div>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Homepage from './Pages/Homepage'
import Aboutpage from './Pages/Aboutpage'
import Contactpage from './Pages/Contactpage'
import Job from './Pages/Job'
import News from './Pages/News'
import Usermanual from './Pages/Usermanual'
import Cart from './Pages/Cart'
import Paymentguide from './Pages/Payment_guide';
import Shoppingguide from './Pages/Shopping_guide'
import Policygeneral from './Pages/Policy_general'
import Policyinformation from './Pages/Policy_information_privacy'
import Policyrefund from './Pages/Policy_refund'
import Policyshipping from './Pages/Policy_shipping'

function App() {
  return (
    <div className="App">
      <button className="nut-mo-chatbox" onClick={() => document.getElementById("myForm").style.display = 'block'} style={{ fontSize: '17px' }}><i style={{ fontSize: '30px' }} className="fa-brands fa-rocketchat"></i></button>
      <div className="Chatbox" id="myForm">
        <form action className="form-container">
          <h3 style={{ textAlign: 'center' }}>Liện hệ với chúng tôi !</h3>
          <div className='form-item'>
            <a href="https://www.facebook.com/messages/t/100042210632198"><i className="fab fa-facebook-messenger"></i> Chat với Messenger</a>
          </div>
          <div className='form-item'>
            <a href="https://f38-zpg.zdn.vn/8975855870803662909/493141e950dca782fecd.jpg"><img src="https://foricenter.com/wp-content/uploads/2020/04/zalo-chat-fori-center.jpg" alt="" width={'20px'} style={{ borderRadius: '50%' }} /> Chat với Zalo</a>
          </div><button type="button" className="btn nut-dong-chatbox" onClick={() => document.getElementById("myForm").style.display = 'none'} style={{ color: 'white' }}>Đóng</button>
        </form>
      </div>
      <div className="navbar">
        <Link to='/' style={{ padding: "5px 20px" }}>
          <img src="https://thuonglai.vn/image/catalog/logo/logo_big-1.png" alt="" height={"49px"} />
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Sản phẩm buôn <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/thit-cuu-uc">Thịt cừu Úc</Link>
            <Link to="/ca-hoi-na-uy">Cá hòi Na Uy</Link>
            <Link to="/thit-bo-my">Thịt bò Mỹ</Link>
            <Link to="/thit-bo-uc">Thịt bò Úc</Link>
            <Link to="/ca-ngu">Cá Ngừ</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Bán lẻ <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/thit-ca-nhap-khau">Thịt & cá nhập khẩu</Link>
            <Link to="/sot-gia-vi">Sốt & gia vị</Link>
            <Link to="/thuc-pham">Thực phẩm</Link>
          </div>
        </div>
        <Link style={{ padding: "21px 20px" }} to='/vieclam'>Việc làm</Link>
        <Link style={{ padding: "21px 20px" }} to='/cangnangsudung'>Cẩm nang sử dụng</Link>
        <Link style={{ padding: "21px 20px" }} to='/tintuc'>Tin tức</Link>
        <Link style={{ padding: "21px 20px" }} to='/gioithieu'>Giới thiệu</Link>
        <Link style={{ padding: "21px 20px" }} to='/lienhe'>Liên hệ</Link>
        <Link style={{ padding: "21px 20px" }} to='/giohang'>Giở hàng</Link>
      </div>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/gioithieu' element={<Aboutpage />} />
          <Route path='/lienhe' element={<Contactpage />} />
          <Route path='/vieclam' element={<Job />} />
          <Route path='/cangnangsudung' element={<Usermanual />} />
          <Route path='/tintuc' element={<News />} />
          <Route path='/giohang' element={<Cart />} />
          <Route path='/huongdanthanhtoan' element={<Paymentguide />} />
          <Route path='/huongdanmuahang' element={<Shoppingguide />} />
          <Route path='/chinhsachvaquydinhchung' element={<Policygeneral />} />
          <Route path='/chinhsachvanchuyen' element={<Policyshipping />} />
          <Route path='/chinhsachdoitrahang' element={<Policyrefund />} />
          <Route path='/chinhsachbaomatthongtin' element={<Policyinformation />} />
        </Routes>
      </div>
      <div className='footer'>
        <div className='footer-item'>
          <h4>Liên hệ</h4>
          <hr />
          <ul>
            <li><a href='mailto:dtnsuper@gmail.com'><i className="fas fa-envelope"></i> Contact: dtnsuper@gmail.com</a></li>
            <li><a href='tel:0388818270'><i className="fas fa-phone-square-alt"></i> 0388818270</a></li>
            <li><a href='https://goo.gl/maps/WE9cQiBUEa3KYkbE6'><i className="fas fa-warehouse"></i> Thới Sơn, Mỹ Tho, Tiền Giang</a></li>
            <li><a href='tel:1811061168'><i className="fas fa-phone-square-alt"></i> 1811061168</a></li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>Trợ giúp nhanh</h4>
          <hr />
          <ul>
            <li><Link to='/huongdanthanhtoan'><i className="fas fa-chevron-right"></i> Hướng dẫn thành toán</Link></li>
            <li><Link to='/huongdanmuahang'><i className="fas fa-chevron-right"></i> Hướng dẫn mua hàng</Link></li>
            <li><Link to='/lienhe'><i className="fas fa-chevron-right"></i> Liên hệ</Link></li>
          </ul>
        </div>
        <div className='footer-item'>
          <h4>Chính sách bán hàng</h4>
          <hr />
          <ul>
            <li><Link to='/chinhsachvaquydinhchung'><i className="fas fa-chevron-right"></i> Chính sách và quy định chung</Link></li>
            <li><Link to='/chinhsachvanchuyen'><i className="fas fa-chevron-right"></i> Chính sách vận chuyển</Link></li>
            <li><Link to='/chinhsachdoitrahang'><i className="fas fa-chevron-right"></i> Chính sách đổi trả hàng</Link></li>
            <li><Link to='/chinhsachbaomatthongtin'><i className="fas fa-chevron-right"></i> Chính sách bảo mật thông tin</Link></li>
          </ul>
        </div>
        <div className='footer-item'>
          <img src="https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/42008041469/original/Mo9gDy2XMZLppkUw4sWCsYV-lk65HqqgQw.gif?1539077990" alt="" width={'90%'} />
        </div>
      </div>
    </div>
  );
}

export default App;

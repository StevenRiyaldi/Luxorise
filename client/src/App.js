import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import AboutUs from "./components/aboutus/AboutUs";
import AddProduct from "./components/addProduct/AddProduct";
import Couple from "./components/product/Couple";
import Male from "./components/product/Male";
import Female from "./components/product/Female";
import Gold from "./components/product/Gold";
import Profile from "./components/profile/Profile";
import Detail from "./components/detail/Detail";
import Cart from "./components/cart/Cart";
import Stock from "./components/stock/Stock";
import Order from "./components/order/Order";
import Payment from "./components/payment/Payment";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/navbar" element={<Navbar />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/couple" element={<Couple />} />
        <Route exact path="/male" element={<Male />} />
        <Route exact path="/female" element={<Female />} />
        <Route exact path="/gold" element={<Gold />} />
        <Route exact path="/addproduct" element={<AddProduct />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/stock" element={<Stock />} />
        <Route exact path="/order" element={<Order />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;

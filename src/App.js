import Login from "./pages/auth/login/Login";
import Register from "./pages/auth/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "./pages/auth/success/Success";
import CartSuccess from "./pages/cart/cart-success/CartSuccess";
import Cart from "./pages/cart/Cart";
import Landing from "./pages/landing/Landing";
import DetailProduct from "./pages/detail/DetailProduct";
import ListAll from "./pages/all-products/ListAll";
import GadgetCategory from "./pages/categories/gadget/GadgetCategory";
import LaptopCategory from "./pages/categories/laptop/LaptopCategory";
import ComputerCategory from "./pages/categories/computer/ComputerCategory";
import AksesorisCategory from "./pages/categories/accesories/AksesorisCategory";
import Headphone from "./pages/categories/headphone/Headphone";
import Keyboard from "./pages/categories/keyboard/Keyboard";
import Mouse from "./pages/categories/mouse/Mouse";
import Smarthome from "./pages/categories/smarthome/Smarthome";
import SmartTv from "./pages/categories/smartTv/SmartTv";
import Smartwatch from "./pages/categories/smartwatch/Smartwatch";
import AllCategory from "./pages/all-category/AllCategory";
import { AuthContext } from "./utils/context/AuthContext";
import { useContext } from "react";

function App() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/success-transaction" element={<CartSuccess />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/" exact element={<Landing />}></Route>
          <Route path="/detail-product/:id" element={<DetailProduct />}></Route>
          <Route path="/all-product" element={<ListAll />}></Route>
          <Route path="/Smartphone" element={<GadgetCategory />}></Route>
          <Route path="/Laptop" element={<LaptopCategory />}></Route>
          <Route path="/Komputer" element={<ComputerCategory />}></Route>
          <Route path="/Aksesoris" element={<AksesorisCategory />}></Route>
          <Route path="/Headphone" element={<Headphone />}></Route>
          <Route path="/Keyboard" element={<Keyboard />}></Route>
          <Route path="/Mouse" element={<Mouse />}></Route>
          <Route path="/Smart%20Home" element={<Smarthome />}></Route>
          <Route path="/Smart%20TV" element={<SmartTv />}></Route>
          <Route path="/Smartwatch" element={<Smartwatch />}></Route>
          <Route path="/Categories" element={<AllCategory />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


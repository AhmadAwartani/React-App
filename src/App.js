import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import AboutUs from './Components/AboutUs/AboutUs';
import Cart from './Components/Cart';
import Thanks from './Components/Thanks';
import Menu from "./Components/Menu";
import Admin from "./Components/Admin";
import AdminUsers from "./Components/AdminUsers";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getPhotos } from "./galleryState";

function App() {
  // const dispatch = useDispatch();
  // const photos = useSelector(state.gallery.photos);

  // useEffect(() => {
  //   dispatch(getPhotos());
  // }, [dispatch]); //make a call api in function dispatch in galleryState

  return (
    <Routes>
      {/* kol Routes bya5os route w kol route bya5os path w element  */}
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<Login />} />
      <Route path="registration" element={<Registration />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="cart" element={<Cart />} />
      <Route path="thanks" element={<Thanks />} />
      <Route path="menu" element={<Menu />} />
      <Route path="admin" element={<Admin />} />
      <Route path="adminusers" element={<AdminUsers />} />
    </Routes>
  );
}

export default App;

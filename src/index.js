import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Context/AuthProvider";
// import {Provider} from 'react-redux';
// import { configureStore } from "@reduxjs/toolkit";
// import { galleryReducer} from "./galleryState";

// const store = configureStore({
//   reducer: {
//     gallery: galleryReducer
//   }
// })

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <BrowserRouter>
    {/* BrowserRouter: Provider */}
    {/* bshtaghel zee el useNavication y3ne bya5od el children in provider and it's proops */}
   <AuthProvider>
  <App />
   </AuthProvider>
   
  </BrowserRouter>
);

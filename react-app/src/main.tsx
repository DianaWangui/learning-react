import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// ?import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
// import NotFound from "./NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />       
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

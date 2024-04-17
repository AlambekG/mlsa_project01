import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';


import App from "./App";
import Login from "./Components/loginPage/Login"
import HomePage from "./Components/loginPage/HomePage"

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
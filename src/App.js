import React , {useState, Suspense} from "react";
import Home from "./pages/Home/Home";
import './scss/style.scss'
import Layout from "./Layout/Layout";
import About from "./pages/Home/About";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;

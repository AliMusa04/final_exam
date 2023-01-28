import axios from "axios";
import { useEffect, useState } from "react";
import { AbortedDeferredError, BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AddPage from "./page/Add/AddPage";
import Home from "./page/Home/Home";
import Wishlist from "./page/Wishlist/Wishlist";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/problem").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData}/>}/>
        <Route path="/addpage" element ={<AddPage/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>
      <Footer data={data} setData={setData}/>
      </BrowserRouter>
    </>
  );
}

export default App;

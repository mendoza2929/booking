import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Search from "./components/search/Search";
import Result from "./components/result/Result";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Profile from "./components/userprofile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/hotels" element={<Search />}></Route>
          <Route path="/result/:id" element={<Result />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/booking" element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

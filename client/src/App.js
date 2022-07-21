
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Search from './components/search/Search';
import Result from './components/result/Result';
import Login from './components/login/Login';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/hotels' element={<Search/>}></Route>
        <Route path= '/result/:id' element={<Result/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;

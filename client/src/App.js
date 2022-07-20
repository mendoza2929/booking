
import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Search from './components/search/Search';

function App() {
  return (
   <>

    <Router>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </Router>
   </>
  );
}

export default App;

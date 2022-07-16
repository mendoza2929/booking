
import './App.css';
import Header from './components/common/header/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  return (
   <>

    <Router>
        <Header/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

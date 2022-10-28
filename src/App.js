import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Nav from './Page/Share/Navbar/Nav';
import Footer from './Page/Share/Footer/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

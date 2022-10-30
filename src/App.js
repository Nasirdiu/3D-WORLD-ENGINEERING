import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import Nav from './Page/Share/Navbar/Nav';
import Footer from './Page/Share/Footer/Footer';
import NotFound from './Page/Share/NotFound/NotFound';
import Contact from './Page/Contact/Contact';
import Blogs from './Page/Home/Blog/Blogs';

function App() {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

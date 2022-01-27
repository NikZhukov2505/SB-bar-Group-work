import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Promotion from './Components/Promotion/Promotion';
import Contacts from './Components/Contacts/Contacts';
import Sign from './Components/Sign/Sign';
import Basket from './Components/Basket/Basket';
import Order from './Components/Order/Order';

function App() {
  return (
    <div>
      <Header />

      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/promotion' element={<Promotion />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/sign' element={<Sign />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/order' element={<Order />} />

        </Routes>
      </div>

      <Footer />

    </div>
  );
}

export default App;

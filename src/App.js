import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Cart from './Containers/Cart'
import Slide from './components/Slide';
import CartProvider from './Context/CartContext';
import FavProvider from './Context/FavContext'
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import Form from './Containers/Form';
import Fav from './Containers/Fav'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <FavProvider>
        {<NavBar />}
        <Slide />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart/finish' element={<Form />} />
            <Route path='/fav' element={<Fav />} />
          </Routes>
        </FavProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

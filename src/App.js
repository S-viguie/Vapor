import NavBar from './components/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import Cart from './Containers/Cart'
import Slide from './components/Slide';
import {BrowserRouter, Routes, Route,} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Slide />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category/:categoryName' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

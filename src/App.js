
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CarouselFadeExample from './components/inicio/portada';
import BarraNavegacion from './components/inicio/NavBar' ;
import ItemListContainer from './components/item/itemListContainer';
import ItemDetailContainer from './components/details/itemDetailContainer';
import Cart from './components/cart/Cart';
import CartProv from './context/cartContext';


class app extends React.Component{
  render(){
         
         
         
    return(
      <div>
        <BrowserRouter>
          <CartProv>
          <BarraNavegacion />
          <Routes>
            <Route path='/' element={<CarouselFadeExample/>}/>
            <Route path='/catalogo' element={<ItemListContainer/>}/>
            <Route path='/category/:categoriaId' element={<ItemListContainer />}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/> 
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          </CartProv>
        </BrowserRouter>
        
      </div>

    )
  }
}

export default app;


import React from 'react';
import './App.css';
import Contador from './components/itemCount'
import BarraNavegacion from './components/NavBar' ;
import ItemListContainer from './components/itemListContainer';



class app extends React.Component{
  render(){
    const onAdd = ( quantity ) => {
            alert("Has añadido "+ quantity+" productos al carrito" ) 
  }                        
    return(
      <div>
        <BarraNavegacion />
        <Contador initial={1} stock={6} onAdd={onAdd}/>
        <ItemListContainer />
      </div>

    )
  }
}

export default app;

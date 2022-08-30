
import React from 'react';
import './App.css';
import Contador from './components/itemCount'
import BarraNavegacion from './components/NavBar' ;
class app extends React.Component{
  render(){
    const onAdd = ( quantity ) => {
            console.log ( 'Añadiste'+{quantity}+'unidades' ) 
  }                        
    return(
      <div>
        <BarraNavegacion />
        <Contador initial={1} stock={6} onAdd={onAdd}/>
      </div>

    )
  }
}

export default app;

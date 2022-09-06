
import React from 'react';
import './App.css';
import BarraNavegacion from './components/NavBar' ;
import ItemListContainer from './components/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';



class app extends React.Component{
  render(){
                      
    return(
      <div>
        <BarraNavegacion />
        <ItemListContainer />
        <ItemDetailContainer/>
      </div>

    )
  }
}

export default app;

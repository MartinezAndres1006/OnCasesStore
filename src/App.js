
import React from 'react';
import './App.css';
import BarraNavegacion from './components/NavBar' ;
import Title from './components/itemListContainer'
class app extends React.Component{
  render(){
    return(
      <div>
        <BarraNavegacion />
        <Title greeting="On cases Store" />
      </div>

    )
  }
}

export default app;

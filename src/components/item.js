import React from 'react'
import "../App.css"
import Contador from '../components/itemCount'
const Item = ({pedido}) => {
  
  const onAdd = ( quantity ) => {
    alert("Has añadido "+ quantity+" productos al carrito" ) 
}     
  return (
        <div className='card'>
            <div className='card-body'>
        <img src={pedido.image} alt='' className='img__Product'/>
        <h5 className="card-title">{pedido.title}</h5>
        <h5 className='card-title'>${pedido.price}</h5>
        <Contador initial={1} stock={6} onAdd={onAdd}/>
        </div>
        </div>
  )
}

export default Item
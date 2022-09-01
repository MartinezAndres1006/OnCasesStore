import React from 'react'
import "../App.css"

const Item = ({pedido}) => {
  return (
        <div className='card'>
            <div className='card-body'>
        <img src={pedido.image} alt='' className='img__Product'/>
        <h5 className="card-title">{pedido.title}</h5>
        <h5 className='card-title'>{pedido.price}</h5>
        </div>
        </div>
  )
}

export default Item
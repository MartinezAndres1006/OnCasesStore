import React from 'react'
import "./items.css"
import { Link } from 'react-router-dom'
const Item = ({pedido}) => {
  return (
        <div className='card container-fluid'>
            <div className='card-body'>
        <img src={pedido.image} alt='' className='img__Product'/>
        <h5 className="card-title">{pedido.title}</h5>
        <h5 className='card-title'>${pedido.price}</h5>
        <Link className='btn btn-dark' to={`/detail/${pedido.id}`}>Detalles</Link>
        </div>
        </div>
  )
}

export default Item
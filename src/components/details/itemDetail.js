import React,{useState, useContext } from 'react'
import ItemCount from '../item/itemCount'
import './detail.css'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../../context/cartContext'




const ItemDetail = ({data}) => {
  const [goTocart,setgoToCart]=useState(false)
  const {addToCart}=useContext(Cartcontext)
  
  
  
  const onAdd = (quantity) =>{
    setgoToCart(true)
    addToCart(data,quantity)
  }
  
  
  return (
    <div className="card__detail">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.image} className="img-fluid rounded-start img__detail" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.detail}</p>
        <p className="card-text precio">${data.price}</p>
        {goTocart? <Link className='btn btn-dark' to='../cart'>Finalizar compra</Link>:<ItemCount initial={0} stock={5} onAdd={onAdd}/>}
      </div>
    </div>
  </div>
</div>
  )
}

export default ItemDetail
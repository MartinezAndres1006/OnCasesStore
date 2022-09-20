import React,{useContext} from 'react'
import { Cartcontext } from '../../context/cartContext'
import './itemCart.css'

const Itemcart = ({product}) => {
    const {removeCart}=useContext(Cartcontext)
  return (
    <div className='card container-fluid'>
         <div className='card-body'>
        <img src={product.image} alt='' className='img-fluid'/>
            <p className='card-title'>{product.title}</p>
            <p className='card-parrafo'>Cantidad: {product.quantity}</p>
            <p className='card-parrafo'>Precio:${product.price}</p>
            <p className='card-parrafo'>Subtotal:{product.quantity*product.price}</p>
            <button onClick={()=>removeCart(product.id)} className=' btn-dark'>Eliminar del carrito</button>
        </div>
    </div>
  )
}

export default Itemcart
import React,{useContext} from 'react'
import { Cartcontext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import Itemcart from '../item/itemcart'
import './cart.css'


const Cart = () => {
  const {cart,preciototal}=useContext(Cartcontext)
  
  if(cart.length===0){
return(
  <div className='container__vacio'>
    <h1 className='titulo__vacio'>El carrito esta vacio</h1>
    <p className='parrafo__vacio'>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
    <Link to='/' className='btn btn-dark boton_seguir'>Seguir comprando</Link>
  </div>
)
  }
  
  
  return (
    <div className='container-fluid'>
      <h1 className='titulo__vacio'>Carrito de compras!</h1>
      <>
      {cart.map(product=><Itemcart key={product.id} product={product}/>)}
      <p className='card-title'>Total: {preciototal()}</p>
      </>
    </div>
  )
}

export default Cart
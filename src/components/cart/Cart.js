import React,{useContext} from 'react'
import { Cartcontext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import Itemcart from '../item/itemcart'
import './cart.css'
import {addDoc,collection,getFirestore} from 'firebase/firestore'

const Cart = () => {
  const {cart,preciototal}=useContext(Cartcontext)
  
  const order ={
    buyer:{
      name:"Juan",
      email:"miacontreras019@gmail.com",
      phone:"1123168224",
      addres:"galeno 1723,moreno"

    },
    items:cart.map(product =>({id:product.id,title:product.title,price:product.price,quantity:product.quantity})),  
    total:preciototal(),
  }

const handleclick= ()=>{
  const db = getFirestore();
  const orderscollection = collection(db,'orders');
addDoc(orderscollection,order)
.then(({id}) => console.log(id)) 

}

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
      <button onClick={handleclick}>Finalizar compra!</button>
      </>
    </div>
  )
}

export default Cart
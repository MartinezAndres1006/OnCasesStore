import React,{useContext} from 'react'
import { Cartcontext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import Itemcart from '../item/itemcart'
import './cart.css'
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import Swal from 'sweetalert2'
import TextField from '@mui/material/TextField';
import './form.css'
const Cart = () => {
  const {cart,preciototal}=useContext(Cartcontext)
  
  const order ={
    buyer:{
      name:"Juan Martinez",
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
.then(({id}) => Swal.fire({
  position: 'top-center',
  icon: 'success',
  title: 'Su orden de envio es:\n'+id,
  showConfirmButton: false,
  timer: 1500
})) 

}

  if(cart.length===0){
return(
  <div className='container__vacio'>
    <h1 className='titulo__vacio'>El carrito esta vacio</h1>
    <p className='parrafo__vacio'>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
    <Link to='/' className='btn btn-dark seguir__comprando'>Seguir comprando</Link>
  </div>
)
  }
  
  
  return (
    <div className='container-fluid'>
      <h1 className='titulo__vacio'>Carrito de compras!</h1>
      <>
      {cart.map(product=><Itemcart key={product.id} product={product}/>)}
      <p className='card-title'>Total: {preciototal()}</p>
      <form className='FormContainer'>
     <h1 className='Titulo'>Ingresa tus datos</h1>
          <TextField
            value="Juan Martinez"
            style={{ margin: 10, width: 400 }}
            name='name'
          />
          <br></br>
          <TextField
            value='galeno 1723,moreno'
            style={{ margin: 10, width: 400 }}
            name='lastName'
          />
        </form>
      <button className='btn btn-dark boton_seguir' onClick={handleclick}>Finalizar compra!</button>
      <br></br>
      </>
    </div>
     
    

  )
}

export default Cart
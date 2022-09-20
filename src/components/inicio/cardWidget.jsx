import React,{useContext} from 'react'
import { Cartcontext } from '../../context/cartContext'

 export const Cart = () => {
  const {productTotal}=useContext(Cartcontext)
  return (
    <>
    <i className="bi bi-bag"></i>
    <span>{productTotal()||''}</span>
    </>
  )
}

export default Cart
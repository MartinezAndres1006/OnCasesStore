import React,{useState,useContext} from 'react'
 const Cartcontext = React.createContext('');
export const UseCartContext = ()=> useContext(Cartcontext)




const CartProvider = ({children}) => {
  const [cart,setcart]=useState([])
  
  const añadirCart=(item,newQuantity)=>{
    const newCart=cart.filter(prod=>prod.id !== item.id);
    newCart.push({...item ,quantity: newQuantity});
    setcart(newCart)
  }
  console.log('carrito',cart)
  
  
  const clearcart =() =>setcart([])
  const incart= (id)=>{ return cart.find(products=>products.id===id)?true:false;}
  const removeCart= (id)=>{ return setcart(cart.filter(products=>products.id!==id))}
  
  
  
  
  
  
  
  return (
<Cartcontext.Provider value={{clearcart,incart,removeCart,añadirCart}}>
    {children}
</Cartcontext.Provider>
    )
}

export default CartProvider
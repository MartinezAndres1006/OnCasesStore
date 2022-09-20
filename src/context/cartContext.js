import React,{useState,createContext} from 'react'
  export const Cartcontext = createContext();


const CartProv = ({children}) => {
  const [cart,setcart]=useState([])
  console.log(cart, "TOTAL DEL CARRITO")
  
  
  
const addToCart= (item,quantity)=>{
  if (incart(item.id)){
    setcart(cart.map(product=>{
      return product.id ===item.id?{...product,quantity:product.quantity+quantity}:product
    }));

  }else{setcart([...cart,{...item,quantity}])}
}
  
const clearcart = () => setcart([]);

const incart = (id) => {
  return cart.find((products) => products.id === id) ? true:false
};

const removeCart = (id) => {
  return setcart(cart.filter((products) => products.id !== id));
};


const preciototal=()=>{
return cart.reduce((prev,act)=>prev+act.quantity * act.price,0)
}

const productTotal=() =>{
  return cart.reduce((juntar,productoAct)=>juntar+productoAct.quantity,0)
}

  return (
<Cartcontext.Provider value={{clearcart,incart,removeCart,addToCart,preciototal,productTotal,cart}}>
    {children}
</Cartcontext.Provider>
    )
}

export default CartProv
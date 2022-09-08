import React,{useState} from 'react'

export const ItemCount = ({initial,stock,onAdd}) => {
  const [ count , setCount ]=useState( initial ) ;
  
 const decrease=() =>{
  setCount(count-1)
 }
 
 const increase=() =>{
  setCount(count+1)
 }
  return (
    <div >
  <div className="card-body">
    <button className='btns btn btn-dark' onClick={decrease} disabled={count<=0}>-</button>
    <span className='contador'>{count}</span>
    <button className='btns btn btn-dark' onClick={increase}disabled={count>=stock}>+</button>
    <button className='btns btn btn-dark' disabled={count<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>

  </div>
</div>
  )
}

export default ItemCount
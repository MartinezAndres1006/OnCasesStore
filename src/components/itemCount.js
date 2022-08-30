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
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">Funda A71</h5>
    <p className="card-text">Excelente funda para el samsung a71 Lorem ipsum</p>
    <button className='btns btn btn-dark' onClick={decrease} disabled={count<=0}>-</button>
    <span className='contador'>{count}</span>
    <button className='btns btn btn-dark' onClick={increase}disabled={count>=stock}>+</button>
    <button className='btns btn btn-dark' disabled={count<=0} onClick={()=> onAdd(count)}>Agregar al carrito</button>

  </div>
</div>
  )
}

export default ItemCount
import React from 'react'
import Item from './item'

const ItemList = ({data= []}) => {
  return (
    data.map(product=><Item key={product.id} pedido={product}/>)
  )
}

export default ItemList
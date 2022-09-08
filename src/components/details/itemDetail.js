import React from 'react'
import './detail.css'
const ItemDetail = ({data}) => {
  return (
    <div className="card__detail">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={data.image} className="img-fluid rounded-start img__detail" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.detail}</p>
        <p className="card-text precio">${data.price}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default ItemDetail
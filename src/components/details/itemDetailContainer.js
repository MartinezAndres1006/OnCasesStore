import React,{useState,useEffect} from 'react'
import ItemDetail from './itemDetail'
import { useParams } from 'react-router-dom';

const products =[
    {id:"1",title:"Funda Iphone 13 Espacio",price: 1900,image:'https://i.pinimg.com/564x/84/49/9b/84499bcc8bbbca8895e7b9f1c1be6cdc.jpg',category:'apple'},
    {id:"2",title:"Funda Iphone 13 Vaquita",price:2000,image:'https://i.pinimg.com/564x/19/24/5f/19245fc35c4ac10666858b823640dbd5.jpg',category:'apple'},
    {id:"3",title:"Funda Iphone 13 Mariposas",price:2000,image:'https://i.pinimg.com/564x/85/00/5e/85005e441c755357daa64675bdc25577.jpg',category:'apple'},
    {id:"4",title:"Funda Iphone 13 Smile Black",price:1700,image:'https://i.pinimg.com/564x/b1/34/0f/b1340f9e1a22e4ed9b274318fe9ab7d0.jpg',category:'apple'},
    {id:"5",title:"Funda Iphone 13 Smile white",price:1900,image:'https://i.pinimg.com/564x/48/e5/20/48e52027686bb51f5bf2450c54b48dcf.jpg',category:'apple'},
    {id:"6",title:"Funda SamSung A12 Silicone case",price:1400,image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/068/912/products/azul-oscuro51-a01830d9b4d711c1c616264365286672-640-0.jpg',category:'samsung'},
    {id:"7",title:"Funda SamSung S20 Silicone case",price:1800,image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/068/912/products/amarillo1-86eff4691a45aa583816317995501541-480-0.jpg',category:'samsung'},
    {id:"8",title:"Funda SamSung A30S Silicone case",price:2000,image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/068/912/products/azul-oscuro31-9d927e017e3ee5b78416328339807901-480-0.jpg',category:'samsung'},
    {id:"9",title:"Funda SamSung S7 Silicone case",price:1300,image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/068/912/products/azul-oscuro111-e3e2ed4e3cfb84957616301593476786-480-0.jpg',category:'samsung'},
    {id:"10",title:"Funda SamSung S21 Silicone case",price:1400,image:'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/068/912/products/fucsia21-7e7840bd4592ea37cc16431401139521-480-0.jpg',category:'samsung'}
  ]


const ItemDetailContainer = () => {
    const {detailId} =useParams();    
    const [data, setData]=useState({});

    useEffect(()=>{
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(products)
            },500)
        });
    
        getData.then(res=> {
            const detalle = res.find(product => product.id===(detailId))
            setData(detalle)
        })
        })
  
  
    return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer
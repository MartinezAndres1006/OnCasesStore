import React,{useState,useEffect} from 'react'
import ItemList from './itemList';
import "../App.css"


const products =[
  {id:1,title:"Funda Iphone SE Silicona Black",price: 19000,image:'https://cdn-ipoint.waugi.com.ar/20668-thickbox_default/funda-apple-silicone-case-para-iphone-se-black.jpg'},
  {id:2,title:"Funda Iphone 13 Apple clear",price:25000,image:'https://cdn-ipoint.waugi.com.ar/23471-thickbox_default/funda-apple-clear-para-iphone-13-mini-con-magsafe.jpg'},
  {id:3,title:"Funda Iphone 11 Silicona White",price:20000,image:'https://cdn-ipoint.waugi.com.ar/15579-large_default/iphone-11-silicone-case-white.jpg'},
  {id:4,title:"Funda Iphone 13 cuero Brown",price:27000,image:'https://cdn-ipoint.waugi.com.ar/23388-thickbox_default/iphone-13-leather-case-with-magsafe-midnight.jpg'},
  {id:5,title:"Funda Iphone 13 Silicona Blue",price:19000,image:'https://cdn-ipoint.waugi.com.ar/23550-thickbox_default/funda-silicona-para-iphone-13-pro-con-magsafe-abyss-blue.jpg'}
]

const ItemListContainer = () => {
  const [data, setData]=useState([]);

  useEffect(()=>{
const getData= new Promise (resolve=>{
  setTimeout(() => {
    resolve(products)
  }, 3000);
})
getData.then ( res => setData ( res ) ) ;

  })
  
  
  
  return (
<div className="Contenedor__Productos">
  <ItemList data={data}/>
  
</div>
    )
}
export default ItemListContainer
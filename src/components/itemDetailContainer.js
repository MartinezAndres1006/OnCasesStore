import React,{useState,useEffect} from 'react'
import ItemDetail from './itemDetail'
const ItemDetailContainer = () => {
    
    const product= {id:1,title:"Funda Iphone SE Silicona Black",price: 19000,image:'',detail:'Comoda funda de silicona color negro,ideal para un ambiente sofisticado'}
    
    const [data, setData]=useState({});

    useEffect(()=>{
        const getData= new Promise(resolve => {
            setTimeout(()=>{
                resolve(product)
            },3000)
        });
    
    getData.then(res=> setData(res))
    })
  
  
  
    return (
    <div>
        <ItemDetail data={data}/>
    </div>
  )
}

export default ItemDetailContainer
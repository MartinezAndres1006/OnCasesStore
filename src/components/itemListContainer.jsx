import React from 'react'

const title = (props) => {
    console.log(props)
  return (
    <h1 className='textoItem'>{props.greeting}</h1>
  )
}

export default title
import React from 'react'

const Map = () => {
    let products = [
    {id:1,title:'iphone',price:150000},
    {id:2,title:'iphone',price:150001},
    {id:3,title:'iphone',price:150002},
    {id:4,title:'iphone',price:150003},
    ]
  return (
    <div>
      <h1>Map</h1>
     {products.map(product =><div>
        <h2>{product.id}</h2>
        <h2>{product.title}</h2>
        <h2>{product.iphone}</h2>
        <h2>{product.price}</h2>
     </div>)}
    </div>
  )
}

export default Map

import React from 'react'

const Product = ({name,age,salary}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{salary}</p>
    </div>
  )
}

export default Product

import React from 'react'

const Laptop = ({brandName,model,price}) => {
  return (
    <div>
      <h5>{brandName}</h5>
      <h5>{model}</h5>
      <h5>{price}</h5>
      {/* <h1>Hii Uttam</h1> */}
    </div>
  )
}

export default Laptop

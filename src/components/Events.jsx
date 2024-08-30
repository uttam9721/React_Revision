import React from 'react'

const Events = () => {

    const handleClick = () => {
        alert("done");
    }
    const addition = (a) => {
        alert(`${a+10}`)

    }
  return (
    <div>
      <h1>Events</h1>
      {/* <button onClick={handleClick}>Click me!</button> */}
      {/* <button onMouseOver={handleClick}>Click me!</button> */}
      {/* <button onClick={()=>addition(10)}>Click me!</button> */}
    </div>
  )
}

export default Events

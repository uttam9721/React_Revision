import React from 'react'
import {Link} from 'react-router-dom';

const Product = () => {
 const arr = [
  {id:'mern110',course_name: 'mern stack',price:10000},
  {id:'mean110',course_name: 'mean stack',price:20000},
  {id:'java001',course_name: 'java stack',price:30000},
  {id:'python1212',course_name: 'python stack',price:5000},

  ]
  return (
    <div>
      <h1>Product</h1>
      <ul>
        {arr.map((data)=><div key={data.id}

       >
        <Link to={`/course/${data.id}`}>{data.course_name}</Link>
        </div> )}
      </ul>
    </div>
  )
}

export default Product

import React,{useState} from 'react'
import { movies } from './data';
const Movie = () => {
    const [moviesList,setMoviesList]=useState(movies)
  return (
    <div style={
        {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap:'wrap',
            gap:'2rem',
            textAlign: 'center',
            width: '100%',
            padding:'5%',
            // backgroundColor:'',
            margin:"auto",
        }
    }>
      {/* <div></div>  */}
      {moviesList.map((data)=><div key={data.id} style={{maxWidth:'250px'}}>
<div style={{padding:'10px'}} className='hoverr'>
    <img src={data.poster_path} alt=""  style={{width:'250px',
borderRadius:'10px',border:'1px solid yellow'
    }}/>
    </div>
     <h3>{data.title}</h3>
     <p>{data.release_date}</p>

      </div>
      
      )}
    </div>
    // </div>
  )
}

export default Movie

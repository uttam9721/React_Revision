import React, { useState } from 'react'
import { movies } from './data';
const Movie = () => {
  const [moviesList, setMoviesList] = useState(movies)


  const filterByCategory=(cat)=>{
    setMoviesList(movies.filter((data)=>data.category==cat))

  }



  return (
    <>
    <div className="my-3 mx-auto text-center" style={{width:'1000px',margin:'auto'}}>
<button onClick={()=>setMoviesList(movies)}  type="button"className="btn btn-primary mx-3">All</button>
<button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-secondary mx-3">Action</button>
<button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-success mx-3">Thriller</button>
<button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-danger mx-3">Animation</button>
<button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-warning mx-3">Horror</button>
<button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-info mx-3">Drama</button>
<button onClick={()=>filterByCategory("Light")} type="button" className="btn btn-light mx-3">Light</button>
<button onClick={()=>filterByCategory("CID")} type="button" className="btn btn-dark mx-3">CID</button>
{/* <button type="button" className="btn btn-link mx-3">Link</button> */}
</div>
    
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '2rem',
        textAlign: 'center',
        width: '1300px',
        padding: '5%',
        // backgroundColor:'',
        margin: "auto",
        marginTop:'1.5rem',
      }
    }>
      {/* <div></div>  */}
      {moviesList.map((data) => <div key={data.id} style={{ maxWidth: '350px',textAlign:'center' }}>
        <div style={{ padding: '10px' }} className='hoverr'>
          <img src={data.poster_path} alt="" style={{
            width: '200px',
            height:'280px',
            borderRadius: '10px', border: '1px solid yellow'
          }} />
        </div>
        <div className='uttam'>
          <h5>{data.title}</h5>
          <p>{data.release_date}</p>
        </div>
      </div>
      )}
    </div>
    </>
  )
}

export default Movie

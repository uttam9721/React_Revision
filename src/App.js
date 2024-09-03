// import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Product from './components/Product';
import Laptop from './components/Laptop';
import Events from './components/Events';
import Counter from './components/Counter';
import Map from './components/Map';
import Filter from './components/Filter';
import Movie from './movie/Movie';
import FormHandling from './components/FormHandling';

function App() {

  useEffect(()=>{
    console.log('useEffect');
  },[])


  return (
   <div>
    <h1>Learning useEffect</h1>

<>
{/* <Product name="uttam" age="22" salary="70k" /> */}
{/* <Product name="uttam" age="22" salary="70k" /> */}
{/* <Product name="uttam" age="22" salary="70k" /> */}

{/* <Laptop brandName="Asus" model="vivobook" price="57000" /> */}
{/* <Laptop/> */}
{/* <Events/> */}
{/* <Counter /> */}
{/* <Map /> */}
{/* <Filter /> */}
{/* <Movie /> */}
<FormHandling/>


</>



   </div>
  );
}

export default App;

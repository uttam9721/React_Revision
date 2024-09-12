import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Course_detail from './pages/Course_detail';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
  return (
    <div>
      {/* You can uncomment the components you want to use */}
      
      {/* <Product name="uttam" age="22" salary="70k" /> */}
      {/* <Laptop brandName="Asus" model="vivobook" price="57000" /> */}
      {/* <Events/> */}
      {/* <Counter /> */}
      {/* <Map /> */}
      {/* <Filter /> */}
      {/* <Movie /> */}
      {/* <FormHandling/> */}
      {/* <Meal/> */}
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/Product" element={<Product/>}/>
          <Route path="/course/:id" element={<Course_detail/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

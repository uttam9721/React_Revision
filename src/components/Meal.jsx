import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
    const [data, setData] = useState([]);
    const [area,setArea] = useState('indian');

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}')
            .then(response => {
                console.log(response.data);
                setData(response.data.meals); // Set the meals array directly
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [area]);

    // Define the filterByCategory function if you want to implement category filtering
    const filterByCategory = (category) => {
        // You can update the logic here for filtering the data based on the category
        console.log(`Filtering by category: ${category}`);
    };

    return (
        <>
            <div className="my-3 mx-auto text-center" style={{ width: '1000px', margin: 'auto' }}>
                <button onClick={() => setArea('indian')} type="button" className="btn btn-primary mx-3">Indian</button>
                <button onClick={() => setArea("canadian")} type="button" className="btn btn-secondary mx-3">Indian</button>
                <button onClick={() => setArea("amarican")} type="button" className="btn btn-success mx-3">Canadian</button>
                <button onClick={() => setArea("thai")} type="button" className="btn btn-danger mx-3">American</button>
                <button onClick={() => setArea("british")} type="button" className="btn btn-warning mx-3">Thai</button>
                <button onClick={() => setArea("russian")} type="button" className="btn btn-info mx-3">British</button>
                {/* <button onClick={() => setArea("Russian")} type="button" className="btn btn-light mx-3">Russian</button> */}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                padding: '0 10%'
            }}>
                {data && data.map(item => (
                    <div key={item.idMeal} style={{ textAlign: 'center' }}>
                        <img src={item.strMealThumb} alt={item.strMeal} style={{ width: '250px', border: '2px solid blue' }} />
                        <h2>{item.strMeal}</h2>
                    </div>
                ))}
            </div>
        </>
    );
}

export default MyComponent;

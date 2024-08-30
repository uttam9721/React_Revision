import React from 'react';

const Filter = () => {
  const items = [
    { id: 1, title: 'iPhone', category: 'mobile', price: 150000 },
    { id: 2, title: 'Asus', category: 'laptops', price: 150001 },
    { id: 3, title: 'Mi Tab', category: 'mi tab', price: 150002 },
    { id: 4, title: 'Sony Camera', category: 'camera', price: 150003 },
  ];

  // Filtering items based on category 'mobile'
  const filterData = items.filter((item) => item.category === 'mobile');
//  const item=items.filter((item)=>item.category)
  return (
    <>
      <div>
        {filterData.map((data) => (
          <div key={data.id}>
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </>
  );
};
export default Filter;

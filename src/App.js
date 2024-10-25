import React, { useEffect, useState } from "react";
import Cards from './Cards';

const App = () => {
  const[data, setData] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      {!data ? (
        <h1>Loading....</h1>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {data.products.map((product) => {
            return (
              <Cards
               key={product.id}
               title={product.title}
               price={product.price}
               description={product.description}
               image={product.thumbnail}
               />
            );
          })}
        </div>
      )}
    </>
  );
};

export default App;
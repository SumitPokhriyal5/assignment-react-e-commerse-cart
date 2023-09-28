import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/products').then((res)=> res.json()).then((res) => setData(res)).catch((err) => console.log("error:", err))
  },[])
  console.log(data)
  return (
    <div>
      <button data-testid="get-btn"></button>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div>
          <h1>Cart</h1>
          {/* import cart component here */}
        </div>
        <div data-testid="products-container">
          {/* map thorugh products */}
          {data?.map((product) => (
            <ProductCard key={product.id} name={product.name} price={product.price} quantity={product.stock}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

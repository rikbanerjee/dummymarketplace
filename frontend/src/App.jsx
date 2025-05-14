// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <h1 className="text-4xl font-bold text-blue-600">Welcome to Local Marketplace</h1>
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/products")
      .then(res => res.json())
      .then(data => 
        setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Marketplace Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          // <div key={product.id} className="border p-4 rounded-lg shadow">
          //   <img src={product.image} alt={product.name} className="mb-2" />
          //   <h2 className="text-xl font-semibold">{product.name}</h2>
          //   <p className="text-sm text-gray-600">{product.description}</p>
          //   <p className="text-lg font-bold">${product.price}</p>
          // </div>
          <Link to={`/products/${product.id}`} key={product.id}>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="mb-2 w-full h-40 object-cover rounded" />
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;

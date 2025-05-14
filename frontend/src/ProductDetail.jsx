import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">← Back</Link>
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <img src={product.image} alt={product.name} className="mb-2" />
      <p className="text-lg">{product.description}</p>
      <p className="text-xl font-bold mt-2">${product.price}</p>
    </div>
  );
}

export default ProductDetail;

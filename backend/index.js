import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_, res) => res.send('API is running'));

app.get('/api/health', (req, res) => {
    res.json({ message: 'Backend is running!' });
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// sample products
const products = [
  {
    id: 1,
    name: "Tshirt Bheto Bengali",
    price: 25.00,
    image: "https://thecustomhub.com/cdn/shop/files/bhetobangalimen.jpg?v=1744404853&width=1946",
    description: "bengali tshirt"
  },
  {
    id: 2,
    name: "Bollywood Sweatshirt",
    price: 35.00,
    image: "https://thecustomhub.com/cdn/shop/files/bollywood_tees_thecustomhub_black_sweatshirt.jpg?v=1742754922&width=1946",
    description: "Bollywood Soul"
  }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }
  res.json(product);
});

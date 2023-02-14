import { useState } from "react";
import Header from "./component/Header";
import ProductCard from "./component/ProductCard";

const products = [
  { id: 1, title: "Bag", price: "$400.00" },
  { id: 2, title: "GUCCI Shoe", price: "$460.00" },
  { id: 3, title: "T-shirt", price: "$400.00" },
  { id: 4, title: "Big Bag", price: "$490.00" },
  { id: 5, title: "Face Cap", price: "$400.60" },
];

function App() {
  const [cart, setCart] = useState([]);
  function addToCart(id) {
    setCart(() => [...cart, { id: id, quantity: 1 }]);
  }
  return (
    <div>
      <Header />
      <main>
        <h3>Products</h3>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

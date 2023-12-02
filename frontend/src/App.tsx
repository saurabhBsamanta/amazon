import './App.css';
import { sampleProducts } from './data';
function App() {
  return (
    <>
      <header>Amazon</header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            ></img>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </main>
      <footer>All rights reserved</footer>
    </>
  );
}

export default App;

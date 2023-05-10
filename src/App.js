import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  FeaturedProductsPage,
  HomePage,
  NewProductsPage,
  ProductsPage,
} from "./Components/NavigatingRoutesComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="products" element={<ProductsPage />}>
        <Route path="featured" element={<FeaturedProductsPage />} />
        <Route path="new" element={<NewProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;

// Note '/about' is absolute route
// 'products' and 'featured are relative routes

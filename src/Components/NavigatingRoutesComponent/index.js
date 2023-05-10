import { NavLink, Outlet } from "react-router-dom";

export const AboutPage = () => {
  return <h2>About Page</h2>;
};

export const HomePage = () => {
  return <h2>Home Page</h2>;
};

export const FeaturedProductsPage = () => {
  return <h4>Featured Products</h4>;
};

export const NewProductsPage = () => {
  return <h4>New Products</h4>;
};

export const ProductsPage = () => {
  return (
    <div style={{ margin: "20px" }}>
      <input type="text" placeholder="search Products..." />
      <br />
      <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

// Note that /about is absolute route & 'featured' is relative route

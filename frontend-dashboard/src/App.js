import "./App.css";
import Container from "./pages/container";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import FormCreateProduct from "./pages/FormCreateProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route path="/" element={<Product />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/create" element={<FormCreateProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

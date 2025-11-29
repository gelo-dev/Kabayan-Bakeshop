
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { CartProvider } from "./pages/CartContext.jsx"; // <-- use provider

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);

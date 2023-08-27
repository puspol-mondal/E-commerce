import "./App.css";
import CartPage from "./pages/Cart/CartPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Home from "./pages/Home";
import LoginPage from "./pages/Login/LoginPage";
import ProductDetils from "./pages/ProductDetails/ProductDetils";
import SignuPage from "./pages/Signup/SignuPage";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <SignuPage />,
  },
  {
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "checkout",
    element: <CheckoutPage />,
  },
  {
    path: "product-detail",
    element: <ProductDetils />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RoutLayout from "./pages/RoutLayout";
import ErrorPage from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/products",
          element: <ProductsPage />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

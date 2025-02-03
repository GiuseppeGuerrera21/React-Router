import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RoutLayout from "./pages/RoutLayout";
import ErrorPage from "./pages/Error";
import ProductsDetailPage from "./pages/ProductsDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RoutLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'products',
          element: <ProductsPage />,
        },
        {
          path: 'products/:id',
          element: <ProductsDetailPage />,
        },

      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Banner from "./components/Banner/Banner";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Banner />,
      },
      {
        path: "/home",
      },
      {
        path: "/about",
      },
      {
        path: "/projects",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

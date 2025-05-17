import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router";
import Home from "./home";
import RootLayout from "./layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router";
import Home from "./home";
import RootLayout from "./layout";
import LoginPage from "./login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
]);

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}

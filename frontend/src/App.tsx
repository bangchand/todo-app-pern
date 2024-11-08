import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Index />,
    },
  ],
  {
    future: {
      v7_skipActionErrorRevalidation: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
    },
  }
);

function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

export default App;

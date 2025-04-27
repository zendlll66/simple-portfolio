import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import LayoutHomePage from './pages/LayoutHomePage'
import Homepage from './pages/Homepage'
import Nopage from './pages/Nopage'
import Portfolio from './pages/Portfolio'
import PortDetail from './pages/PortDetail'
import PostPage from './pages/PostPage'
import CompoShowcase from './pages/CompoShowcase'

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <LayoutHomePage />,
          children: [
            { path: "/", element: <Homepage /> },
            { path: "home", element: <PostPage /> },
            { path: "portfolio", element: <Portfolio />},
            { path: "portfolio/detail", element: <PortDetail /> },
            { path: "composhowcase", element: <CompoShowcase /> },
            { path: "*", element: <Nopage /> }, // ✅ ต้องอยู่ใน children
          ],
        },
      ])}
    />
  );
};


export default App
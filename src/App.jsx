import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import LayoutHomePage from './pages/LayoutHomePage'
import Homepage from './pages/Homepage'
import Nopage from './pages/Nopage'
import AboutPage from './pages/AboutPage'


const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <LayoutHomePage />,
          children: [
            { path: "/", element: <Homepage /> },
            { path: "/about", element: <AboutPage/> },
            { path: "*", element: <Nopage /> }, // ✅ ต้องอยู่ใน children
          ],
        },
      ])}
    />
  );
};


export default App
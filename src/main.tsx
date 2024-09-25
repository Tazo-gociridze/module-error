import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About.tsx';
import Country from './components/country/Country.tsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/about",
    element: <About/>,
  },

  {
    path: "/country",
    element: <Country/>,
  },
]);

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFound from './components/NotFound/index.tsx';
import { PokemonCard } from './components/PokemonCard/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/Pokedex",
    element: <PokemonCard />,
    errorElement: <NotFound />
  },
  {
    path: '/Legendaries',
    element: <NotFound />
  }
]);



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)


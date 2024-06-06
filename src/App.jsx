// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Product from './pages/Product.jsx'
import Shop from './pages/Shop.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/checkout",
        element: <Checkout/>,
      },
      {
        path: "/product",
        element: <Product/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App

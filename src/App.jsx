// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import Product from './pages/Product.jsx'
import Shop from './pages/Shop.jsx'
import Cakes from './pages/Cakes.jsx'
import Buns from './pages/Buns.jsx'
import Drinks from './pages/Drinks.jsx'

import Test from './pages/Test.jsx'
import { loader as productLoader} from './pages/Product.jsx'

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
        path: "/cakes",
        element: <Cakes/>,
      },
      {
        path: "/buns",
        element: <Buns/>,
      },
      {
        path: "/drinks",
        element: <Drinks/>,
      },
      {
        path: "/shop",
        element: <Shop/>,
      },
      {
        path: "/shop/:id",
        element: <Product/>,
        loader: productLoader,
      },
      {
        path: "/test",
        element: <Test/>,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componenst/Home/Home';
import Main from './componenst/Layout/Main.jsx';
import OrderReview from './componenst/OrderReview/OrderReview.jsx';
import About from './componenst/About/About.jsx';
import Contact from './componenst/Contact/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader:()=> fetch('tshirts.json')
      },
      {
        path:"/orderreview",
        element:<OrderReview/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)

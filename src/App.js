import React from 'react'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from "../src/Compontent/MasterLayout/MasterLayout";
import AboutUs from "../src/Compontent/About us/AboutUs";
import Home from "../src/Compontent/Home/Home";
import ContactUs from "../src/Compontent/Contact us/ContactUs";
import Services from "../src/Compontent/Services/Services";
import Login from "../src/Compontent/Login/Login";
import Register from "../src/Compontent/Register/Register";
import Chat from "../src/Compontent/Chat/Chat";
import Ourproject from '../src/Compontent/Ourproject/Ourproject';




export default function App() {
  let routes = createBrowserRouter([{
    path: '/', element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Ourproject />},
      { path: 'chat', element: <Chat /> },
      { path: 'login', element: <Login/> },
      { path: 'register', element: <Register/> },

      { path: 'about', element: <AboutUs /> },
      { path: 'contact', element: <ContactUs /> },

    ]
  }])
  return (
    <>

      <RouterProvider router={routes} />

    </>
  )
}

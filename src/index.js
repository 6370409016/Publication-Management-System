import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Home from './Home';
import "./Home.css"
import { Login } from './pages/Login';
import "./pages/Login.css" ;
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Register from './pages/Register';
import './pages/Register.css'

const router = createBrowserRouter([
   {
     path: "/",
     element: <Home/>,
   },
   {
      path: "login",
      element: <Login/>,
    },
    {
      path: "register",
      element: <Register/>,
    },
 ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
   <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode> 
   
  
);


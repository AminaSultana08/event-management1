/* eslint-disable no-undef */
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import AboutUs from "../Pages/AboutUs/AboutUs";

import Gallery from "../Pages/Gallery/Gallery";
import Contact from "../Pages/Contact/Contact";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";
import OurPackages from "../Pages/OurPackages/OurPackages";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('/services.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute> ,
                loader:()=>fetch('/services.json')
            },
            {
                path:'/aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path:'/packages',
                element:<PrivateRoute><OurPackages></OurPackages></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
        ]
    }

])

export default router;
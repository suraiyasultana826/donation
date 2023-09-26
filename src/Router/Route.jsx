import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../Pages/Home/Home';
import Favorites from '../Pages/Favorites/Favorites';
import Login from '../Pages/longin/Login';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import DonateDetail from '../Pages/DonateDetail/DonateDetail';

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('/donation.json')
            },
            {
                path : '/favorites',
                element : <Favorites></Favorites>

            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path: '/donate/:id',
                element: <DonateDetail></DonateDetail>,
                loader:() => fetch('/donation.json')
            }
        ]
    }
]) 

export default myCreatedRoute;
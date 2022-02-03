import React from 'react';
import {Navigate} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import NotFoundView from './views/errors/NotFoundView';
import Vitrine from "./views/vitrine/Vitrine";
import Calculate from "./views/calculate/Calculate";

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Vitrine/> },
      { path: '*', element: <Navigate to="/404" /> },
      { path: "/start/", element: <Calculate/> }
    ]
  }
];

export default routes;

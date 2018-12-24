import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/404Page';
import ProductListPage from './pages/ProductListPage/ProductListPage'
import ProductActionPage from './pages/ProductActionPage/ProductActionPage'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product-list',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '/product/add',
        exact: false,
        main: () => <ProductActionPage />
    },
    {
        path: '/product/:id/edit',
        exact: false,
        main: ({ match }) => <ProductActionPage match={match} />
    },

    //add new route before page not found
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];
export default routes;

import Home from '../pages/Home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import BookDriver from '../pages/BookDriver'

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: 'book-driver',
        element: <BookDriver/>,
    }
])

export default Approute;
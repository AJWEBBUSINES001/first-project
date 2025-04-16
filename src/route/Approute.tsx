import Home from '@/pages/Home'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Approute = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

export default Approute;
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import BookDriver from '@/pages/BookDriver';


const Approute = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'book-driver', element: <BookDriver /> },
    ],
  },
]);

export default Approute;
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Approute from '@/route/Approute';


const App: React.FC = () => {
  return <RouterProvider router={Approute} />;
};

export default App;

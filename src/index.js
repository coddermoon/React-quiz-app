import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { router } from './assets/routers/routers';
import { RouterProvider } from 'react-router-dom';
const route = router;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={route} />
   
  </React.StrictMode>
);

reportWebVitals();

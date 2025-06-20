import React, { Suspense } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router} from './routes.jsx';
import './index.css'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
)

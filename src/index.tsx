import Layout from 'Comonents/Layout';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Layout>
      <div className='bg-violet-300'>I will be the goat in programming, I promise you Alireza!</div>
    </Layout>
  </React.StrictMode>
);

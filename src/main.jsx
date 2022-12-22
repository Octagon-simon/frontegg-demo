import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import './index.css';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: import.meta.env.VITE_BASE_URL,
  clientId: import.meta.env.VITE_CLIENT_ID
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
        <App />
    </FronteggProvider>
);
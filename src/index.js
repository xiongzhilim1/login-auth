import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  // baseUrl: 'https://app-8vxk279jvt9f.frontegg.com',
  // clientId: '7614bc7b-2c0f-4869-9c5c-2ec88da0ac43'
  baseUrl: 'https://app-ljnpkdz9eh5m.frontegg.com',
  clientId: 'fa4ca99b-c8f8-4647-aba9-dd2452afbd4d'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

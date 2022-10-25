import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '../src/fontawesome-free-5.15.3-web/css/all.min.css'

// import Context
import { DBProvider } from './context/database';
import { ActiveLinkProvider } from './context/avtiveLinks';
import { UsersProvider } from './context/UsersInfo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DBProvider>
      <ActiveLinkProvider>
        <UsersProvider>
          <App />
        </UsersProvider>
      </ActiveLinkProvider>
    </DBProvider>
  </React.StrictMode>
);

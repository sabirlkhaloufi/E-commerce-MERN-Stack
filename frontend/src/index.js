import React from 'react';
import {createRoot} from 'react-dom/client';
import './style/index.css'
import App from './App';
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    
    <BrowserRouter >
       <App />
    </BrowserRouter >
   </React.StrictMode>
);
 
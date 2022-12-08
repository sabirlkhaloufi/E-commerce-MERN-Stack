import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

import './assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css';
import './assets/css/bootstrap.min.css';

import './assets/css/plugins/owl-carousel/owl.carousel.css';
import './assets/css/plugins/magnific-popup/magnific-popup.css';
import './assets/css/plugins/jquery.countdown.css';
import './assets/css/style.css';
import './assets/css/skins/skin-demo-2.css';
import './assets/css/demos/demo-2.css';




// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  // <React.StrictMode>
    
    <BrowserRouter >
       <App />
    </BrowserRouter >
  // </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';

// Register your static components here.
import HeaderStaticComponent from './static/header/header.component';
import NavbarStaticComponent from './static/navbar/navbar.component';
import FooterStaticComponent from './static/footer/footer.component';

// Register your pages here.
import HomePage from './app/home/home.page';


const root = ReactDOM.createRoot(
  document.querySelector('pcd-root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HeaderStaticComponent />
    <NavbarStaticComponent />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    <FooterStaticComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

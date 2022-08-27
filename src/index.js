import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
// set redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import BaiTapForm from './BaiTapForm_Redux/BaiTapForm';

//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes> 
      <Route path="" element={<App />} >
        <Route path='' element={<Home />} > </Route>
        <Route path='home' element={<Home />} > </Route>

        <Route path='baitapForm' element={<BaiTapForm />} > </Route>


        {/* <Route path='baitapdatvephim' element={< />} > </Route> */}

      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

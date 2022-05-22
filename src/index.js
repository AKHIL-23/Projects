import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// React - Redux code  
import { store } from './state/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,

    {/* </React.StrictMode> */}
  </React.Fragment>,
  document.getElementById('root')
);



// how this error resolve by changing </React.StrictMode>  to </React.Fragment>,

// react-dom.development.js:67 Warning: Legacy context API has been detected within a strict-mode tree.
// The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.
// Please update the following components: Transition
// Learn more about this warning here: https://reactjs.org/link/legacy-context
//     at Transition (http://localhost:3000/static/js/bundle.js:148784:30)
//     at CSSTransition (http://localhost:3000/static/js/bundle.js:148166:35)
//     at CSSTransition (http://localhost:3000/static/js/bundle.js:12160:5)
//     at Transition (http://localhost:3000/static/js/bundle.js:12248:5)
//     at SearchModal (http://localhost:3000/static/js/bundle.js:11211:5)
//     at div
//     at div
//     at div
//     at header
//     at Header (http://localhost:3000/static/js/bundle.js:4317:5)
//     at div
//     at div
//     at Dashboard (http://localhost:3000/static/js/bundle.js:2868:88)
//     at Routes (http://localhost:3000/static/js/bundle.js:147252:5)
//     at App
//     at Router (http://localhost:3000/static/js/bundle.js:147185:15)
//     at BrowserRouter (http://localhost:3000/static/js/bundle.js:146661:5)
// printWarning @ react-dom.development.js:67
// addstudent:1 Error while trying to use the following icon from the Manifest: http://localhost:3000/logo192.png (Download error or resource isn't a valid image)
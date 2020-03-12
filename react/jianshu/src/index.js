import React from 'react';
import ReactDOM from 'react-dom';
// import './style.js';
import App from './App';
import { Globalstyle } from './style'
import { IconGlobalstyle } from './statics/iconfont/iconfont.js'


ReactDOM.render(
   <div>
     <Globalstyle />
     <IconGlobalstyle />
     <App />
   </div>,
  document.getElementById('root')
);



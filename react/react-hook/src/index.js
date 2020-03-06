import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo1 from './component/demo1';
// import Demo1 from './component/useState/indexHook';
// import Demo2 from './component/useEffect';
// import Demo2 from './component/useEffect/indexHook';
// import Demo2 from './component/useEffect/makeUnmount';
// import Demo3 from './component/useContext';
// import Demo3 from './component/useContext/indexHook';
// import Demo4 from './component/useReducer/index';
import Demo5 from './component/useMemo/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Demo5 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

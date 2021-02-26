import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './Components/App'
import 'tachyons';

ReactDOM.render(
	<React.StrictMode>
    <App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

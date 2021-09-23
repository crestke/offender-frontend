import React from 'react';
import ReactDOM from 'react-dom';

import {AppHeader} from './components/AppHeader';


function App() {
  return (
    <div>
      
      <AppHeader/>

    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


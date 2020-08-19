import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./index.css"

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

serviceWorker.register({
  onUpdate: registration => {
    console.log("Une mise à jour est disponible");
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
  }
});

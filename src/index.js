import React from 'react';
import ReactDOM from 'react-dom';
import { sayHi } from "./import-first";

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{ title }</div>,
  document.getElementById('app')
);

sayHi();

if (module.hot) {
  module.hot.accept();
}

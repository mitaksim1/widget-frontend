import React from 'react'
import ReactDOM from 'react-dom/client'
// Si on n'utilise pas le export default il faut appeler le composant entre les accolades
import { App } from './App'

import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

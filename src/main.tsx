import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

<<<<<<< HEAD

import { Provider } from 'react-redux'
import { store } from './store'

=======
>>>>>>> parent of 85e8e6b (daily redux)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> 
        <App />   
    </BrowserRouter>
  </React.StrictMode>
)

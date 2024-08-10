import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './Store/store.js'
import { AuthContextProvider } from './Contexts/auth.context.jsx'
import { Startup } from './Components/StartupSound/startup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
  
    
    <BrowserRouter>
    <Startup/>
    <Provider store={store}>
    <AuthContextProvider>
    <App/>
    
    </AuthContextProvider>
    </Provider>
    </BrowserRouter>

    
  
)

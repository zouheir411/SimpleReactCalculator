import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculator from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='app-container'>
    <Calculator/>
    </div>
  </React.StrictMode>,
)

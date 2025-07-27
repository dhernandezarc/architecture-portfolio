// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // optional

const root = document.getElementById('root')

// Clear the splash content
if (root) {
  root.innerHTML = '' // This removes <h1>Don Hernandez</h1>
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

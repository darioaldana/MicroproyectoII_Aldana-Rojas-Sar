import React from 'react'
import ReactDOM from 'react-dom/client'
import { DetailPage } from "./pages/DetailPage/DetailPage"
// import { LoginPage } from "./pages/LoginPage/LoginPage"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DetailPage />
  </React.StrictMode>,
)

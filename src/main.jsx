import React from 'react'
import ReactDOM from 'react-dom/client'
import { DetailPage } from "./pages/DetailPage/DetailPage"
// import { LoginPage } from "./pages/LoginPage/LoginPage"
import './index.css'
import { MovieDetailContextProvider } from './pages/DetailPage/context/DetailContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MovieDetailContextProvider>
      <DetailPage />
    </MovieDetailContextProvider>

  </React.StrictMode>,
)

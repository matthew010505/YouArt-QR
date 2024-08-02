import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Tuto from './Tuto.jsx'
import Header from './Header.jsx'
import Carousel from './Carousel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div >
    <Header/>
    <Carousel/>
    </div>
    
  </React.StrictMode>,
)




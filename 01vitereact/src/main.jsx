import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
const anontherElements= (
    <a href='https://www.google.com' target='_blank'>Visit</a>
  );

const reactElement= React.createElement(
    "a",
    {
        href:"https://www.google.com",
        target:"_blank"
    },
    "click me to visit google"
)
ReactDOM.createRoot(document.getElementById('root')).render(
      
     <App/>
  
)

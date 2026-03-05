import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/sass/base.scss'
import "./i18n/index.js";
createRoot(document.getElementById('root')).render(
    <App />
)

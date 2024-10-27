import "./assets/global.css"
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <I18nextProvider i18n={i18n}>
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>
  </I18nextProvider>
);
reportWebVitals();

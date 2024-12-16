import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'devextreme/dist/css/dx.light.css';

createRoot(document.getElementById('root')!).render(
  <App />
);

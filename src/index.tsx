import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/app/index.scss'
import { createRoot } from "react-dom/client";
import ProviderContainer from './ProviderContainer';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(

  <ProviderContainer>
    <App />
  </ProviderContainer>    

);
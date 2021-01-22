
import './App.css';


import ContactPage from "./Pages/ContactPage";
import TopNavigation from "./Component/TopNavigation/TopNavigation";
import PageTop from "./Component/PageTop/PageTop";
import Footer from "./Component/Footer/Footer";
import AboutSection from "./Component/AboutSection/AboutSection";
import AboutPage from "./Pages/AboutPage";
import OrderFoodSection from "./Component/OrderFoodSection/OrderFoodSection";
import HomePages from "./Pages/HomePages";
import AppRouter from "./Router/AppRouter";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div>

        <BrowserRouter>
              <AppRouter></AppRouter>
        </BrowserRouter>


    </div>
  );
}

export default App;

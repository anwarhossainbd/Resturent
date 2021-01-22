import React, {Component,Fragment} from 'react';
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom';



import SuccessFullStoryPage from "../Pages/SuccessFullStoryPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import HomePages from "../Pages/HomePages";
import OrderPage from "../Pages/OrderPage";

import TeaCoffeePage from "../Pages/TeaCoffeePage";
import JushPage from "../Pages/JushPage";
import FoodsPage from "../Pages/FoodsPage";

import {Nav} from "react-bootstrap";
import SingleFoodPage from "../Pages/SingleFoodPage";
import SingleCoffeePage from "../Pages/SingleCoffeePage";
import SingleJushPage from "../Pages/SingleJushPage";


class AppRouter extends Component {
    render() {
        return (
            <Fragment>



               {/* <AboutPage></AboutPage>*/}
               {/*<ContactPage></ContactPage>*/}
              {/* <HomePages></HomePages>*/}
             {/* <OrderPage></OrderPage>*/}
             {/*<SuccessFullStoryPage></SuccessFullStoryPage>*/}



                 <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/about" component={AboutPage}/>
                     <Route exact path="/Contact" component={ContactPage}/>

                     <Route exact path="/TeaCoffee" component={TeaCoffeePage}/>
                     <Route exact path="/jush" component={JushPage}/>
                     <Route exact path="/Foods" component={FoodsPage}/>



                    <Route exact path="/Order" component={OrderPage}/>
                     <Route exact path="/SuccessOfSrory" component={SuccessFullStoryPage}/>


                     <Route exact path="/SingleFoodPage/:sfid/:sfname" component={SingleFoodPage}/>
                     <Route exact path="/SingleDrinkPage/:jid/:jname" component={SingleJushPage}/>
                     <Route exact path="/SingleCoffeePage/:cid/:cname" component={SingleCoffeePage}/>






                 </Switch>


                
            </Fragment>
        );
    }
}

export default AppRouter;
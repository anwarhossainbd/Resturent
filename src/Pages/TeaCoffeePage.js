import React, {Component, Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import AboutSection from "../Component/AboutSection/AboutSection";
import Footer from "../Component/Footer/Footer";
import TeaandCoffee from "../Component/TeaandCoffee/TeaandCoffee";
import RestClients from "../RestApi/RestClients";
import AppUrl from "../RestApi/AppUrl";

class TeaCoffeePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }










    render() {



        return (
            <Fragment>

                <TopNavigation title="Tea and Coffee"></TopNavigation>
                <PageTop name="Tea and Coffee"></PageTop>
                <TeaandCoffee></TeaandCoffee>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default TeaCoffeePage;
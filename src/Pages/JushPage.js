import React, {Component, Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import AboutSection from "../Component/AboutSection/AboutSection";
import Footer from "../Component/Footer/Footer";
import JushSection from "../Component/JushSection/JushSection";
import TeaandCoffee from "../Component/TeaandCoffee/TeaandCoffee";

class JushPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>


                <TopNavigation title="JushPage"></TopNavigation>
                <PageTop name="Jush"></PageTop>
                <JushSection></JushSection>
                <Footer></Footer>





            </Fragment>
        );
    }
}

export default JushPage;
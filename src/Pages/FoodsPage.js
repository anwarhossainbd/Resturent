import React, {Component, Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import AboutSection from "../Component/AboutSection/AboutSection";
import Footer from "../Component/Footer/Footer";
import FoodSection from "../Component/FoodSection/FoodSection";

class FoodsPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Fast Food"></TopNavigation>
                <PageTop name="Food"></PageTop>
                <FoodSection></FoodSection>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default FoodsPage;
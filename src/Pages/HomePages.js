import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import TopBanner from "../Component/TopBanner/TopBanner";
import OurStory from "../Component/OurStory/OurStory";
import ListOfFood from "../Component/ListOfFood/ListOfFood";
import Summery from "../Component/Summery/Summery";
import ClientReviews from "../Component/ClientReview/ClientReviews";
import Footer from "../Component/Footer/Footer";

class HomePages extends Component {
      componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Home"></TopNavigation>
                <TopBanner></TopBanner>
                <OurStory></OurStory>
                <ListOfFood></ListOfFood>
                <Summery></Summery>
                <ClientReviews></ClientReviews>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default HomePages;
import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import AboutSection from "../Component/AboutSection/AboutSection";
import Footer from "../Component/Footer/Footer";
import SuccessFullStory from "../Component/SuccessfullStory/SuccessFullStory";

class SuccessFullStoryPage extends Component {
    render() {
        return (
            <Fragment>

                 <TopNavigation title="Success"></TopNavigation>
                 <PageTop name="Success Stories"></PageTop>
                <SuccessFullStory></SuccessFullStory>

                 <Footer></Footer>

            </Fragment>
        );
    }
}

export default SuccessFullStoryPage;
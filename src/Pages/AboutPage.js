import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import AboutSection from "../Component/AboutSection/AboutSection";
import Footer from "../Component/Footer/Footer";

class AboutPage extends Component {
      componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                 <TopNavigation title="About"></TopNavigation>
                 <PageTop name="About"></PageTop>
                 <AboutSection></AboutSection>
                 <Footer></Footer>


            </Fragment>
        );
    }
}

export default AboutPage;
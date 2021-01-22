import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import ContactSection from "../Component/ContactSection/ContactSection";
import Footer from "../Component/Footer/Footer";

class ContactPage extends Component {
      componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                 <TopNavigation title="Contact"></TopNavigation>
          <PageTop name="Contact"></PageTop>
          <ContactSection></ContactSection>
          <Footer></Footer>

            </Fragment>
        );
    }
}

export default ContactPage;
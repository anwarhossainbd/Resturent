import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import OrderFoodSection from "../Component/OrderFoodSection/OrderFoodSection";
import Footer from "../Component/Footer/Footer";

class OrderPage extends Component {
      componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                 <TopNavigation title="Order"></TopNavigation>
                 <PageTop name="Order Food"></PageTop>
                 <OrderFoodSection></OrderFoodSection>
                 <Footer></Footer>

            </Fragment>
        );
    }
}

export default OrderPage;
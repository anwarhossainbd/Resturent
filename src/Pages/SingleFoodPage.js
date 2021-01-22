import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import TeaandCoffee from "../Component/TeaandCoffee/TeaandCoffee";
import Footer from "../Component/Footer/Footer";
import SingleFood from "../Component/SingleFood/SingleFood";

class SingleFoodPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    constructor({match}) {
        super();
        this.state={
            id:match.params.sfid ,
            name:match.params.sfname,
        }
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Single Food "></TopNavigation>
                <PageTop name={this.state.name}></PageTop>
                <SingleFood id={this.state.id}></SingleFood>

                <Footer></Footer>

            </Fragment>
        );
    }
}

export default SingleFoodPage;
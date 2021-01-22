import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import Footer from "../Component/Footer/Footer";
import SingleCoffee from "../Component/SingleCoffee/SingleCoffee";

class SingleCoffeePage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    constructor({match}) {
        super();
        this.state={
            id:match.params.cid ,
            name:match.params.cname,
    }
    }


    render() {
        return (
            <Fragment>

                <TopNavigation title="Single Coffee "></TopNavigation>
                <PageTop name={this.state.name}></PageTop>
                <SingleCoffee cid={this.state.id}></SingleCoffee>

                <Footer></Footer>

            </Fragment>
        );
    }
}

export default SingleCoffeePage;
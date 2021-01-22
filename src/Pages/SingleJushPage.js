import React, {Component,Fragment} from 'react';
import TopNavigation from "../Component/TopNavigation/TopNavigation";
import PageTop from "../Component/PageTop/PageTop";
import Footer from "../Component/Footer/Footer";
import JushSection from "../Component/JushSection/JushSection";
import SingleJush from "../Component/SingleJush/SingleJush";

class SingleJushPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    constructor({match}) {
        super();
        this.state={
            id:match.params.jid ,
            name:match.params.jname,
        }
    }



    render() {
        return (
            <Fragment>

                <TopNavigation title="Single Jush "></TopNavigation>
                <PageTop name={this.state.name}></PageTop>
                <SingleJush id={this.state.id}></SingleJush>

                <Footer></Footer>

            </Fragment>
        );
    }
}

export default SingleJushPage;
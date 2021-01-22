import React, {Component,Fragment} from 'react';
import {Col, Container, Row,Nav} from "react-bootstrap";
import Pizza from "../../Assets/Images/pizza.jpg"
import {NavLink} from "react-router-dom";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class OurStory extends Component {

    constructor() {
        super();
        this.state={
            story:"",
              loading:true ,
            warning:false ,
        }
    }

    componentDidMount() {
        RestClients.GetRequest(AppUrl.story).then(result=>{

            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {

                this.setState({story: result[0]['title'], loading: false})
            }

        }).catch(error=>{
            this.setState({warning:true,loading:false})
        })
    }


    render() {


        if (this.state.loading == true) {

            return <Loader></Loader>
        }
        else if (this.state.warning == true) {

            return <WentWrong></WentWrong>
        }

        else {


            return (
                <Fragment>
                    <Container className="mt-5 mb-5">
                        <Row>
                            <Col lg={6} md={6} sm={12} className="text-center mt-4 mb-5">

                                <h2 className="storyTitleOne">Discover</h2>
                                <h2 className="storyTitleTwo">OUR STORY</h2>
                                <h4 className="storyDes">{this.state.story}</h4>


                                <Nav.Link> <NavLink exact to="/SuccessOfSrory" className="readMore">
                                    Read More
                                </NavLink> </Nav.Link>


                            </Col>
                            <Col lg={6} md={6} sm={12}>

                                <img src={Pizza} width="100%" height="300px"/>

                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default OurStory;
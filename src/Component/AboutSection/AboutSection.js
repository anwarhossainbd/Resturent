import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class AboutSection extends Component {

     constructor() {
        super();
        this.state={
            res:"",
            mission:"",
            vission:"",
            loading:true ,
            warning:false ,
        }
    }

    componentDidMount() {
         RestClients.GetRequest(AppUrl.about).then(result=>{

             if (result==null){

                 this.setState({warning:true,loading:false})

             }

             else {
                 this.setState({loading:false, res:result[0]['res'],mission:result[0]['mission'],vission:result[0]['vision']})

             }

         }).catch(error=>{

             this.setState({warning:true,loading:false})

         })


    }

    render() {

        if (this.state.loading == true) {

            return <Loader></Loader>
        }

        else if (this.state.warning==true){

            return <WentWrong></WentWrong>
        }


        else {

            return (
                <Fragment>

                    <Container>
                        <Row className="mb-5">
                            <Col sm={12} lg={12} md={12} className="aboutSectionC">
                                <h1 className="AboutResturent mt-5">About Our Resturent </h1>
                                <hr/>
                                <p className="ResturentDes mb-5">{this.state.res}</p>

                                <h1 className="AboutResturent mt-5">Our Mission</h1>
                                <hr/>
                                <p className="ResturentDes mb-5">{this.state.mission} </p>


                                <h1 className="AboutResturent mt-5">Our Vision</h1>
                                <hr/>
                                <p className="ResturentDes mb-5">{this.state.vission}</p>


                            </Col>
                        </Row>
                    </Container>


                </Fragment>
            );
        }

    }
}

export default AboutSection;
import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class SuccessFullStory extends Component {

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
                this.setState({story: result[0]['story'], loading: false})
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

                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="mb-5">

                                <h2 className="mb-5 headingOfStory text-center">The Long-Distance Journey of a Fast-Food
                                    Order </h2>

                                <span className="mt-5 headingOfStoryDes">
                                {this.state.story}

                            </span>

                            </Col>
                        </Row>
                    </Container>

                </Fragment>
            );
        }
    }
}

export default SuccessFullStory;
import React, {Component,Fragment} from 'react';
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";
import {NavLink} from "react-router-dom";

class SingleJush extends Component {

    constructor() {
        super();
        this.state={
            image2:"",
            name:"",
            regularprice:"",
            specialprice:"",
            description:"",
            uidescription:"",
            loading:true,
            warning:false ,

        }
    }




    componentDidMount() {

        RestClients.GetRequest(AppUrl.details+this.props.id).then(result=>{
            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {
            this.setState({
                image2:result[0]['image2'],
                name:result[0]['name'],
                regularprice:result[0]['regularprice'],
                specialprice:result[0]['specialprice'],
                description:result[0]['description'],
                uidescription:result[0]['uidescription'],
                loading:false

            })}
        }).catch(error=>{
            this.setState({warning:true,loading:false})
        })

    }


    render() {


        if (this.state.loading == true) {
            return <Loader></Loader>
        } else if (this.state.warning == true) {

            return <WentWrong></WentWrong>
        } else {


            return (
                <Fragment>
                    <Container>

                        <Row>

                            <Col lg={6} md={6} sm={12} className="singleFoodEdit1 mb-5">
                                <img  className="singleImage"  src={this.state.image2}/>
                            </Col>

                            <Col lg={6} md={6} sm={12} className=" singleFoodEdit1 mb-5">

                                <h3 className="headingOfStory">{this.state.name}</h3>
                                <hr/>

                                <h3 className="headingOfStoryDes">{this.state.description}</h3>


                                <h3 className="headingOfStoryDes ml-5 mt-3">

                                    {ReactHtmlParser(this.state.uidescription)}


                                </h3>
                                <hr />

                                <h3 className="headingOfStoryDes mt-2 mb-2"> Regular Price :{this.state.regularprice}</h3>

                                <hr />
                                <Nav.Link> <NavLink exact to="/Order" className="btn2 mybutton">
                                    Order
                                </NavLink> </Nav.Link>


                            </Col>


                        </Row>
                    </Container>


                </Fragment>
            );
        }

    }
}

export default SingleJush;
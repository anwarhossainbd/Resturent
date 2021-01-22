import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class OrderFoodSection extends Component {

     constructor() {
        super();
        this.state={
             loading:true ,
            warning:false ,
        }
    }

     componentDidMount() {
        RestClients.GetRequest(AppUrl.foods).then(result=>{
            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {


                this.setState({
                    image1: result[0]['image1'],
                    regularprice: result[0]['regularprice'],
                    specialprice: result[0]['specialprice'],
                    name: result[0]['name'],
                    loading: false

                })

            }
        }).catch(error=>{
            this.setState({warning:true,loading:false})

        })

    }


    SentData=()=>{

         let firstname= document.getElementById('firstname').value ;
         let lastname= document.getElementById('lastname').value ;
         let email= document.getElementById('email').value ;
         let message= document.getElementById('message').value ;
         let house= document.getElementById('house').value ;
         let road= document.getElementById('road').value ;
         let contact= document.getElementById('contact').value ;

         let jsonObject={firstname:firstname,lastname:lastname,email:email,message:message,house:house,road:road,contact:contact}

         RestClients.PostRequest(AppUrl.orderFood,JSON.stringify(jsonObject)).then(result=>{
             alert(result)
         }).catch(error=>{
             alert("error")
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
                            <Col lg={6} md={6} sm={12} className="OrderEdit mb-5">

                                <Form>
                                    <Row className="ml-1 mr-1">
                                        <Col lg={6} md={6} sm={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Control id="firstname" className="nameClass" required
                                                              placeholder="First name" type="text"/>
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6} md={6} sm={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Control id="lastname" className="nameClass" required
                                                              placeholder="Last name" type="text"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="email" className="nameClass" required placeholder="Email"
                                                          type="email"/>
                                        </Form.Group>
                                    </Col>

                                    <Row className="ml-1 mr-1">
                                        <Col lg={6} md={6} sm={12} className="mb-3">
                                            <Form.Group>
                                                <Form.Control id="house" className="nameClass"
                                                              placeholder="Enter Your House no" type="text"/>
                                            </Form.Group>
                                        </Col>

                                        <Col lg={6} md={6} sm={12} className="mb-3">
                                            <Form.Group>

                                                <Form.Control id="road" className="nameClass"
                                                              placeholder="Enter Your Rood no" type="text"/>


                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="contact" className="nameClass" required
                                                          placeholder="Contact Number" type="email"/>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="message" className="nameClass" required
                                                          placeholder="Your order" as="textarea" rows="3"/>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={12} md={12} sm={12} className="mb-3">

                                        <Button variant="primary" className="OrderButton" onClick={this.SentData}>
                                            Submit
                                        </Button>

                                    </Col>
                                </Form>
                            </Col>

                            <Col lg={6} md={6} sm={12}>

                                <div className="mr-5 ml-5">
                                    <img height="350px" className="mr-5 ml-5" width="80%"
                                         src="https://thumbs.dreamstime.com/z/cartoon-pizza-delivery-boy-riding-motor-bike-illustration-52776856.jpg"/>
                                </div>

                            </Col>

                        </Row>
                    </Container>

                </Fragment>
            );
        }
    }
}

export default OrderFoodSection;
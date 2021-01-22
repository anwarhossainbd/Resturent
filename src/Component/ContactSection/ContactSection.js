import React, {Component,Fragment} from 'react';
import {Col, Container, Row, Form, Button} from "react-bootstrap";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import RestClient from "../../RestApi/RestClients";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class ContactSection extends Component {


     constructor() {
        super();
        this.state={

            loading:true ,
            warning:false ,
        }
    }

     componentDidMount() {
        RestClients.GetRequest(AppUrl.coffe).then(result=>{

            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {


                this.setState({myArray: result, loading: false,})
            }
        }).catch(error=>{

            this.setState({warning:true,loading:false})

        })
    }




    submitData=()=>{

         let firstname= document.getElementById('firstname').value ;
         let lastname= document.getElementById('lastname').value ;
         let email= document.getElementById('email').value ;
         let message= document.getElementById('message').value ;

         let jsonObject={firstname:firstname,lastname:lastname,email:email,message:message}

         RestClients.PostRequest(AppUrl.postdata,JSON.stringify(jsonObject)).then(result=>{
             alert(result)
         }).catch(error=>{
             alert("error")
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
                    <Container className="mt-5 mb-5">
                        <Row>
                            <Col lg={6} md={12} sm={12} className="imageClassCon ">

                                <img height="350px" className="mr-5 ml-5" width="80%"
                                     src="https://thumbs.dreamstime.com/z/cartoon-pizza-delivery-boy-riding-motor-bike-illustration-52776856.jpg"/>

                            </Col>

                            <Col lg={6} md={12} sm={12} className="text-center contactEdit mt-5">

                                <Form>
                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="firstname" className="nameClass" required
                                                          placeholder="First name" type="text"/>
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="lastname" className="nameClass" required
                                                          placeholder="Last name" type="text"/>
                                        </Form.Group>
                                    </Col>

                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="email" className="nameClass" required placeholder="Email"
                                                          type="email"/>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={12} md={12} sm={12} className="mb-3">
                                        <Form.Group>
                                            <Form.Control id="message" className="nameClass" required
                                                          placeholder="Your Message" as="textarea" rows="3"/>
                                        </Form.Group>
                                    </Col>


                                    <Col lg={12} md={12} sm={12} className="mb-3">

                                        <Button variant="primary" className="OrderButton" onClick={this.submitData}>
                                            Submit
                                        </Button>

                                    </Col>
                                </Form>

                            </Col>


                        </Row>

                    </Container>

                </Fragment>
            );
        }
    }
}

export default ContactSection;








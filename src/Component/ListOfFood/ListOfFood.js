import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons'
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";



class ListOfFood extends Component {


    constructor() {
        super();
        this.state={
            image1:"",
            name:"",
            regularprice:"",
            specialprice:"",

              image2:"",
            name2:"",
            regularprice2:"",
            specialprice2:"",
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
                image1:result[0]['image1'],
                  regularprice:result[0]['regularprice'],
                 specialprice:result[0]['specialprice'],
                 name:result[0]['name'],
                loading:false

            })}
        }).catch(error=>{
            this.setState({warning:true,loading:false})
        })

         RestClients.GetRequest(AppUrl.drinks).then(result=>{


             if (result==null){

                 this.setState({warning:true,loading:false})

             }

             else {
                 this.setState({
                     image2: result[0]['image2'],
                     regularprice2: result[0]['regularprice'],
                     specialprice2: result[0]['specialprice'],
                     name2: result[0]['name'],


                 })
             }
        }).catch(error=>{
            this.setState({warning:true,loading:false})
        })

         RestClients.GetRequest(AppUrl.coffe).then(result=>{
             if (result==null){

                 this.setState({warning:true,loading:false})

             }

             else {
                 this.setState({

                     image3: result[0]['image1'],
                     regularprice3: result[0]['regularprice'],
                     specialprice3: result[0]['specialprice'],
                     name3: result[0]['name'],


                 })
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
                        <Row className="marqueClass mr-5 ml-5">
                            <Col className=" pt-4 pb-0 marqueClassCol">
                                <marquee direction="left"> Today's Special Food Recipes</marquee>

                            </Col>


                        </Row>

                        <Row className="mt-5">

                            <Col className="mb-5 text-center" sm={12} md={6} lg={4}>
                                <Card className="projectCard">
                                    <img height="220px" className="imageClass mt-3" src={this.state.image1}/>
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">{this.state.name}</Card.Title>

                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faCheckCircle}/> </span>
                                        <span className="projectCardDes">Special Price :</span> <span
                                        className="MoneyProduct">{this.state.specialprice}Tk </span> <br/>


                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faNotesMedical}/> </span>
                                        <span className="projectCardDes">Regular Price : </span>
                                        <del><span className="MoneyProduct">{this.state.regularprice}Tk </span></del>

                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="mb-5 text-center" sm={12} md={6} lg={4}>
                                <Card className="projectCard">
                                    <img height="220px" className=" imageClass mt-3" src={this.state.image2}/>
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">{this.state.name2}</Card.Title>
                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faCheckCircle}/> </span>
                                        <span className="projectCardDes">Special Price :</span> <span
                                        className="MoneyProduct">{this.state.specialprice2}Tk </span> <br/>


                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faNotesMedical}/> </span>
                                        <span className="projectCardDes">Regular Price : </span>
                                        <del><span className="MoneyProduct">{this.state.regularprice2}Tk </span></del>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col className="mb-5 text-center" sm={12} md={6} lg={4}>
                                <Card className="projectCard">
                                    <img height="220px" className=" imageClass mt-3" src={this.state.image3}/>
                                    <Card.Body>
                                        <Card.Title className="projectCardTitle">{this.state.name3}</Card.Title>

                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faCheckCircle}/> </span>
                                        <span className="projectCardDes">Special Price :</span> <span
                                        className="MoneyProduct">{this.state.specialprice3}Tk </span> <br/>


                                        <span style={{color: "red"}}>  <FontAwesomeIcon icon={faNotesMedical}/> </span>
                                        <span className="projectCardDes">Regular Price : </span>
                                        <del><span className="MoneyProduct">{this.state.regularprice3}Tk </span></del>
                                    </Card.Body>
                                </Card>
                            </Col>


                        </Row>


                    </Container>
                </Fragment>
            );
        }

    }
}

export default ListOfFood;
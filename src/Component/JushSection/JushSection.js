import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class JushSection extends Component {

    constructor() {
        super();
        this.state={
            myArray:[],
            loading:true,
            warning:false ,
        }
    }

    componentDidMount() {

        RestClients.GetRequest(AppUrl.drinks).then(result=>{

            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {

                this.setState({myArray: result,loading:false})
            }
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


            let data = this.state.myArray;
            let allData = data.map(result => {
                return <Col lg={3} md={6} sm={12}>

                    <div>
                        <img variant="top" className="ImageClassOfFood" src={result.image2}/>
                        <Card.Body>
                            <Card.Title className="FastFoodDes">{result.name}</Card.Title>
                            <Card.Text className="FastFoodDes2">
                                {result.regularprice}
                            </Card.Text>


                            <Nav.Link> <NavLink exact to={"/SingleDrinkPage/"+result.id+"/"+result.name} className="btn2 mybutton">
                                Details
                            </NavLink> </Nav.Link>




                        </Card.Body>
                    </div>


                </Col>
            })

            return (
                <Fragment>

                    <h3 className="viewFoods mb-5 text-center">View Jush and Milkshek</h3>

                    <Container className="mb-5 mt-4 text-center">
                        <Row>

                            {allData}

                        </Row>

                    </Container>


                </Fragment>
            );
        }

    }
}

export default JushSection;
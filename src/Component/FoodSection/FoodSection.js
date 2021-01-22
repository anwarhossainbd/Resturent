import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class FoodSection extends Component {


    constructor() {
        super();
        this.state={
            myArray:[],
            loading:true,
            warning:false ,
        }
    }

    componentDidMount() {

        RestClients.GetRequest(AppUrl.foods).then(result=>{

            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {

                this.setState({myArray: result, loading: false})
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


            let data = this.state.myArray;
            let allData = data.map(result => {
                return <Col lg={3} md={6} sm={12}>

                    <div>
                        <img variant="top" className="ImageClassOfFood" src={result.image2}/>
                        <Card.Body>
                            <Card.Title className="FastFoodDes">{result.name}</Card.Title>
                            <Card.Text className="FastFoodDes2">
                                Price : {result.regularprice}
                            </Card.Text>


                            <Nav.Link> <NavLink exact to={"/SingleFoodPage/"+result.id+"/"+result.name} className="btn2 mybutton">
                                Details
                            </NavLink> </Nav.Link>


                        </Card.Body>
                    </div>


                </Col>
            })
            return (
                <Fragment>

                    <h3 className="viewFoods mb-5 text-center">View Fast Foods</h3>

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

export default FoodSection;
import React, {Component,Fragment} from 'react';
import {Container, Row,Col} from "react-bootstrap";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";
import TextLoading from "../TextLoading/TextLoading";


class Summery extends Component {


     constructor() {
        super();
        this.state={
            price:"",
            loading:true ,
            warning:false ,
        }
    }

    componentDidMount() {
        RestClients.GetRequest(AppUrl.homepage).then(result=>{
            if (result==null){

                this.setState({warning:true,loading:false})

            } else {
                this.setState({price: result[0]['tableprice'], loading: false})
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
                    <Container fluid={true} className="middleBanner p-0 m-0 ">
                        <div className="middleBannerOverlay p-0 m-0">
                            <Container>

                                <div className="cardOfSummery text-center">

                                    <span className="reservation">Reservation  </span> <br/>
                                    <span className="bookTable">  Book Your Table </span><br/>
                                    <span className="bookTable"> Only {this.state.price} Taka  </span><br/>

                                    <Nav.Link> <NavLink exact to="/Contact" className="btn2">
                                        Contact
                                    </NavLink>
                                    </Nav.Link>


                                </div>

                            </Container>
                        </div>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Summery;



/*<div className="cardOfSummery">

    <span className="reservation">Reservation  </span> <br/>
    <span className="bookTable">  Book Your Table </span><br/>
    <span className="bookTable"> Only {this.state.price} Taka  </span><br/>

    <Nav.Link> <NavLink exact to="/Contact" className="btn2">
        Contact
    </NavLink>
    </Nav.Link>


</div>*/

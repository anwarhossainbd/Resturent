import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

import {NavLink} from "react-router-dom"
import axios from "axios";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import TextLoading from "../TextLoading/TextLoading";



class TopBanner extends Component {

     constructor() {
        super();
        this.state={
            text:"",
            loaderclass:"d-block"
        }
    }

    componentDidMount() {
        RestClients.GetRequest(AppUrl.homepage).then(result=>{
            this.setState({text:result[0]['hometitle'],    loaderclass:"d-none"})

        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
               <Container fluid={true} className="topFixedBanner p-0 m-0 ">
                   <div className="topBannerOverlay p-0 m-0">
                       <Container>
                               <Row>
                                   <Col lg={6} md={6} sm={12} className="topContent">

                                      <div className="marginFooter">
                                           <h2 className="topContentTitle"> <b>Fast Food House </b></h2>
                                       <p className="topSubtitle text-justify">

                                           <span className={this.state.loaderclass}> <TextLoading></TextLoading></span>
                                           {this.state.text}
                                       </p>

                                     <div >
                                          <Nav.Link>  <NavLink exact to="/Foods" className="btn">
                                         View Menu
                                         </NavLink> </Nav.Link>




                                     </div>
                                      </div>

                                   </Col>
                               </Row>
                       </Container>
                   </div>
               </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
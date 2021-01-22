import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faPlayCircle,} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faYoutube,faTwitter} from "@fortawesome/free-brands-svg-icons";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import TextLoading from "../TextLoading/TextLoading";
import WentWrong from "../WentWrong/WentWrong";



class Footer extends Component {

    constructor() {
        super();
        this.state={
             house:"",
            road:"",
            area:"",
            thana:"",
            district:"",
            day1time:"",
            day2time:"",
            day3time:"",
            day4time:"",
            mobile:"",
            facebook:"",
             youtube:"",
            email:"",
            twitter:"",
            loaderclass:"d-block",
            warning:false ,
        }
    }


    componentDidMount() {
        RestClients.GetRequest(AppUrl.footer).then(result=>{


            if (result==null){

                this.setState({warning:true,loading:false})

            }

            else {

            this.setState({
                house:result[0]['house'],
                 road:result[0]['road'],
                 area:result[0]['area'],
                 thana:result[0]['thana'],
                 district:result[0]['district'],

                day1time:result[0]['day1time'],
                 day2time:result[0]['day2time'],
                 day3time:result[0]['day3time'],
                 day4time:result[0]['day4time'],


                  mobile:result[0]['mobile'],
                 facebook:result[0]['facebook'],
                 youtube:result[0]['youtube'],
                 email:result[0]['email'],
                 twitter:result[0]['twitter'],

                loaderclass:"d-none"




            })}


        }).catch(error=>{

            this.setState({warning:true,loading:false})

        })
    }


    render() {

        if (this.state.warning == true) {

            return <WentWrong></WentWrong>
        } else {

            return (
                <Fragment>
                    <Container fluid={true}>
                        <Row className="desinOfFooter">

                            <Col lg={4} md={6} sm={12} className="mt-5 mb-5">
                                <span className={this.state.loaderclass}> <TextLoading></TextLoading></span>

                                <h4 className="footerAddress">Address</h4>
                                <span
                                    className="footerAddress2">House No:{this.state.house} Road No:{this.state.road}</span><br/>
                                <span className="footerAddress2"> {this.state.area} ,{this.state.thana}</span><br/>
                                <span className="footerAddress2"> {this.state.district}</span><br/>

                                <hr color="white" className="w-50 footerAddress2" align="center"/>

                            </Col>

                            <Col lg={4} md={6} sm={12} className="mt-5 mb-5">

                                <span className={this.state.loaderclass}> <TextLoading></TextLoading></span>

                                <h4 className="footerAddress11">Opening Time</h4>
                                <span
                                    className="footerAddress22">Saturday - Wednesday {this.state.day1time} AM - {this.state.day2time} PM</span><br/>
                                <span
                                    className="footerAddress22"> Thursday {this.state.day3time} AM - {this.state.day4time} PM</span><br/>
                                <span className="footerAddress22"> Friday Off</span><br/>
                                <hr color="white" className="w-50 footerAddress22" align="center"/>


                            </Col>

                            <Col lg={4} md={6} sm={12} className="mt-5 mb-5 ">

                                <span className={this.state.loaderclass}> <TextLoading></TextLoading></span>

                                <h4 className="footerAddress">Our Information</h4>
                                <span className="footerAddress2">Feet good,keep good</span><br/>
                                <span className="footerAddress2"> <FontAwesomeIcon icon={faPhone}/> {this.state.mobile}</span><br/>
                                <span className="footerAddress5">

                                <a target="_blank" className="footerUrl"
                                   href={"//" + this.state.facebook}> <FontAwesomeIcon icon={faFacebook}/>&nbsp; </a>
                                <a target="_blank" className="footerUrl"
                                   href={"//" + this.state.youtube}>  <FontAwesomeIcon icon={faYoutube}/>&nbsp; </a>
                                <a target="_blank" className="footerUrl"
                                   href={"//" + this.state.email}>  <FontAwesomeIcon icon={faEnvelope}/>&nbsp; </a>
                                <a target="_blank" className="footerUrl"
                                   href={"//" + this.state.twitter}>  <FontAwesomeIcon icon={faTwitter}/> </a>






                            </span><br/>

                                <hr color="white" className="w-50 footerAddress2" align="center"/>


                            </Col>
                            <hr color="white" className="w-100 " align="center"/>
                            <Container fluid={true} className="text-center copyrightSection">
                                <br/>
                                <span className="copyrightLink" href="#">MD.Anwar Hossain &copy; 2019-2020</span>
                                <br/>
                                <br/>
                            </Container>


                        </Row>

                    </Container>

                </Fragment>
            );
        }
    }
}

export default Footer;
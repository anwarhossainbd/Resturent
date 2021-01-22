import React, {Component,Fragment} from 'react';
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RestClients from "../../RestApi/RestClients";
import AppUrl from "../../RestApi/AppUrl";
import Loader from "../Loader/Loader";
import WentWrong from "../WentWrong/WentWrong";

class ClientReviews extends Component {

    constructor() {
        super();
        this.state={
            myArray:[],
            loading:true,
            warning:false ,
        }
    }

    componentDidMount() {
        RestClients.GetRequest(AppUrl.clientreview).then(result=>{

            if (result==null){

                this.setState({warning:true,loading:false})

            } else {

                this.setState({myArray: result, loading: false})
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
            let myData = data.map(result => {
                return <div className="text-center">

                    <img className="circuleImage " src={result.sliderimage}/>
                    <p className="courseTitle mt-4 mb-5">{result.comment}</p>

                </div>
            })


            const settings = {
                autoplay: true,
                autoplaySpeed: 1500,
                dots: true,
                vertical: true,
                verticalSwiping: true,
                infinite: true,
                speed: 1500,
                slidesToShow: 1,
                slidesToScroll: 1,


                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            initialSlide: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            };


            return (
                <Fragment>


                    <Container>
                        <h1 className=" headerTitleT mb-5 text-center mt-5">Client Says</h1>

                        <Row className="justify-content-center mt-5">

                            <Col className="text-center " lg={12} sm={12} md={12}>

                                <Slider {...settings}>

                                    {myData}


                                </Slider>


                            </Col>


                        </Row>
                    </Container>


                </Fragment>
            );
        }

    }
}

export default ClientReviews;
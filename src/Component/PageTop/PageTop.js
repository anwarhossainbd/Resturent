import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";


class PageTop extends Component {




    render() {
        return (
            <Fragment>
                <Container fluid={true} className="pageTopImage mt-5 mb-5">
                    <Row>
                        <Col className="NameChange text-center">
                            <div className="NameChange2">
                                     {this.props.name}
                            </div>

                        </Col>
                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default PageTop;
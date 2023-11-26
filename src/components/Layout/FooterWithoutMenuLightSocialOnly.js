import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

class FooterWithoutMenuLightSocialOnly extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <footer className={"footer footer-bar " + this.props.className}>
                    <div className="footer-py-30">
                        <Container className="text-center">
                            <Row className="align-items-center">
                                <Col sm="6">
                                    <div className="text-sm-start">
                                        <p className="mb-0">
                                            © {(new Date().getFullYear())} Andalusian Homes.
                                        </p>
                                    </div>
                                </Col>

                                <Col sm="6" className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <ul className="list-unstyled social-icon foot-social-icon text-sm-end mb-0">
                                        <li className="list-inline-item mb-0">
                                            <Link to="#" className="rounded">
                                                <FeatherIcon
                                                    icon="facebook"
                                                    className="fea icon-sm fea-social"
                                                />
                                            </Link>
                                        </li>
                                        {" "}
                                        <li className="list-inline-item mb-0">
                                            <Link to="#" className="rounded">
                                                <FeatherIcon
                                                    icon="instagram"
                                                    className="fea icon-sm fea-social"
                                                />
                                            </Link>
                                        </li>
                                        {" "}
                                        <li className="list-inline-item mb-0">
                                            <Link to="#" className="rounded">
                                                <FeatherIcon
                                                    icon="linkedin"
                                                    className="fea icon-sm fea-social"
                                                />
                                            </Link>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default FooterWithoutMenuLightSocialOnly;

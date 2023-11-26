import React from "react";
import {Card, Col, Container, Row} from "reactstrap";
import {Link} from "react-router-dom";
import {teamMembers} from "../../common/base-data";

//Import Icons
import FeatherIcon from "feather-icons-react";

const TeamMembers = () => {
    return (
        <React.Fragment>
            <Container className="">
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className="section-title pb-2 text-center">
                            <h4 className="title mb-4">Team Members</h4>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    {teamMembers.map((members, key) => (
                        <Col lg={2} md={6} className="pt-2" key={key}>
                            <Card
                                className="team text-center border-0"
                            >
                                <div className="position-relative">
                                    <img
                                        src={members.img}
                                        className="img-fluid"
                                        alt={members.name}
                                    />
                                    <ul className="list-unstyled mb-0 team-icon">
                                        <li className="list-inline-item ms-1">
                                            <Link to={members.linkedin}
                                                  className="btn btn-primary btn-pills btn-sm btn-icon">
                                                <i>
                                                    <FeatherIcon
                                                        icon="linkedin"
                                                        className="fea icon-sm fea-social"
                                                    />
                                                </i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body py-3 px-0 content">
                                    <h5 className="mb-0">
                                        <Link to="#" className="name text-dark">
                                            {members.name}
                                        </Link>
                                    </h5>
                                    <small className="designation text-muted">
                                        {members.position}
                                    </small>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </React.Fragment>
    );
};
export default TeamMembers;


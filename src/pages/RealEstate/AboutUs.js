import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Card,
    CardBody,
    Col,
    Container,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    Row,
    FormFeedback
} from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

import medical from "../../assets/images/medical/cta.jpg";

// Formik Validation
import * as Yup from "yup";
import {useFormik} from "formik";
import SectionTitle from "../../components/Shared/SectionTitle";

const AboutUs = () => {
    const [modal, setModal] = useState(false);

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is required"),
            password: Yup.string().required("Please Enter Password")
        }),
        onSubmit: (values) => {
            // console.log(values)
        }
    });
    return (
        <React.Fragment>
            <section className="section" id="aboutUsSection">
                <Container>
                    <SectionTitle
                        title="About Us"
                        desc=""
                    />
                    <Row>
                        <Col>
                            <Card
                                className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
                            >
                                <span className="h1 icon2 text-primary">
                                  <i className="uil uil-key-skeleton"></i>
                                </span>
                                <CardBody className="p-0 content">
                                    <h5>The way we work</h5>
                                    <p className="para text-muted mb-0">
                                        From inquiry to purchase of real estate.
                                        Step by step – how does it look?.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <Card
                                className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
                            >
                                <span className="h1 icon2 text-primary">
                                  <i className="uil uil-phone-volume"></i>
                                </span>
                                <CardBody className="p-0 content">
                                    <h5>Our services</h5>
                                    <p className="para text-muted mb-0">
                                        Everything you need to maintain your new home just the way you like
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <Card
                                className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
                            >
                                <span className="h1 icon2 text-primary">
                                  <i className="uil uil-graduation-cap"></i>
                                </span>
                                <CardBody className="p-0 content">
                                    <h5>Spanish lawyer</h5>
                                    <p className="para text-muted mb-0">
                                        Why hiring a Spanish lawyer is a good idea?
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <Card
                                className=" features fea-primary rounded p-4 bg-white position-relative overflow-hidden border-0"
                            >
                                <span className="h1 icon2 text-primary">
                                  <i className="uil uil-money-stack"></i>
                                </span>
                                <CardBody className="p-0 content">
                                    <h5>Investment trip</h5>
                                    <p className="para text-muted mb-0">
                                        Offer for groups of investors, sports enthusiasts and various interests. We'll
                                        tailor it to your needs!
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
};
export default AboutUs;

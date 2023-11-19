// React Basic and Bootstrap
import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import Counter2 from "../../components/Shared/counter2";

import Asset190 from "../../assets/images/illustrator/Asset190.svg";
import Asset189 from "../../assets/images/illustrator/Asset189.svg";
import Asset186 from "../../assets/images/illustrator/Asset186.svg";
import Asset187 from "../../assets/images/illustrator/Asset187.svg";

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: [
                {
                    id: 1,
                    icon: 'uil uil-edit-alt h2 text-primary',
                    title: "Design & Development",
                    description:
                        "Nisi aenean vulputate eleifend tellus vitae eleifend enim a eleifend Aliquam aenean elementum semper.",
                },
                {
                    id: 2,
                    icon: 'uil uil-vector-square h2 text-primary',
                    title: "Management & Marketing",
                    description:
                        "Allegedly, a Latin scholar established the origin of the text established by compiling unusual word.",
                },
                {
                    id: 3,
                    icon: 'uil uil-file-search-alt h2 text-primary',
                    title: "Stratagy & Research",
                    description:
                        "It seems that only fragments of the original text remain in the Lorem the original Ipsum texts used today.",
                },
            ],
            features_Line: [
                {title: "Digital Marketing Solutions for Tomorrow"},
                {title: "Our Talented & Experienced Marketing Agency"},
                {title: "Create your own skin to match your brand"},
            ],
            counters: [
                {
                    title: "Investment",
                    image: Asset190,
                    start: 11000,
                    value: 45000,
                    postfix: "$",
                },
                {title: "Awards", image: Asset189, start: 0, value: 9, postfix: "+"},
                {
                    title: "Profitability",
                    image: Asset186,
                    start: 12050,
                    value: 48002,
                    postfix: "$",
                },
                {title: "Growth", image: Asset187, start: 0, value: 11, postfix: "%"},
            ],
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal() {
        this.setState({isOpen: true});
    }

    componentDidMount() {
        var featureboxes = document.getElementsByName("featurebox");
        for (var i = 0; i < featureboxes.length; i++) {
            featureboxes[i].classList.add("mt-5");
        }
    }

    render() {
        return (
            <React.Fragment>
                <section className="section">
                    <Container className="mt-0 mt-0">
                        <Row className="justify-content-center">
                            <Col xs="12" className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">
                                        See everything about your{" "}
                                        <span className="text-primary">Landrick</span>
                                    </h4>
                                    <p className="text-muted para-desc mx-auto mb-0">
                                        Start working with{" "}
                                        <span className="text-primary fw-bold">
                      Landrick
                    </span>{" "}
                                        that can provide everything you need to generate awareness,
                                        drive traffic, connect.
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row id="counter">
                            {/* counter */}
                            <Counter2 counters={this.state.counters}/>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Features;

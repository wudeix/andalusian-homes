// React Basic and Bootstrap
import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";

import Counter2 from "../../components/Shared/counter2";

import Asset190 from "../../assets/images/illustrator/Asset190.svg";

class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                {
                    title: "Property Offers",
                    image: Asset190,
                    start: 9650,
                    value: 9700,
                    postfix: "+"
                },
                {
                    title: "Apartments",
                    image: Asset190,
                    start: 4200,
                    value: 4500,
                    postfix: "+"
                },
                {
                    title: "Villas",
                    image: Asset190,
                    start: 4900,
                    value: 5000,
                    postfix: "+"
                },
                {
                    title: "Plots Of Land",
                    image: Asset190,
                    start: 900,
                    value: 1000,
                    postfix: "+"
                },
                {
                    title: "New Developments",
                    image: Asset190,
                    start: 250,
                    value: 300,
                    postfix: "+"
                },
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
                <section className="section bg-light">
                    <Container className="mt-0 mt-0">
                        <Row xs="12" className="justify-content-center">
                            <Col className="text-center">
                                <div className="section-title mb-4 pb-2">
                                    <h4 className="title mb-4">
                                        We have access to 99% of all property sales offers on the Coast
                                    </h4>
                                </div>
                            </Col>
                        </Row>
                        <Row id="counter" className="justify-content-center">
                            {/* counter */}
                            <Counter2 counters={this.state.counters}/>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Statistics;

import React, {Component} from "react";
import {Row, Col} from "reactstrap";

class SectionTitle extends Component {
    render() {
        return (
            <React.Fragment>
                <Row className="justify-content-center">
                    <Col className={this.props.isLeft ? "" : "col-12 text-center"}>
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4"> {this.props.title}</h4>
                            <p
                                className={
                                    this.props.isLeft
                                        ? "text-muted para-desc mb-0"
                                        : "text-muted para-desc mb-0 mx-auto"
                                }
                                name="sectiondesc"
                            >
                                {this.props.desc}
                            </p>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default SectionTitle;

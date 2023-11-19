import React, {Component} from "react";

import BackgroundSlider from "react-background-slider";

import bg01 from "../../assets/images/real-estates/home/img-1.jpg";
import bg02 from "../../assets/images/real-estates/home/img-2.jpg";
import bg03 from "../../assets/images/real-estates/home/img-3.jpg";
import bg04 from "../../assets/images/real-estates/home/img-4.jpg";
import bg05 from "../../assets/images/real-estates/home/img-5.jpg";
import bg06 from "../../assets/images/real-estates/home/img-6.jpg";
import bg07 from "../../assets/images/real-estates/home/img-7.jpg";
import bg08 from "../../assets/images/real-estates/home/img-8.jpg";
import bg09 from "../../assets/images/real-estates/home/img-9.jpg";
import bg10 from "../../assets/images/real-estates/home/img-10.jpg";
import bg11 from "../../assets/images/real-estates/home/img-11.jpg";
import bg12 from "../../assets/images/real-estates/home/img-12.jpg";
import bg13 from "../../assets/images/real-estates/home/img-13.jpg";
import bg14 from "../../assets/images/real-estates/home/img-14.jpg";
import bg15 from "../../assets/images/real-estates/home/img-15.jpg";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [bg01, bg02, bg03, bg04, bg05, bg06, bg07, bg08, bg09, bg10, bg11, bg12, bg13, bg14, bg15],
        };
    }

    render() {
        return (
            <React.Fragment>
                <section className="bg-half-260 d-table w-100">
                    <BackgroundSlider
                        images={this.state.items}
                        duration={10}
                        transition={2}
                    />
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row mt-5 justify-content-center">
                            <div className="col-12">
                                <div className="title-heading text-center">
                                    <h4 className="display-4 fw-bold text-white title-dark mb-3">
                                        Find your new home in Andalusia
                                    </h4>
                                    <p className="home-text para-desc text-white-50 mb-0 mx-auto">
                                        Almost 10,000 property offers on the Costa Del Sol.
                                        From Malaga to Gibraltar: Benalmadena, Fuengirolla, Marbella, Estepona and
                                        Manilva
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

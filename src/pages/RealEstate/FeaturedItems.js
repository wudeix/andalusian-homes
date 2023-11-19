// React Basic and Bootstrap
import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Images
import product1 from "../../assets/images/real/p1.jpg";
import product2 from "../../assets/images/real/p2.jpg";
import product3 from "../../assets/images/real/p3.jpg";
import product4 from "../../assets/images/real/p4.jpg";
import product5 from "../../assets/images/real/p5.jpg";
import product6 from "../../assets/images/real/p6.jpg";
import product7 from "../../assets/images/real/p7.jpg";
import product8 from "../../assets/images/real/p8.jpg";
import SectionTitle from "../../components/Shared/SectionTitle";

import img01 from "../../assets/images/real-estates/offers/01/1.jpg";
import img02 from "../../assets/images/real-estates/offers/02/2.jpg";
import img03 from "../../assets/images/real-estates/offers/03/3.jpg";
import img04 from "../../assets/images/real-estates/offers/04/4.jpg";
import img05 from "../../assets/images/real-estates/offers/05/5.jpg";
import img06 from "../../assets/images/real-estates/offers/06/6.jpg";
import img07 from "../../assets/images/real-estates/offers/07/7.jpg";


class FeaturedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems: [
                //id must required
                {id: 1, name: "Landrick", link: "/index"},
                {id: 2, name: "Shop", link: "#"},
                {id: 3, name: "Product Details"},
            ],
            products: [
                {
                    id: 1,
                    image: img01,
                },
                {
                    id: 2,
                    image: img02,
                },
                {
                    id: 3,
                    image: img03,
                    name: "Elegent Watch",
                    price: "5.00",
                    desc: "30% off",
                },
                {
                    id: 4,
                    image: img04,
                },
                {
                    id: 5,
                    image: img05,
                    name: "Earphones",
                    price: "3.00",
                },
                {
                    id: 6,
                    image: img06,
                },
                {
                    id: 7,
                    image: img07,
                    name: "Sony Headphones",
                    price: "9.99",
                    desc: "20% off",
                }
            ],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                1000: {
                    items: 4,
                },
            },
            nav1: null,
            nav2: null,
            items: 1,
        };
        this.addItem.bind(this);
        this.removeItem.bind(this);
    }

    addItem = () => {
        this.setState({items: this.state.items + 1});
    };

    removeItem = () => {
        if (this.state.items > 1) {
            this.setState({items: this.state.items - 1});
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2,
        });
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        const navBar = document.getElementById("topnav");
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (navBar != null) {
            if (top > 80) {
                navBar.classList.add("nav-sticky");
            } else {
                navBar.classList.remove("nav-sticky");
            }
        }
    };

    render() {
        const settings2 = {
            dots: false,
            infinite: true,
            autoplaySpeed: 2000,
            autoplay: true,
            slidesToShow: 4,
            slidesToScroll: 2,
        };
        return (
            <React.Fragment>
                <Container>
                    <Row className="align-items-center">
                        <SectionTitle
                            title="The latest offers of new developments - only selected ones"
                            desc="For more, contact us!"
                        />
                        <Col lg={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div id="two-testi" className="owl-carousel owl-theme">
                                <Slider {...settings2} className="owl-carousel owl-theme">
                                    {this.state.products.map((product, key) => (
                                        <div key={key} style={{marginLeft: 5, marginRight: 5}}>
                                            <Card
                                                className="shop-list border-0 shadow position-relative overflow-hidden m-3">
                                                <div className="shop-image position-relative overflow-hidden shadow">
                                                    <Link to="#">
                                                        <img
                                                            src={product.image}
                                                            className="img-fluid"
                                                            alt="Landrick"
                                                        />
                                                    </Link>
                                                    <ul className="list-unstyled shop-icons">
                                                        <li className="list-inline-item me-1">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-icon btn-pills btn-primary"
                                                            >
                                                                <i className="uil uil-home icons"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item me-1">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-icon btn-pills btn-primary"
                                                            >
                                                                <i className="uil uil-heart icons"></i>
                                                            </Link>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <Link
                                                                to="#"
                                                                className="btn btn-icon btn-pills btn-primary"
                                                            >
                                                                <i className="uil uil-camera icons"></i>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <CardBody className="content p-4">
                                                    <Link to="#" className="text-dark product-name h6">
                                                        Luxury Apartment In chelsea
                                                    </Link>
                                                    <ul className="list-unstyled text-muted mt-2 mb-0">
                                                        <li className="list-inline-item me-3">
                                                            <i className="uil uil-bed"></i>1 Bed
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <i className="uil uil-bath"></i>1 Bath
                                                        </li>
                                                    </ul>
                                                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                                        <li className="list-inline-item">
                                                            <b>$ 44000</b>
                                                        </li>
                                                        <li className="list-inline-item text-muted">
                                                            $ 850 / sqft
                                                        </li>
                                                    </ul>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default FeaturedItems;

// React Basic and Bootstrap
import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../../components/Shared/SectionTitle";
import _01_img_01 from "../../assets/images/real-estates/offers01/1/1.jpg";
import _01_img_02 from "../../assets/images/real-estates/offers01/1/2.jpg";
import _01_img_03 from "../../assets/images/real-estates/offers01/1/3.jpg";
import _01_img_04 from "../../assets/images/real-estates/offers01/1/4.jpg";
import _01_img_05 from "../../assets/images/real-estates/offers01/1/5.jpg";
import _01_img_06 from "../../assets/images/real-estates/offers01/1/6.jpg";
import _01_img_07 from "../../assets/images/real-estates/offers01/1/7.jpg";
import _01_img_08 from "../../assets/images/real-estates/offers01/1/8.jpg";
import _01_img_09 from "../../assets/images/real-estates/offers01/1/9.jpg";
import _01_img_10 from "../../assets/images/real-estates/offers01/1/10.jpg";
import _01_img_11 from "../../assets/images/real-estates/offers01/1/11.jpg";

import _02_img_01 from "../../assets/images/real-estates/offers01/2/1-kopia.jpg";
import _02_img_02 from "../../assets/images/real-estates/offers01/2/2-kopia.jpg";
import _02_img_03 from "../../assets/images/real-estates/offers01/2/3-kopia.jpg";
import _02_img_04 from "../../assets/images/real-estates/offers01/2/4-kopia.jpg";
import _02_img_05 from "../../assets/images/real-estates/offers01/2/5-kopia.jpg";
import _02_img_06 from "../../assets/images/real-estates/offers01/2/6-kopia.jpg";
import _02_img_07 from "../../assets/images/real-estates/offers01/2/7-kopia.jpg";

import _03_img_01 from "../../assets/images/real-estates/offers01/3/1.jpg";
import _03_img_02 from "../../assets/images/real-estates/offers01/3/2.jpg";
import _03_img_03 from "../../assets/images/real-estates/offers01/3/3.jpg";
import _03_img_04 from "../../assets/images/real-estates/offers01/3/4.jpg";

import _04_img_01 from "../../assets/images/real-estates/offers01/4/1.jpg";
import _04_img_02 from "../../assets/images/real-estates/offers01/4/2.jpg";
import _04_img_03 from "../../assets/images/real-estates/offers01/4/3.jpg";
import _04_img_04 from "../../assets/images/real-estates/offers01/4/4.jpg";
import _04_img_05 from "../../assets/images/real-estates/offers01/4/5.jpg";
import _04_img_06 from "../../assets/images/real-estates/offers01/4/6.jpg";
import _04_img_07 from "../../assets/images/real-estates/offers01/4/7.jpg";
import _04_img_08 from "../../assets/images/real-estates/offers01/4/8.jpg";
import _04_img_09 from "../../assets/images/real-estates/offers01/4/9.jpg";
import _04_img_10 from "../../assets/images/real-estates/offers01/4/10.jpg";

import _05_img_2 from "../../assets/images/real-estates/offers01/5/2.jpg";
import _05_img_3 from "../../assets/images/real-estates/offers01/5/3.jpg";
import _05_img_4 from "../../assets/images/real-estates/offers01/5/4.jpg";
import _05_img_5 from "../../assets/images/real-estates/offers01/5/5.jpg";
import _05_img_6 from "../../assets/images/real-estates/offers01/5/6.jpg";
import _05_img_7 from "../../assets/images/real-estates/offers01/5/7.jpg";
import _05_img_8 from "../../assets/images/real-estates/offers01/5/8.jpg";
import _05_img_9 from "../../assets/images/real-estates/offers01/5/9.jpg";
import _05_img_11 from "../../assets/images/real-estates/offers01/5/11.jpg";
import _05_img_12 from "../../assets/images/real-estates/offers01/5/12.jpg";
import _05_img_13 from "../../assets/images/real-estates/offers01/5/13.jpeg";

class FeaturedItems01 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    images: [_01_img_01, _01_img_02, _01_img_03, _01_img_04, _01_img_05, _01_img_06, _01_img_07, _01_img_08, _01_img_09, _01_img_10, _01_img_11],
                    title: 'Villa in Estepona',
                    price: '980.400',
                    bedrooms: [3, 4],
                    bathrooms: [2, 3],
                    swimmingPool: true,
                    description: 'Project of just 18 luxury villas, situated in Estepona and offering views towards the sea and the surrounding golf courses.\n' +
                        'The properties offer spacious gardens and your own swimming pool, spacious and bright interiors and modern style with high-quality finishing and materials used.\n' +
                        'Generous bedrooms and bathrooms are bright and roomy, warm and comfortable. The modern kitchen and living room merge to form a large, bright space, while large windows lead you out to your private terrace and garden.\n' +
                        'Being so close to Estepona, you are not far from all the amenities you could need, including bars/cafes, shops, banks, health care, schools, and of course, the wonderful beaches of the Costa del Sol.'
                },
                {
                    id: 2,
                    images: [_02_img_01, _02_img_02, _02_img_03, _02_img_04, _02_img_05, _02_img_06, _02_img_07],
                    title: 'Villas in Nueva Andalucía',
                    price: '6.900.000',
                    bedrooms: [6],
                    bathrooms: [5],
                    swimmingPool: true,
                    description: 'Villas are located in one the most prominent and prestigious parts of the Costa del Sol – Nueva Andalucia, Marbella. The gated and secured community is only a short stroll away from the famous and exclusive port of Puerto Banús, where you will find luxury shopping at every turn as well as high end restaurants and cafes.\n' +
                        'The development consists of 8 luxurious villas in total, which all come with 6 bedrooms and 5 bathrooms spread over 3 levels, with two extra guest bathrooms. The ground floor boasts a modern open floor design and it’s perfectly constructed for entertaining guests. Other unique features include an extremely generous garage that fits 6 cars, a large private pool, and a spacious outdoor entertainment area. The lavish villas are perfect for families looking to relax and socialise in a peaceful location.\n' +
                        'The fantastic thing about Marbella is that there simply is something for everyone. Whether you are a sports enthusiast or looking to have a peaceful lifestyle under the sun all year around, you can easily have the best of both worlds with this incredible property. The private villas are also within walking distance to all the amenities you could ever need including the beach.'
                },
                {
                    id: 3,
                    images: [_03_img_01, _03_img_02, _03_img_03, _03_img_04],
                    title: 'Villas in Estepona',
                    price: '1.950.000',
                    bedrooms: [4, 5],
                    bathrooms: [5],
                    swimmingPool: true,
                    description: 'Collection of luxury villas with an elaborate and sustainable architecture, homes that offer a harmonious ensemble creating practical and respectful homes. All the villas are independent, providing the necessary privacy for each family.\n' +
                        'The villas have been designed in a respectful way with the environment, and at the same time with a harmonious concept and in accordance with the Mediterranean lifestyle; All the houses have 4 or 5 bedrooms, with a built area between 200 and 275 m2, as well as large basements and terraces. The plot area is between 520 and 850 m2.'
                },
                {
                    id: 4,
                    images: [
                        _04_img_01, _04_img_02, _04_img_03, _04_img_04, _04_img_05,
                        _04_img_06, _04_img_07, _04_img_08, _04_img_09, _04_img_10
                    ],
                    title: 'Villas in Benavavis',
                    price: '1.850.000',
                    bedrooms: [3],
                    bathrooms: [3],
                    swimmingPool: true,
                    description: 'This project is about everything that is “almost perfect”, what is right for you: neither excessive nor restricted. 21st century homes designed with the best qualities by the prestigious González & Jacobson architecture studio, with the perfect mix between modernity and the essence of noble materials creating sustainable homes and in direct contact with nature. 13 exceptional luxury villas designed with the best materials, ecological homes in close contact with nature in Benahavís. BREEAM certification for building sustainability, the highest accolade in the world.'
                },
                {
                    id: 5,
                    images: [
                        _05_img_2, _05_img_3, _05_img_4, _05_img_5, _05_img_6,
                        _05_img_7, _05_img_8, _05_img_9, _05_img_11,
                        _05_img_12, _05_img_13
                    ],
                    title: 'Villas in LA Cala dd Mijas',
                    price: '1.680.000',
                    bedrooms: [3],
                    bathrooms: [3],
                    swimmingPool: true,
                    description: 'This project consists of 19 luxury homes located in lush Mediterranean gardens in the La Cala de Mijas area.\n' +
                        'The properties offer high standards of living with sensational features including large, spacious open plan layouts, along with excellent community facilities.\n' +
                        'Close to the Calanova golf course, it is a short drive from the beach and all services. The airport is just 20 minutes away and the famous city of Marbella just 20 minutes in the other direction.\n' +
                        'Each of these luxury villas has its own private pool located in its private garden with a seating area for relaxing or entertaining. In addition, the complex has a spa, gym, jacuzzi, sauna and Turkish bath. Other common areas of this exclusive development include a cinema.\n' +
                        'The homes have 3 or 4 bedrooms, all with private bathrooms. They sit on generous 460m² plots, all visible through large floor-to-ceiling windows. Underfloor heating is also included as standard. The fully equipped, state-of-the-art kitchens feature premium designs with impeccable finishes.'
                },
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

    addItem() {
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
                            title="Selected new villa developments"
                            desc=""
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
                                                            src={product.images[0]}
                                                            className="img-fluid"
                                                            alt="property-image"
                                                            height={600}
                                                        />
                                                    </Link>
                                                </div>
                                                <CardBody className="content p-4">
                                                    <Link to="#" className="text-dark product-name h6">
                                                        {product.title}
                                                    </Link>
                                                    <ul className="list-unstyled text-muted mt-2 mb-0">
                                                        <li className="list-inline-item me-3">
                                                            <i className="uil uil-bed"></i>{' '}
                                                            {
                                                                product.bedrooms.map((bed, index) => {
                                                                    let returnedText = bed + ', ';

                                                                    if ((index + 1) === product.bedrooms.length) {
                                                                        returnedText = bed;
                                                                    }
                                                                    return (returnedText);
                                                                })
                                                            }
                                                        </li>
                                                        <li className="list-inline-item me-3">
                                                            <i className="uil uil-bath"></i>{' '}
                                                            {
                                                                product.bathrooms.map((bath, index) => {
                                                                    let returnedText = bath + ', ';

                                                                    if ((index + 1) === product.bathrooms.length) {
                                                                        returnedText = bath;
                                                                    }
                                                                    return (returnedText);
                                                                })
                                                            }
                                                        </li>
                                                        {
                                                            product.swimmingPool
                                                                ? (
                                                                    <li className="list-inline-item">
                                                                        <i className="uil uil-swimmer"></i>
                                                                        {' '}Pool
                                                                    </li>
                                                                )
                                                                : ''
                                                        }
                                                    </ul>
                                                    <ul className="list-unstyled d-flex justify-content-between mt-2 mb-0">
                                                        <li className="list-inline-item">
                                                            <b>{product.price} €</b>
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

export default FeaturedItems01;

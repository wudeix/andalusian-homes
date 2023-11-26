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
import _01_img_01 from "../../assets/images/real-estates/offers02/1/1.png";
import _01_img_02 from "../../assets/images/real-estates/offers02/1/2.png";
import _01_img_03 from "../../assets/images/real-estates/offers02/1/3.png";
import _01_img_04 from "../../assets/images/real-estates/offers02/1/4.png";
import _01_img_05 from "../../assets/images/real-estates/offers02/1/5.png";
import _01_img_06 from "../../assets/images/real-estates/offers02/1/6.jpeg";
import _01_img_07 from "../../assets/images/real-estates/offers02/1/7.png";
import _01_img_08 from "../../assets/images/real-estates/offers02/1/8.png";
import _01_img_09 from "../../assets/images/real-estates/offers02/1/9.png";
import _01_img_10 from "../../assets/images/real-estates/offers02/1/10.png";
import _01_img_11 from "../../assets/images/real-estates/offers02/1/11.png";
import _01_img_12 from "../../assets/images/real-estates/offers02/1/12.jpg";
import _01_img_13 from "../../assets/images/real-estates/offers02/1/13.jpg";

import _02_img_01 from "../../assets/images/real-estates/offers02/2/1.png";
import _02_img_02 from "../../assets/images/real-estates/offers02/2/2.png";
import _02_img_03 from "../../assets/images/real-estates/offers02/2/3.png";
import _02_img_04 from "../../assets/images/real-estates/offers02/2/4.png";
import _02_img_05 from "../../assets/images/real-estates/offers02/2/5.png";
import _02_img_06 from "../../assets/images/real-estates/offers02/2/6.png";
import _02_img_07 from "../../assets/images/real-estates/offers02/2/7.png";
import _02_img_08 from "../../assets/images/real-estates/offers02/2/8.png";
import _02_img_09 from "../../assets/images/real-estates/offers02/2/9.png";

import _03_img_01 from "../../assets/images/real-estates/offers02/3/1.png";
import _03_img_02 from "../../assets/images/real-estates/offers02/3/2.png";
import _03_img_03 from "../../assets/images/real-estates/offers02/3/3.png";
import _03_img_04 from "../../assets/images/real-estates/offers02/3/4.png";
import _03_img_05 from "../../assets/images/real-estates/offers02/3/5.png";
import _03_img_06 from "../../assets/images/real-estates/offers02/3/6.png";
import _03_img_07 from "../../assets/images/real-estates/offers02/3/7.png";
import _03_img_08 from "../../assets/images/real-estates/offers02/3/8.png";
import _03_img_09 from "../../assets/images/real-estates/offers02/3/9.png";
import _03_img_10 from "../../assets/images/real-estates/offers02/3/10.png"

import _04_img_01 from "../../assets/images/real-estates/offers02/4/1.jpg";
import _04_img_02 from "../../assets/images/real-estates/offers02/4/2.jpg";
import _04_img_03 from "../../assets/images/real-estates/offers02/4/3.jpg";
import _04_img_04 from "../../assets/images/real-estates/offers02/4/4.jpg";
import _04_img_05 from "../../assets/images/real-estates/offers02/4/5.jpg";
import _04_img_06 from "../../assets/images/real-estates/offers02/4/6.jpg";
import _04_img_07 from "../../assets/images/real-estates/offers02/4/7.jpg";
import _04_img_08 from "../../assets/images/real-estates/offers02/4/8.jpg";
import _04_img_09 from "../../assets/images/real-estates/offers02/4/9.jpg";
import _04_img_10 from "../../assets/images/real-estates/offers02/4/10.jpg";
import _04_img_11 from "../../assets/images/real-estates/offers02/4/11.jpg";

import _05_img_01 from "../../assets/images/real-estates/offers02/5/1.png";
import _05_img_02 from "../../assets/images/real-estates/offers02/5/2.png";
import _05_img_03 from "../../assets/images/real-estates/offers02/5/3.png";
import _05_img_04 from "../../assets/images/real-estates/offers02/5/4.png";
import _05_img_05 from "../../assets/images/real-estates/offers02/5/5.png";
import _05_img_06 from "../../assets/images/real-estates/offers02/5/6.png";
import _05_img_07 from "../../assets/images/real-estates/offers02/5/7.png";
import _05_img_08 from "../../assets/images/real-estates/offers02/5/8.png";
import _05_img_09 from "../../assets/images/real-estates/offers02/5/9.png";

import _06_img_01 from "../../assets/images/real-estates/offers02/6/1.tif";
import _06_img_02 from "../../assets/images/real-estates/offers02/6/2.jpg";
import _06_img_03 from "../../assets/images/real-estates/offers02/6/3.jpg";
import _06_img_04 from "../../assets/images/real-estates/offers02/6/4.jpg";
import _06_img_05 from "../../assets/images/real-estates/offers02/6/5.jpg";
import _06_img_06 from "../../assets/images/real-estates/offers02/6/6.jpg";
import _06_img_07 from "../../assets/images/real-estates/offers02/6/7.jpg";
import _06_img_08 from "../../assets/images/real-estates/offers02/6/8.jpg";
import _06_img_09 from "../../assets/images/real-estates/offers02/6/9.jpg";
import _06_img_10 from "../../assets/images/real-estates/offers02/6/10.jpg";
import _06_img_11 from "../../assets/images/real-estates/offers02/6/11.jpg";

import _07_img_01 from "../../assets/images/real-estates/offers02/7/1.jpg";
import _07_img_02 from "../../assets/images/real-estates/offers02/7/2.jpg";
import _07_img_03 from "../../assets/images/real-estates/offers02/7/3.jpg";
import _07_img_04 from "../../assets/images/real-estates/offers02/7/4.jpg";
import _07_img_05 from "../../assets/images/real-estates/offers02/7/5.jpg";
import _07_img_06 from "../../assets/images/real-estates/offers02/7/6.jpg";
import _07_img_07 from "../../assets/images/real-estates/offers02/7/7.jpg";
import _07_img_08 from "../../assets/images/real-estates/offers02/7/8.jpg";
import _07_img_09 from "../../assets/images/real-estates/offers02/7/9.jpg";
import _07_img_10 from "../../assets/images/real-estates/offers02/7/10.jpg";
import _07_img_11 from "../../assets/images/real-estates/offers02/7/11.jpg";

class FeaturedItems02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    images: [
                        _01_img_01, _01_img_02, _01_img_03, _01_img_04, _01_img_05,
                        _01_img_06, _01_img_07, _01_img_08, _01_img_09, _01_img_10,
                        _01_img_11, _01_img_12, _01_img_13
                    ],
                    title: 'Apartments in La Cala Golf Resort',
                    price: '475.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: false,
                    description: 'This investment new development consists of apartments in Mediterranean style buildings arranged over a large tract of land. Owners will be able to enjoy a spectacular communal area of more than 3,000 m² which will boast the largest swimming pool in the entire resort – an expanse of no less than 600 m² of water – a children’s pool, a covered multi-purpose structure, children’s playgrounds and generous gardens where they can enjoy the sun all year round.\n' +
                        'Developed in the heart of Golf Valley, just 500 metres from the Club House, the sports facilities and the Hotel Spa, the residential complex will offer owners a choice of views over the golf course, the sea, the lake, the valley or the swimming pool, depending on the layout of each building. Moreover, a small shopping centre is due to be built nearby in the near future.\n' +
                        'In addition, project offers two types of apartment buildings within the same residential complex, with different sizes and quality specifications designed to allow everyone to choose the one that suits them best.'
                },
                {
                    id: 2,
                    images: [
                        _02_img_01, _02_img_02, _02_img_03, _02_img_04, _02_img_05,
                        _02_img_06, _02_img_07, _02_img_08, _02_img_09
                    ],
                    title: 'Homes in Estepona Golf',
                    price: '348.000',
                    bedrooms: [3],
                    bathrooms: [3],
                    swimmingPool: true,
                    description: 'These homes enjoy panoramic views over the golf course and to the sea. The homes have plenty of natural light as they face south or southwest.\n' +
                        '48 houses with 3 bedrooms, 3 bathrooms, and large terraces.\n' +
                        'Private gated community with communal gardens and pools.\n' +
                        'The residential development and the golf course are perfectly integrated into the environment and are surrounded by spectacular scenery.\n' +
                        'The development stands out due to the high-quality build together with the luxurious materials used and the sophisticated design and finishings.'
                },
                {
                    id: 3,
                    images: [
                        _03_img_01, _03_img_02, _03_img_03, _03_img_04, _03_img_05,
                        _03_img_06, _03_img_07, _03_img_08, _03_img_09, _03_img_10
                    ],
                    title: 'Apartments and penthouses in San Roque',
                    price: '360.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'This is an exclusive residential project with new apartments and penthouses with 2 and 3 bedrooms with contemporary Mediterranean styling located at the heart of the famous San Roque Club resort.'
                },
                {
                    id: 4,
                    images: [
                        _04_img_01, _04_img_02, _04_img_03, _04_img_04, _04_img_05,
                        _04_img_06, _04_img_07, _04_img_08, _04_img_09, _04_img_10, _04_img_11
                    ],
                    title: 'Apartments in Mijas, Calanova Golf',
                    price: '425.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'Luxury open plan apartments and penthouses with superb terraces with stunning Sea & Golf views in Calanova Golf. Offering onsite amenities & within walking distance of the Club House these fabulous properties are also just short drive to the beach, bars, shops and restaurants of La Cala de Mijas.\n' +
                        'Elevated ground-floor apartments benefit from expansive terraces, a Jacuzzi and some have their own garden, while the first and second-floor apartments feature expansive terraces with spectacular views.\n' +
                        'The two-bedroom penthouses offer the opportunity to truly live the Costa del Sol indoors/outdoors lifestyle, with the living area’s stylish oversize ceramic tiles featuring floor-to-ceiling windows leading to large terraces, with their own Jacuzzi for relaxing and having fun with friends and family. Or make your way to the extensive solarium to enjoy the views and make the most of the privileged lifestyle afforded by this stunning development.'
                },
                {
                    id: 5,
                    images: [
                        _05_img_01, _05_img_02, _05_img_03, _05_img_04, _05_img_05,
                        _05_img_06, _05_img_07, _05_img_08, _05_img_09
                    ],
                    title: 'Luxury townhouses in La Cala',
                    price: '425.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'Discover a new level of luxury in la cala golf with the stunning collection of 58 contemporary 2 and 3 bedroom frontline Golf townhouses at La Cala Golf Residences.\n' +
                        'Peaceful and serene with front line golf views over the famous La Cala Golf course, this modern development will be unrivalled both in terms of finish and location. Nestled in the beautiful Andalusian countryside, yet only minutes from the thriving seaside town of La Cala de Mijas.\n'
                },
                {
                    id: 6,
                    images: [
                        _06_img_02, _06_img_03, _06_img_04, _06_img_05, _06_img_06,
                        _06_img_07, _06_img_08, _06_img_09, _06_img_10, _06_img_11
                    ],
                    title: 'Luxury townhouses in El Faro',
                    price: '631.000',
                    bedrooms: [3, 4],
                    bathrooms: [2, 3],
                    swimmingPool: true,
                    description: 'Gated residential complex, comprising 80 townhouses of 3 and 4 bedrooms, next to El Chapparal Golf Club, with a modern, functional and innovative design that blends in with its beautiful natural surroundings. The south and south-west orientation of these homes allows you the luxury of enjoying the suggestive marine environment of the Mediterranean coast.'
                },
                {
                    id: 7,
                    images: [
                        _07_img_01, _07_img_02, _07_img_03, _07_img_04, _07_img_05,
                        _07_img_06, _07_img_07, _07_img_08, _07_img_09, _07_img_10, _07_img_11
                    ],
                    title: 'Apartments in Casares',
                    price: '536.500',
                    bedrooms: [3, 4],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'Complex is located on a hill, where Finca Cortesin is considered “The best Golf Resort in Europe”. With spectacular views of the sea, Sierra Bermeja and the Bay of Estepona. Consist 51 apartments and penthouses with 2 and 3 bedrooms, distributed in 6 contemporary style blocks.\n' +
                        'All apartments include a garage and storage room. The common areas have an adult pool of almost 160m², SPA, gym and co-working area.'
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
                            title="Selected new developments located near golf courses"
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

export default FeaturedItems02;

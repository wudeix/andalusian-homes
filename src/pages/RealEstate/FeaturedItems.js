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

import _01_img_01 from "../../assets/images/real-estates/offers/01/1.jpg";
import _01_img_02 from "../../assets/images/real-estates/offers/01/2.jpg";
import _01_img_03 from "../../assets/images/real-estates/offers/01/3.jpg";
import _01_img_04 from "../../assets/images/real-estates/offers/01/4.jpg";
import _01_img_05 from "../../assets/images/real-estates/offers/01/5.jpg";

import _02_img_01 from "../../assets/images/real-estates/offers/02/1.jpg";
import _02_img_02 from "../../assets/images/real-estates/offers/02/1b.jpg";
import _02_img_03 from "../../assets/images/real-estates/offers/02/1c.jpg";

import _03_img_01 from "../../assets/images/real-estates/offers/03/1.jpg";
import _03_img_02 from "../../assets/images/real-estates/offers/03/2.jpg";
import _03_img_03 from "../../assets/images/real-estates/offers/03/3.jpg";
import _03_img_04 from "../../assets/images/real-estates/offers/03/4.jpg";
import _03_img_05 from "../../assets/images/real-estates/offers/03/5.jpg";
import _03_img_06 from "../../assets/images/real-estates/offers/03/6.jpg";
import _03_img_07 from "../../assets/images/real-estates/offers/03/7.jpg";

import _04_img_01 from "../../assets/images/real-estates/offers/04/1.jpg";
import _04_img_02 from "../../assets/images/real-estates/offers/04/2.jpg";
import _04_img_03 from "../../assets/images/real-estates/offers/04/3.jpg";
import _04_img_04 from "../../assets/images/real-estates/offers/04/4.jpg";
import _04_img_05 from "../../assets/images/real-estates/offers/04/5.jpg";

import _05_img_01 from "../../assets/images/real-estates/offers/05/1.jpg";
import _05_img_02 from "../../assets/images/real-estates/offers/05/2.jpg";
import _05_img_03 from "../../assets/images/real-estates/offers/05/3.jpg";
import _05_img_04 from "../../assets/images/real-estates/offers/05/4.jpg";
import _05_img_05 from "../../assets/images/real-estates/offers/05/5.jpg";
import _05_img_06 from "../../assets/images/real-estates/offers/05/6.jpg";
import _05_img_07 from "../../assets/images/real-estates/offers/05/7.jpg";
import _05_img_08 from "../../assets/images/real-estates/offers/05/8.jpg";

import _06_img_01 from "../../assets/images/real-estates/offers/06/1.jpg";
import _06_img_02 from "../../assets/images/real-estates/offers/06/2.jpg";
import _06_img_03 from "../../assets/images/real-estates/offers/06/3.jpg";
import _06_img_04 from "../../assets/images/real-estates/offers/06/4.jpg";
import _06_img_05 from "../../assets/images/real-estates/offers/06/5.jpg";
import _06_img_06 from "../../assets/images/real-estates/offers/06/6.jpg";
import _06_img_07 from "../../assets/images/real-estates/offers/06/7.jpg";
import _06_img_08 from "../../assets/images/real-estates/offers/06/8.jpg";
import _06_img_09 from "../../assets/images/real-estates/offers/06/9.jpg";

import _07_img_01 from "../../assets/images/real-estates/offers/07/1.jpg";
import _07_img_02 from "../../assets/images/real-estates/offers/07/2.jpg";
import _07_img_03 from "../../assets/images/real-estates/offers/07/3.jpg";
import _07_img_04 from "../../assets/images/real-estates/offers/07/4.jpg";
import _07_img_05 from "../../assets/images/real-estates/offers/07/5.jpg";
import _07_img_06 from "../../assets/images/real-estates/offers/07/6.png";
import _07_img_07 from "../../assets/images/real-estates/offers/07/7.png";
import _07_img_08 from "../../assets/images/real-estates/offers/07/8.png";


class FeaturedItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    images: [_01_img_03, _01_img_01, _01_img_02, _01_img_04, _01_img_05],
                    title: 'Apartments in Fuengirola',
                    price: '229.400',
                    bedrooms: [2, 3, 4],
                    bathrooms: [1, 2],
                    swimmingPool: true,
                    description: 'The residential complex consists of spacious 1, 2 and 3 bedroom apartments and stunning 3 bedroom penthouses. The project will enjoy spectacular terraces, turning your home into your own private paradise. All homes have a garage and storage room.'
                },
                {
                    id: 2,
                    images: [_02_img_03, _02_img_02, _02_img_01],
                    title: 'Apartments in Mijas',
                    price: '245.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: false,
                    description: 'Spectacular construction in Mijas, five minutes from La Cala de Mijas and its wonderful beaches. Located in the middle of nature with quick access to Malaga and its airport or Marbella. All homes have large terraces and excellent interior layouts. In addition, all homes have a garage and storage room.\n' +
                        'The development has large community areas with gardens, swimming pool, sports courts and children\'s play area.'
                },
                {
                    id: 3,
                    images: [_03_img_01, _03_img_02, _03_img_03, _03_img_04, _03_img_05, _03_img_06, _03_img_07],
                    title: 'Apartments in Benalmadena',
                    price: '180.000',
                    bedrooms: [1, 2, 3],
                    bathrooms: [1, 2],
                    swimmingPool: true,
                    description: 'New construction residential complex located in the privileged environment of Benalmádena, one of the most dynamic and promising towns on the Costa del Sol.\n' +
                        'All homes have large terraces, highlighting the solariums on the penthouses and the gardens on the ground floor.\n' +
                        'The interiors have been designed to optimize habitability and energy efficiency, with great emphasis on the luminosity and functionality of the spaces. It is also worth highlighting the variety of kitchens available in the residence, from independent kitchens to open or semi-open kitchens.\n' +
                        'Kitchens furnished with induction hob, oven and extractor. Compact quartz countertop and front. Top quality ceramic flooring throughout the house. Air conditioning and ACS through aerothermal energy.'
                },
                {
                    id: 4,
                    images: [_04_img_01, _04_img_02, _04_img_03, _04_img_04, _04_img_05],
                    title: 'Apartments in Estepona',
                    price: '233.000',
                    bedrooms: [1, 2, 3],
                    bathrooms: [1, 2],
                    swimmingPool: true,
                    description: 'Project of 90 homes with 1, 2, and 3 bedrooms, all of them with garage space and storage room. It is an exclusive gated community to guarantee security and privacy.\n' +
                        'The homes are designed to enjoy the vegetation and the natural environment with interior spaces that seem to continue on the terraces to achieve greater luminosity and a feeling of spaciousness. In addition, the residential complex has common areas with two saline chlorination pools, a multisport court, a social club for recreational or sports activities, as well as large green areas.\n' +
                        'Aby Estepona is an oasis surrounded by nature. A perfect place to enjoy the tranquility, while you can access a wide range of outdoor sports activities, thanks to its proximity to the Estepona Golf courses and its spectacular beaches.'
                },
                {
                    id: 5,
                    images: [_05_img_01, _05_img_02, _05_img_03, _05_img_04, _05_img_05, _05_img_06, _05_img_07, _05_img_08],
                    title: 'Apartments in Benalmadena',
                    price: '1.280.000',
                    bedrooms: [2, 3],
                    bathrooms: [2, 3],
                    swimmingPool: true,
                    description: '15 magnificent homes featuring luxury villas and desirable properties arranged over one, two and three floors, boasting floor-to-ceiling picture windows that afford gorgeous unobstructed views, a private infinity swimming pool, and much more. The properties layout offers a wealth of space and features generous sized panoramic terraces, which are perfect for outdoor living.\n' +
                        'On the shores of the Mediterranean, and nestled in nature’s bounty, these magnificent ' +
                        'homes enjoy direct access to the beach and stunning panoramic sea views—afforded ' +
                        'from the impressive floor-to-ceiling picture windows—. All interior rooms offer a wealth ' +
                        'of living space and give onto wrap-around private terraces, with some boasting an ' +
                        'infinity swimming pool.'
                },
                {
                    id: 6,
                    images: [_06_img_01, _06_img_02, _06_img_03, _06_img_04, _06_img_05, _06_img_06, _06_img_07, _06_img_08, _06_img_09],
                    title: 'Apartments in Manilva',
                    price: '252.000',
                    bedrooms: [2],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'In this development the main neighbor will be the sea, a quiet neighbor, whose sound does not bother, but rather relaxes, which you can visit whenever you want thanks to its proximity and who will receive you with a smile as wide as the beaches in the area. Your new home will be tailored to your needs, in a housing complex with 2 or 3 bedrooms, parking, sea views and community gardens. Sea, nature and more than 300 days a year of sun come together in a residential area of more than 14,000 square meters. Discover a corner of peace and harmony by the sea on the “New Golden Mile”.'
                },
                {
                    id: 7,
                    images: [_07_img_01, _07_img_02, _07_img_03, _07_img_04, _07_img_05, _07_img_06, _07_img_07, _07_img_08],
                    title: 'Apartments in Estepona',
                    price: '235.000',
                    bedrooms: [2, 3],
                    bathrooms: [2],
                    swimmingPool: true,
                    description: 'The properties offer 2 and 3 bedrooms with underground parking spaces and a storeroom included. Spacious terraces of up to 165m² offer views to the gardens, swimming pool, mountains or the sea, depending on the property.\n' +
                        'The first-floor apartments offer terraces up to 35m², while the penthouse properties include a rooftop solarium, maximizing your outside space. Inside, the properties offer a bright, modern open-plan layout.\n' +
                        'The communal areas of this project offer landscaped gardens and a swimming pool, gymnasium, meditation area, spa, communal co-working room, beach volleyball court, play area, and a putting green. Like a holiday resort at home! The gardens also include citrus and aromatic plants as well as pathways to enjoy nature.\n' +
                        'Being so close to Estepona, you are not far from all the amenities you could want, including bars/cafes, shopping, health care, schools, banking, and of course the beaches.'
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

    /*addItem = () => {
        this.setState({items: this.state.items + 1});
    };*/

    addItem() {
        this.setState({items: this.state.items + 1});
    }

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

export default FeaturedItems;

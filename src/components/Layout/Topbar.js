import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import {
    Container,
    Modal,
    ModalBody,
    Offcanvas,
    OffcanvasBody,
} from 'reactstrap';
import RightSidebar from './RightSidebar';
import {Link as ScrollLink, animateScroll as scroll, scroller} from 'react-scroll';

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropdownOpenShop: false,
            wishlistModal: false,
            dropdownIsOpen: false,
            open: false,
            position: 'end',
            dropdownOpen: false,
            landing: false,
            components: false,
            demo: false,
            doc: false,
            pages: false,
            company: false,
            account: false,
            email: false,
            blog: false,
            case: false,
            auth: false,
            login: false,
            signup: false,
            reset: false,
            utility: false,
            special: false,
            contact: false,
            multi: false,
            level2: false,
            isOffcanvasOpen: false
        };
        this.toggleLine = this.toggleLine.bind(this);
        this.toggleDropdownShop.bind(this);
        this.toggleWishlistModal.bind(this);
        this.toggleDropdownIsOpen.bind(this);
        this.toggleRightDrawer = this.toggleRightDrawer.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.toggleDropdown.bind(this);
        this.togglemodal.bind(this);
    };

    /**
     * Right sidebar drawer
     **/

    toggleOffcanvas = () => {
        this.setState((prevState) => ({
            isOffcanvasOpen: !prevState.isOffcanvasOpen,
        }));
    };

    closeOffcanvas = () => {
        this.setState({isOffcanvasOpen: false});
    };

    toggleRightDrawer = () => {
        this.setState({position: 'right'});
        this.setState({open: !this.state.open});
    };
    onDrawerClose = () => {
        this.setState({open: false});
    };

    toggleWishlistModal = () => {
        this.setState((prevState) => ({
            wishlistModal: !prevState.wishlistModal,
        }));
    };

    toggleDropdownShop = () => {
        this.setState({
            dropdownOpenShop: !this.state.dropdownOpenShop,
        });
    };
    toggleDropdownIsOpen = () => {
        this.setState({
            dropdownIsOpen: !this.state.dropdownIsOpen,
        });
    };

    toggleDropdown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };
    togglemodal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal,
        }));
    };

    toggleLine() {
        this.setState((prevState) => ({isOpen: !prevState.isOpen}));
    }

    initMenu() {
        this.activateParentDropdown();
    }

    componentDidUpdate(prevProps) {
        if (this.props.type !== prevProps.type) {
            this.initMenu();
        }
    }

    activateParentDropdown() {
        var menuItems = document.getElementsByClassName("sub-menu-item");

        if (menuItems) {
            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');

                const immediateParent = matchingMenuItem.closest('li');
                if (immediateParent) {
                    immediateParent.classList.add('active');
                }
                const parent = immediateParent.closest(".parent-menu-item");

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('a');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }
                    var parentOfParent = parent.closest(".parent-parent-menu-item");
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    parentOfParent = matchingMenuItem.closest(".parent-parent-menu-item");
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
            return false;
        }
        return false;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.initMenu();
    }

    render() {

        const {isOffcanvasOpen} = this.state;

        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <Container>
                        <div>
                            {this.props.hasDarkTopBar ? (
                                <Link className="logo" to="/">
                                    {/*
                                        <img
                                        src={logodark}
                                        height="24"
                                        className="logo-light-mode"
                                        alt=""
                                    />
                                    <img
                                        src={logolight}
                                        height="24"
                                        className="logo-dark-mode"
                                        alt=""
                                    />
                                    */}
                                </Link>
                            ) : (
                                <Link className="logo" to="/">
                                      <span className="logo-light-mode">
                                        {/*
                                            <img src={logodark} className="l-dark" height="24" alt=""/>
                                        <img
                                            src={logolight}
                                            className="l-light"
                                            height="24"
                                            alt=""
                                        />
                                        */}
                                      </span>
                                    {/*

                                        <img
                                        src={logolight}
                                        height="24"
                                        className="logo-dark-mode"
                                        alt=""
                                    />
                                    */}
                                </Link>
                            )}
                        </div>
                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link
                                    to="#"
                                    onClick={this.toggleLine}
                                    className={
                                        this.state.isOpen ? 'navbar-toggle open' : 'navbar-toggle'
                                    }
                                >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="navigation" style={{display: this.state.isOpen ? 'block' : 'none'}}>

                            <ul className="navigation-menu nav-dark" id="top-menu">
                                <li>
                                    <ScrollLink
                                        to="homeSection"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        className="sub-menu-item"
                                    >
                                        Home
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink
                                        to="offersSection"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        className="sub-menu-item"
                                    >
                                        Offers
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink
                                        to="teamSection"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        className="sub-menu-item"
                                    >
                                        Team
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink
                                        to="aboutUsSection"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        className="sub-menu-item"
                                    >
                                        About Us
                                    </ScrollLink>
                                </li>

                                <li>
                                    <ScrollLink
                                        to="statsSection"
                                        spy={true}
                                        smooth={true}
                                        duration={100}
                                        className="sub-menu-item"
                                    >
                                        Stats
                                    </ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </Container>
                </header>

                <Modal
                    isOpen={this.state.wishlistModal}
                    tabIndex="-1"
                    centered
                    contentClassName="rounded shadow-lg border-0 overflow-hidden"
                    toggle={this.toggleWishlistModal}
                >
                    <ModalBody className="py-5">
                        <div className="text-center">
                            <div
                                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                                style={{height: '95px', width: '95px'}}
                            >
                                <h1 className="mb-0">
                                    <i className="uil uil-heart-break align-middle"></i>
                                </h1>
                            </div>
                            <div className="mt-4">
                                <h4>Your wishlist is empty.</h4>
                                <p className="text-muted">
                                    Create your first wishlist request...
                                </p>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-outline-primary">
                                        + Create new wishlist
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                <Offcanvas isOpen={isOffcanvasOpen} direction={this.state.position} toggle={this.toggleOffcanvas}>
                    <OffcanvasBody>
                        <RightSidebar onClose={this.closeOffcanvas}/>
                    </OffcanvasBody>
                </Offcanvas>

            </React.Fragment>
        );
    };
};

export default withRouter(Topbar);


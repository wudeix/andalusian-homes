import React, {Component} from "react";

// import Component
import Header from "./Header";
import Client from "./Client";
import Blog from "./Blog";
import FeaturedItems from "./FeaturedItems";
import FeaturedItems01 from "./FeaturedItems01";
import FeaturedItems02 from "./FeaturedItems02";
import TeamMembers from "./TeamMembers";
import AboutUs from "./AboutUs";
import Statistics from "./Statistics";

export default class index extends Component {
    componentDidMount() {
        document.body.classList = "";
        document.querySelectorAll("#buyButton").forEach((navLink) => {
            navLink.classList.add("btn-light");
            navLink.classList.remove("btn-soft-primary");
            document.getElementById("top-menu").classList.add("nav-light");
        });
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {

            document.getElementById("topnav").classList.add("nav-sticky");
        } else {
            document.getElementById("topnav").classList.remove("nav-sticky");
        }
    };

    render() {
        return (
            <React.Fragment>
                <Header/>

                <div className="position-relative">
                    <div className="shape overflow-hidden text-light">
                        <svg
                            viewBox="0 0 2880 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </div>

                <section className="section" id="offersSection">
                    <FeaturedItems/>
                </section>

                <section className="section bg-light">
                    <FeaturedItems01/>
                </section>

                <section className="section">
                    <FeaturedItems02/>
                </section>


                <section className="section bg-light" id="teamSection">
                    <TeamMembers/>
                </section>

                <AboutUs/>

                <Statistics/>

                {/*
                    <section className="section">
                    <Client/>
                </section>

                <Blog/>
                */}

            </React.Fragment>
        );
    }
}

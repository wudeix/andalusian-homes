import React, {Component, Suspense} from "react";
import {withRouter} from "react-router-dom";
import BackToTop from "./backToTop";

const Topbar = React.lazy(() => import("./Topbar"));
const FooterWithoutMenuLightSocialOnly = React.lazy(() =>
    import("./FooterWithoutMenuLightSocialOnly")
);

const Loader = () => {
    return (
        <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>
    );
};

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Suspense fallback={Loader()}>
                    <Topbar hasDarkTopBar={this.props.hasDarkTopBar}/>

                    {this.props.children}
                    {(() => {
                        return <FooterWithoutMenuLightSocialOnly className=""/>;
                    })()}
                    <BackToTop/>
                </Suspense>

            </React.Fragment>
        );
    }
}

export default withRouter(Layout);

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from "../../common/SEO";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ContactOne from "./ContactOne";

const Contact = () => {
    return (
        <>
            <SEO title="Contact | vartservices.com" />
            <main className="page-wrapper">
                <div className="main-content">
                    <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                    {/* Start Slider Area  */}

                    <div className="container rn-section-gapTop">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <div>
                                            <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Contact Details.</span></h3>
                                        </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                        delay="0500">
                                        <h1 className="title display-one">You are in the right place.</h1>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}
                                        delay="1000">
                                        <img src='illustrations/i4.png' />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Slider Area  */}
                    {/* Start Contact Area  */}
                    <div className="rwt-contact-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mb--40">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Contact Form"
                                        title="Our Contact Address Here."
                                        description=""
                                    />
                                </div>
                            </div>
                            <ContactOne />
                        </div>
                    </div>
                    {/* End Contact Area  */}
                </div>
                <FooterFour />
            </main>
        </>
    )
}
export default Contact;
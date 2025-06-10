import React from 'react';
import SEO from "../../common/SEO";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import ServiceThree from "./ServiceThree";
import Separator from "../separator/Separator";
import HeaderOne from '../../common/header/HeaderOne';
import AccordionOne from '../accordion/AccordionOne';
import FooterFour from '../../common/footer/FooterFour';
import ScrollAnimation from 'react-animate-on-scroll';

const Service = () => {
    return (
        <>

            <SEO title="Service | vartservices.com" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                {/* Start Slider Area  */}

                <div className="container rn-section-gapTop">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner pt--80 text-center">
                                <div>
                                    <ScrollAnimation
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={true}>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                                    </ScrollAnimation>
                                </div>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="0500">
                                    <h1 className="title display-one">Creating Amazing/Meorable Digital Experiences</h1>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="1000">
                                    <img src='illustrations/i3.png' />
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* End Slider Area  */}

                <div className="main-content">

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Services #1"
                                        title="Services provide for you."
                                    />
                                </div>
                            </div>
                            <ServiceThree
                                serviceStyle="service__style--1"
                                textAlign="text-center"
                            />
                        </div>
                    </div>
                    {/* End Service Area  */}

                    <Separator />

                    {/* Start Services #2 Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Services #2"
                                        title="Brochure & Flyer Design services"
                                        description=""
                                    />
                                </div>
                            </div>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <div className="row mb--40">
                                    <div className="col-lg-6">
                                        <img className="radius-small" src='./images/service/services.jpg' alt="Corporate React Template" />
                                    </div>
                                    <div className="col-lg-6">
                                        <AccordionOne />
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    {/* End Services #2 Area  */}

                    <Separator />

                    {/* Start Services #3 Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Services #3"
                                        title="Our Pricing Checklist"
                                        description=""
                                    />
                                </div>
                            </div>
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}>
                                <div className="row">
                                    <table class="table table-striped table-hover table-dark">
                                        <thead>
                                            <tr>
                                                <th>Particular</th>
                                                <th>Pricing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Virtual sample</td>
                                                <td>$2</td>
                                            </tr>
                                            <tr>
                                                <td>Virtual proof</td>
                                                <td>$2</td>
                                            </tr>
                                            <tr>
                                                <td>Vector Art – Simple</td>
                                                <td>$5</td>
                                            </tr>
                                            <tr>
                                                <td>Digitizing, Price per thousand</td>
                                                <td>$1</td>
                                            </tr>
                                            <tr>
                                                <td>Logo design (2 options)</td>
                                                <td>$50</td>
                                            </tr>
                                            <tr>
                                                <td>Email Blast (3 versions) 1 option</td>
                                                <td>$45</td>
                                            </tr>
                                            <tr>
                                                <td>Branding Packages: Logo redeign, web banners, &amp; Business card layout</td>
                                                <td>$130</td>
                                            </tr>
                                            <tr>
                                                <td>Vectorart – Standard</td>
                                                <td>$20</td>
                                            </tr>
                                            <tr>
                                                <td>Vectorart – Complex</td>
                                                <td>$40</td>
                                            </tr>
                                            <tr>
                                                <td>Vectorart – Challenging</td>
                                                <td>$80</td>
                                            </tr>
                                            <tr>
                                                <td>Vectorart – Speciality</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr>
                                                <td>E-blast / Flyer / Banner</td>
                                                <td>$20</td>
                                            </tr>
                                            <tr>
                                                <td>Logo Design (1 options)</td>
                                                <td>$30</td>
                                            </tr>
                                            <tr>
                                                <td>T-shirt Design with virtual mockup</td>
                                                <td>$35</td>
                                            </tr>
                                            <tr>
                                                <td>Order Entry</td>
                                                <td>$2</td>
                                            </tr>
                                            <tr>
                                                <td>Line Art</td>
                                                <td>$100</td>
                                            </tr>
                                            <tr>
                                                <td>Line Art Simple</td>
                                                <td>$50</td>
                                            </tr>
                                            <tr>
                                                <td>Website Design – http://www.rftpromo.com (Example Site)</td>
                                                <td>$400</td>
                                            </tr>
                                            <tr>
                                                <td>Animation</td>
                                                <td><a class="quote-btn" href="/contact-us" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                            <tr>
                                                <td>Short Film Video</td>
                                                <td><a class="quote-btn" href="/contact" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                            <tr>
                                                <td>Short Video 2 mins – Store Launch or Product Video</td>
                                                <td><a class="quote-btn" href="/contact-us" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                            <tr>
                                                <td>Short Video (1-2-3 Mins) – Product Showcase with Wow factor</td>
                                                <td><a class="quote-btn" href="/contact-us" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                            <tr>
                                                <td>Maya</td>
                                                <td><a class="quote-btn" href="/contact-us" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                            <tr>
                                                <td>Catalog</td>
                                                <td><a class="quote-btn" href="/contact-us" target="_blank" rel="noopener noreferrer">Request a quote</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    {/* End Services #3 Area  */}

                </div>
                <FooterFour />
            </main>
        </>
    )
}

export default Service;

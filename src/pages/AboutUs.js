import React from 'react'
import SEO from "../common/SEO";
import HeaderOne from '../common/header/HeaderOne';
import FooterFour from '../common/footer/FooterFour';
import BrandThree from '../elements/brand/BrandThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import CounterUpFour from "../elements/counterup/CounterUpFour";
import TeamFour from "../elements/team/TeamFour";
import Separator from "../elements/separator/Separator";
import ScrollAnimation from 'react-animate-on-scroll';
import TeamOne from '../elements/team/TeamOne';

const AboutUs = () => {
    return (
        <>
            <SEO title="About Us" />
            <main className="page-wrapper">
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
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's About Details.</span></h3>
                                    </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="0500">
                                    <h1 className="title display-one">We are a Corporate <br /> Business Agency.</h1>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="1000">
                                    <img src='illustrations/i1.png'/>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">Why Choose Us?</h3>
                                    <p className="mb--10">AN UNCOMMON APPROACH TO COMMON GOODS While some promotional products companies are only in the business of selling products, we understand that you often need an uncommon approach to common goods. Maybe it’s a unique theme, special packaging or a design enhancement to make a common product a vehicle for marketing or a gift of goodwill. This is what sets us apart. Our campaigns effectively promote your company at events and trade shows, recognize your employees, show your customers how much you appreciate their business and much, much more. We are here to help you get your full RETURN ON INVESTMENT (R.O.I.) and more! It has been proven time and time again that marketing and promoting your business, group or organization increases community awareness and overall sales growth! Want to measure your ROI? We can make that happen too!</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="illustrations/ui2.png" />
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop">
                    <div className="container">
                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                        <div className="row">
                            <div className="col-lg-6">
                            <img src="illustrations/ui5.png" />
                            </div>
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">Who We Are?</h3>
                                    <p className="mb--10">We at V-Art Services PVT. LTD. are an experienced and passionate team of professionals that live and breathe brand. All our services are fully integrated to exceed your business requirements.We are pioneer in presenting genuine & inventive web design, web development, and graphic design solutions in slicing, adaptation, assimilation and customization services.From conceptualization to full website development implementation we have serviced our clients in wide range of industries whether it’s a start up or a big company. From PSD to HTML, PSD to Magento, WordPress,and Shopify our web development services come with unmatched customer support. We embrace latest technologies to meet your business challenges precisely.</p>
                                </div>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Service Area  */}
                <div className="service-area rn-section-gapTop pb--60">
                    <div className="container">
                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h3 className="title">Our Vision</h3>
                                    <p className="mb--10">Web Design and Development Company is to create innovative products and deliver unique services which process quality and customer satisfaction to add value to your business. Our dedicated teams especially focus on the needs and requirements of the clients to build strong and long-term relations. With the aim to meet the clients demands, our teamwork to bring successful growth for various businesses.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src="illustrations/ui3.png" />
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div>
                {/* End Service Area  */}

                {/* Start Brand Area  */}
                {/* <div className="rwt-brand-area pb--60 pt--30">
                    <div className="container">
                    <ScrollAnimation
                                    animateIn="fadeIn"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="0500">
                        <div className="row">
                            <div className="col-lg-12 mt--10">
                                <BrandThree brandStyle="brand-style-2" />
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                </div> */}
                {/* End Brand Area  */}


                <Separator />
                
                {/* Start Elements Area  */}
                <div className="rwt-counterup-area pb--100 rn-section-gap">
                    <div className="container mt_dec--30">
                        <CounterUpFour column="col-lg-3 col-md-6 col-sm-6 col-12" counterStyle="counter-style-4" textALign="text-center" />   
                    </div>
                </div>
                {/* End Elements Area  */}

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-team-area rn-section-gap">
                    <div className="container">
                        <div className="row mb--20">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign = "text-center"
                                    radiusRounded = ""
                                    subtitle = "Our Corporate Team."
                                    title = "Corporate Team Member."
                                    description = ""
                                />
                            </div>
                        </div>
                        <TeamOne column="col-lg-6 col-md-6 col-12 mt--30" teamStyle="team-style-default" />
                    </div>
                </div>
                {/* End Elements Area  */}
                <FooterFour />
            </main>
        </>
    )
}

export default AboutUs;

import React from 'react'
import SEO from "../common/SEO";
import { Link } from "react-router-dom";
import FooterFour from '../common/footer/FooterFour';

import Slider from "react-slick";
import { BannerActivation } from "../utils/script";
import Separator from "../elements/separator/Separator";
import ServiceFive from '../elements/service/ServiceFive';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import BlogList from "../components/blog/itemProp/BlogList";
import BlogClassicData from '../data/blog/BlogList.json';
import HeaderOne from '../common/header/HeaderOne';
import TestimonialThree from '../elements/testimonial/TestimonialThree';
import TabThree from '../elements/tab/TabThree';
import CalltoActionThree from '../elements/calltoaction/CalltoActionThree';
import ScrollAnimation from 'react-animate-on-scroll';
var BlogListData = BlogClassicData.slice(0, 3);



const BannerData = [
    {
        image: "/images/bg/bg2.jpg",
        title: "Digital Agency.",
        description: "We turn ideas into extraordinary digital products & experiences."
    },
    {
        image: "/images/bg/bg3.jpg",
        title: "Creative Agency.",
        description: "Transfer your brand with revolutionary digital experiences."
    },
    {
        image: "/images/bg/bg4.jpg",
        title: "Startup Agency.",
        description: "Mumbai's brightest digital agency."
    },
]


const DigitalAgency = () => {
    return (
        <>
            <SEO title="Home | vartservices.com" />
            <main className="page-wrapper">

                {/* <HeaderOne btnStyle="btn-small round btn-icon"  HeaderSTyle="header-transparent" /> */}
                <HeaderOne btnStyle="btn-small round btn-icon" />

                {/* Start Slider Area  */}
                <Slider className="slider-area slider-style-4 slider-dot rn-slick-dot rn-slick-arrow" {...BannerActivation}>
                    {BannerData.map((data, index) => (
                        <div key={index} className="single-slide">
                            <div className="height-950 bg-overlay bg_image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL} ${data.image})` }}>
                                <div className="container">
                                    <div className="row row--30 align-items-center">
                                        <div className="order-2 order-lg-1 col-lg-7">
                                            <div className="inner text-left">
                                                <h1 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                                                <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* End Slider Area  */}


                {/* Start Service Area  */}
                <div className="rn-service-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="About Our Company."
                                    title="Services provide for you."
                                />
                            </div>
                        </div>
                        <ServiceFive
                            serviceStyle="gallery-style"
                            textAlign="text-center"
                        />
                    </div>
                </div>
                {/* End Service Area  */}

                <Separator />
                {/* Start Testimonial Area  */}
                <div className="rwt-testimonial-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Client Feedback"
                                    title="What People Are Saying."
                                />
                            </div>
                        </div>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                            delay="0500">
                            <TestimonialThree column="col-lg-4 col-md-6 col-sm-6 col-12 mt--30" teamStyle="card-style-default testimonial-style-one style-two" />
                        </ScrollAnimation>
                    </div>
                </div>
                {/* End Testimonial Area  */}

                <Separator />
                <div className="rwt-portfolio-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Why Choose Us"
                                    title="We Work With Industries"
                                    description=""
                                />
                            </div>
                        </div>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                            <TabThree Column="col-lg-6 col-md-6 col-sm-6 col-12 mt--30 portfolio no-overlay" />
                        </ScrollAnimation>
                    </div>
                </div>

                <Separator />

                {/* Start Elements Area  */}
                <div className="rwt-callto-action-area rn-section-gapBottom">
                    <div className="wrapper">
                        <CalltoActionThree />
                    </div>
                </div>
                {/* End Elements Area  */}


                <Separator />

                <div className="blog-area rn-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    textAlign="text-center"
                                    radiusRounded=""
                                    subtitle="Get The Latest News"
                                    title="What Our Trending News."
                                />
                            </div>
                        </div>
                        <ScrollAnimation
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}>
                            <div className="row row--15">
                                {BlogListData.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12 mt--30">
                                        <BlogList StyleVar="box-card-style-default" data={item} />
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                <FooterFour />
            </main>
        </>
    )
}
export default DigitalAgency;
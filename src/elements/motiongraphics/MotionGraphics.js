import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';

function MotionGraphics() {
    return (
        <>
            <SEO title="Motion Graphics | Animation | vartservices.com" />
            <main className="page-wrapper">
                <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

                {/* Start Slider Area  */}

                <div className="container rn-section-gapTop">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner pt--80 text-center">
                                <div>
                                    <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Animation Details.</span></h3>
                                </div>
                                <h1 className="title display-one">Motion Graphics</h1>
                                <img src='../illustrations/i19.png' />
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
                                <div className="col-lg-7">
                                    <p>If we were to define motion graphics, simply put, they are animated infographics. Graphic elements are moved in space over time to create the illusion of motion. Unlike other forms of animation, motion graphics primarily use graphics and type.</p>
                                    <p>The usage of motion graphics became popular in the 50s in movies. Saul Bass was the genius behind some of the most iconic opening titles such as Vertigo.</p>
                                    <p>Also, the animation is a broader term while a motion graphics video enhances the overall textual usage. Motion graphics explainer video content is used in a diverse range of industries to build effective communication.</p>
                                </div>
                                <div className="col-lg-5">
                                    <div class="service service__style--1 bg-color-blackest radius rbt-border">
                                        <div class="content">
                                            <h4 class="title w-400 text-center">
                                                <a href="/contact">NEED V-ART SERVICES PVT. LTD. HELP?</a>
                                            </h4>
                                            <p class="description b1 color-gray mb--25 text-left">Prefer speaking with a human to filling out a form? call corporate office and we will connect you with a team member who can help.</p>
                                            <div className="row">
                                                <div className="icon px-3">
                                                    <FiPhoneCall />
                                                </div>
                                                <a href="tel:8879028513" style={{ fontSize: "18px" }}>+91 8879 028 513</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Service Area  */}
                </div>
                <FooterFour />
            </main>
        </>
    )
}

export default MotionGraphics
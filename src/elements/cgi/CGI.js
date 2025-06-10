import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';

function CGI() {
  return (
    <>
    <SEO title="CGI | Animation | vartservices.com" />
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
                                <h1 className="title display-one">CGI</h1>
                                <img src='../illustrations/i20.png' />
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
                                    <p>At the most basic level, Computer-Generated Imagery (CGI) is the creation of still or animated visual content with computer software. CGI most commonly refers to the 3D computer graphics used to create characters, scenes and special effects in films, television and games. The technology is also used in everything from advertising, architecture, engineering, virtual reality and even art.</p>
                                    <p>CGI is used extensively these days because it is often cheaper than physical methods which rely on creating elaborate miniatures, hiring extras for crowd scenes, and most commonly for when it’s simply not safe or humanly possible to create the visuals.</p>
                                    <p>ECGI is created using a range of different methods. The use of algorithms can produce complex fractal patterns. 2D pixel-based image editors can create vector shapes. 3D graphics software can create everything for simple primitive shapes to complex forms made from flat triangles and quadrangles. 3D software can even simulate the way light reacts to a surface and generate particle effects.</p>
                                    <p>Where CGI starts to get really exciting is when computer-generated imagery is layered into digital film footage using a technique known as compositing. This technique is becoming more familiar to people as often refered to as green screen.</p>
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

export default CGI
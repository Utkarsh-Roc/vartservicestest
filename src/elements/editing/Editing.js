import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';

function Editing() {
  return (
    <>
        <SEO title="Editing | Animation | vartservices.com" />
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
                                <h1 className="title display-one">Editing</h1>
                                <img src='../illustrations/i21.png' />
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
                                    <p>Editing is the process of selecting and preparing written, photographic, visual, audible, or cinematic material used by a person or an entity to convey a message or information.</p>
                                    <p>Editing is a growing field of work in the service industry. Paid editing services may be provided by specialized editing firms or by self-employed (freelance) editors.</p>
                                    <p>Editing firms may employ a team of in-house editors, rely on a network of individual contractors or both.[5] Such firms are able to handle editing in a wide range of topics and genres, depending on the skills of individual editors. The services provided by these editors may be varied and can include proofreading, copy editing, online editing, developmental editing, editing for search engine optimization (SEO), etc.</p>
                                    <p>Self-employed editors work directly for clients (e.g., authors, publishers) or offer their services through editing firms, or both. They may specialize in a type of editing (e.g., copy editing) and in a particular subject area. Those who work directly for authors and develop professional relationships with them are called authors’ editors.</p>
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

export default Editing
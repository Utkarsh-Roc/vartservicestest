import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';

function Animation2DAnd3D() {
  return (
    <>
      <SEO title="2D & 3D | Animation | vartservices.com" />
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
                <h1 className="title display-one">2D & 3D</h1>
                <img src='../illustrations/i18.png' />
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
                  <p>2D animation implies that the object is two dimensional. 2D animation comprises of characters or objects only in height and width. … 3D animation comprises of objects in height, width, and depth. In other words, characters are going to be more a realistic contrast to 2D characters In 2D animation, animators use characters, VFX, and backgrounds to create an illusion of movement within a two-dimensional space by sequencing individual drawings together, over a set period of time.</p>
                  <p>In 2D animation, characters and objects used for manipulation only consist of height and width, while 3D animation comprises of manipulation of characters and objects with 3 dimensions, height, width, and depth, and are more realistic than in comparison to 2D characters.</p>
                  <p>A 2D, two-dimensional, object is a plane shape whose 2 dimensions, height and length, can be plotted on the x-axis and the y-axis. Whereas, 3D shapes or three-dimensional shapes also require a z-axis, to plot the additional dimension, width, or depth alongside the length and height.</p>
                  <p>In recent years, 2D animation and 3D animation services have been increasingly in use by brands as their premier video animation styles. One of the biggest factors for this rise is the popularity of social media and the trend of businesses using social media marketing to generate leads, establish a brand presence, and engage their target audience in a visually appealing manner.</p>
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
                        <a href="tel:8879028513" style={{fontSize: "18px"}}>+91 8879 028 513</a>
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

export default Animation2DAnd3D
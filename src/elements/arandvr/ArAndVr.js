import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';

function ArAndVr() {
  return (
    <>
    <SEO title="AR & VR | Animation | vartservices.com" />
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
                <h1 className="title display-one">AR & VR</h1>
                <img src='../illustrations/i27.png' />
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
                  <p>The distinctions between VR and AR come down to the devices they require and the experience itself: AR uses a real-world setting while VR is completely virtual. … VR requires a headset device, but AR can be accessed with a smartphone. AR enhances both the virtual and real world while VR only enhances a fictional reality.</p>
                  <p>The distinctions between VR and AR come down to the devices they require and the experience itself:</p>
                  <ul>
                    <li>AR uses a real-world setting while VR is completely virtual</li>
                    <li>AR users can control their presence in the real world; VR users are controlled by the system</li>
                    <li>VR requires a headset device, but AR can be accessed with a smartphone</li>
                    <li>AR enhances both the virtual and real world while VR only enhances a fictional reality</li>
                  </ul>
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

export default ArAndVr
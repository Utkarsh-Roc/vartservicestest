import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import FooterFour from '../../common/footer/FooterFour';
import HeaderOne from '../../common/header/HeaderOne';
import SEO from '../../common/SEO';


function UIUXDesigning() {
  return (
    <>
    <SEO title="Digital Marketing | Services | vartservices.com" />
      <main className="page-wrapper">
        <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />

        {/* Start Slider Area  */}

        <div className="container rn-section-gapTop">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner pt--80 text-center">
                <div>
                  <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Service Details.</span></h3>
                </div>
                <h1 className="title display-one">UI UX Designing</h1>
                <img src='../illustrations/i11.png' />
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
                  <p>A UI (User Interface) deals with the application's graphical layout, which includes buttons, screen layout, animations, transitions, micro-interactions, and so on. In short, UI is all about how things look.</p>
                  <p>For good UI design, you should take these characteristics into consideration:</p>
                  <ul>
                    <li>The design should be focused on helping users complete tasks quickly with minimum effort. Completing tasks should be a seamless experience.</li>
                    <li>It should be enjoyable, satisfactory, and free from frustration.</li>
                    <li>The UI design should communicate the brand value of the company/organization.</li>
                    <p>UX (User Experience) design deals with how users interact with the system. Logical navigation and how smooth and intuitive the experience is all fall under UX design. In short, this type of design helps users have a positive experience.</p>
                    <p>For good UX design, you should follow these practices:</p>
                    <ul>
                        <li>The product should be easily usable, logical, and self-explanatory.</li>
                        <li>The product should solve users's problems.</li>
                        <li>The product should be accessible and usable to a wide range of people.</li>
                        <li>The product should create a positive experience for the user, allowing them to complete tasks without frustration.</li>
                    </ul>
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

export default UIUXDesigning
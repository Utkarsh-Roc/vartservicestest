import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import FooterFour from '../../common/footer/FooterFour'
import HeaderOne from '../../common/header/HeaderOne'
import SEO from '../../common/SEO'
import Separator from '../separator/Separator'
import ServiceOne from '../service/ServiceOne'

function Animation() {
  return (
    <>
      <SEO title="Animation | vartservices.com" />
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
                  <img src='illustrations/i2.png' />
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
              <ServiceOne
                serviceStyle="service__style--1 bg-color-blackest radius mt--25 rbt-border"
                textAlign="text-center"
              />
            </div>
          </div>
          {/* End Service Area  */}

          <Separator />

          {/* Start Youtube Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}>
                <div className="row">
                  <div className="col-lg-6 mb-5" style={{ height: "50vh" }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dYKM0astrQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-6 mb-5" style={{ height: "50vh" }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DSAwNx3wDAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-6 mb-5" >
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VWMnCzpCbeE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-6 mb-5" style={{ height: "50vh" }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/mXuHvL4L0a4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-6 mb-5" style={{ height: "50vh" }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V6oNLyngf3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="col-lg-6 mb-5" style={{ height: "50vh" }}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BIZj72wGKAY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          {/* End Youtube Area  */}


        </div>
        <FooterFour />
      </main>
    </>
  )
}

export default Animation
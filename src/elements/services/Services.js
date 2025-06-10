import React from 'react'
import FooterFour from '../../common/footer/FooterFour'
import HeaderOne from '../../common/header/HeaderOne'
import SEO from '../../common/SEO'
import ContactOne from '../contact/ContactOne'
import SectionTitle from '../sectionTitle/SectionTitle'
import Separator from '../separator/Separator'
import ServiceOne from '../service/ServiceOne'
import ServiceThree from '../service/ServiceThree'
import ServiceTwo from '../service/ServiceTwo'

function Services() {
  return (
    <>
    <SEO title="Services || Doob - React Business  Template" />
            <main className="page-wrapper">
                <div className="main-content">
                    <HeaderOne btnStyle="btn-small round btn-icon" HeaderSTyle="header-transparent" />
                    {/* Start Slider Area  */}

                    <div className="container rn-section-gapTop">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner pt--80 text-center">
                                    <div>
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Service Details.</span></h3>
                                    </div>
                                    <h1 className="title display-one">We are a Corporate <br /> Business Agency.</h1>
                                    <img src='illustrations/i3.png' />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Slider Area  */}
                    
                    <Separator />

                    {/* Start Service Area  */}
                    <div className="rn-service-area rn-section-gap ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign = "text-center"
                                        radiusRounded = ""
                                        subtitle = "What we can do for you"
                                        title = "Services provide for you."
                                        description = "There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                                     />
                                </div>
                            </div>
                            <ServiceThree 
                                serviceStyle = "service__style--2"
                                textAlign = "text-center"
                             />
                        </div>
                    </div>
                    {/* End Service Area  */}

                </div>
                <FooterFour />
            </main>
    </>
  )
}

export default Services
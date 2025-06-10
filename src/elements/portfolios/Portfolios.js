import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import FooterFour from '../../common/footer/FooterFour'
import HeaderOne from '../../common/header/HeaderOne'
import SEO from '../../common/SEO'
import PortfolioOne from '../portfolio/PortfolioOne'
import SectionTitle from '../sectionTitle/SectionTitle'
import Separator from '../separator/Separator'
import TabFour from '../tab/TabFour'

function Portfolios() {
    return (
        <>
            <SEO title="Portfolio || V-Art Services Pvt Ltd" />
            <main className="page-wrapper">
                <div className="main-content">
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
                                        <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Portfolio.</span></h3>
                                    </div>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="0500">
                                    <h1 className="title display-one">We are experts in bringing brands to life digitally.</h1>
                                    </ScrollAnimation>
                                    <ScrollAnimation
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    delay="1000">
                                    <img src='illustrations/i8.png' />
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* End Slider Area  */}

                    {/* Start Portfolio Area  */}
                    <div className="rn-service-area rn-section-gap ">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://ajmershrineindia.com/" target="_blank">
                                            <img src="./images/portfolio/ajmershrineindia.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Ajmer Shrine India</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://allproductspromotion.com/" target="_blank">
                                            <img src="./images/portfolio/allproductspromotion.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">All Products Promotion</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://andhericaterers.com/" target="_blank">
                                            <img src="./images/portfolio/andhericaterers.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Andheri Caterers</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://www.backtoworkkits.com/" target="_blank">
                                            <img src="./images/portfolio/backtoworkkits.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Back To Work Kits</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://www.bghr.in/" target="_blank">
                                            <img src="./images/portfolio/bghr.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">BGHR</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://beingcreative.in/" target="_blank">
                                            <img src="./images/portfolio/beingcreative.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Being Creative</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://creativedaycare.ca/" target="_blank">
                                            <img src="./images/portfolio/creativedaycare.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Creative Day Care</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://eventbashers.com/" target="_blank">
                                            <img src="./images/portfolio/event-bashers-1.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Event Bashers</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://www.exoticcarhire.in/" target="_blank">
                                            <img src="./images/portfolio/exoticcarhire.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Exotic Car Hire</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://flataxrelief.com/" target="_blank">
                                            <img src="./images/portfolio/flataxrelief.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Flat Tax Relief</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://www.floridapropertytaxloans.com/" target="_blank">
                                            <img src="./images/portfolio/floridapropertytaxloans.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Florida Property Tax Loans</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://floridataxrelieffund.org/" target="_blank">
                                            <img src="./images/portfolio/floridataxrelieffund.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Florida Tax Relief Fund</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://gareebnawaztrust.in/" target="_blank">
                                            <img src="./images/portfolio/gareebnawaztrust.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Gareeb Nawaz Trust</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://hippiepoint2publishing.store/" target="_blank">
                                            <img src="./images/portfolio/hippiepoint2publishing.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Hippie Point To Publishing</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://hreya.com/" target="_blank">
                                            <img src="./images/portfolio/hreya.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Hreya</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://inproma.com/" target="_blank">
                                            <img src="./images/portfolio/inproma.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Inproma</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://jsupermeet.com/" target="_blank">
                                            <img src="./images/portfolio/jsupermeet.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Jsupermeet</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://musiccultureart.in/" target="_blank">
                                            <img src="./images/portfolio/musiccultureart.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Music Culture Art</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://kaifeee.com/" target="_blank">
                                            <img src="./images/portfolio/kaifeee1.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Kaifeee</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://khawajaofajmer.in/" target="_blank">
                                            <img src="./images/portfolio/khawajaofajmer.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Khawaja Of Ajmer</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://logomymask.com/" target="_blank">
                                            <img src="./images/portfolio/logomymask.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Logo My Mask</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://mycasearch.com/" target="_blank">
                                            <img src="./images/portfolio/mycasearch.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">My CA Search</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://nuagehotyoga.com/" target="_blank">
                                            <img src="./images/portfolio/nuagehotyoga.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Nuage Hot Yoga</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://phaedon.in/" target="_blank">
                                            <img src="./images/portfolio/phaedon-1.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Phaedon</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://plotshops.in/" target="_blank">
                                            <img src="./images/portfolio/plotshops.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Plotshops</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://realtysolutionstb.com/" target="_blank">
                                            <img src="./images/portfolio/realtysolutionstb.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Realty Solutions TB</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://runmydigital.com/" target="_blank">
                                            <img src="./images/portfolio/runmydigital.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Run My Digital</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://sarvaiyamotors.in/" target="_blank">
                                            <img src="./images/portfolio/sarvaiya-motors.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Sarvaiya Motors</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://tasteofmalvan.com/" target="_blank">
                                            <img src="./images/portfolio/tasteofmalvan.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Taste Of Malvan</h4>
                                </div> */}
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://vaclasses.com/" target="_blank">
                                            <img src="./images/portfolio/vaclasses.jpg" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">VA Classes</h4>
                                </div> */}
                                <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://vectorart.co/" target="_blank">
                                            <img src="./images/portfolio/vectorart.png" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">Vector Art</h4>
                                </div>
                                {/* <div className="col-lg-4">
                                    <div class="image-wrap">
                                        <a href="https://wowanimalfoundation.org/" target="_blank">
                                            <img src="./images/portfolio/wowanimalfoundation.png" />
                                        </a>
                                    </div>
                                    <h4 className="text-center">WOW Animal Foundation</h4>
                                </div> */}

                            </div>
                        </div>
                    </div>
                    {/* End Portfolio Area  */}

                    <Separator />

                    {/* Start Services #2 Area  */}
                    <div className="rwt-tab-area rn-section-gap">
                        <div className="container">
                            <div className="row mb--40">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        textAlign="text-center"
                                        radiusRounded=""
                                        subtitle="Portfolio #2"
                                        title="Our Recent Works"
                                        description=""
                                    />
                                </div>
                            </div>
                            <TabFour Column="col-lg-6 col-md-6 col-sm-6 col-12 mt--30 portfolio no-overlay"  />
                        </div>
                    </div>
                    {/* End Services #2 Area  */}

                </div>
                <FooterFour />
            </main>
        </>
    )
}

export default Portfolios
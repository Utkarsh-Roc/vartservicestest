import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop'

// Pages import Here 
import HomeDefault from "./pages/HomeDefault";
import BusinessConsulting2 from "./pages/BusinessConsulting2";
import Corporate from "./pages/Corporate";
import Business from "./pages/Business";
import DigitalAgency from "./pages/DigitalAgency";
import Finance from "./pages/Finance";
import Company from "./pages/Company";
import Marketing from "./pages/Marketing";
import TravelAgency from "./pages/TravelAgency";
import Consulting from "./pages/Consulting";
import SeoAgency from "./pages/SeoAgency";
import PersonalPortfolio from "./pages/PersonalPortfolio";
import EventConference from "./pages/EventConference";
import CreativePortfolio from "./pages/CreativePortfolio";
import Freelancer from "./pages/Freelancer";
import InternationalConsulting from "./pages/InternationalConsulting";
import Startup from "./pages/Startup";
import WebAgency from "./pages/WebAgency";


import CategoryList from "./pages/CategoryList";
import TagList from "./pages/TagList";
import Author from "./pages/Author";
import AboutUs from "./pages/AboutUs";
import Portfolios from './elements/portfolios/Portfolios';
import Animation from './elements/animation/Animation';

// Elements import Here 

import Elements from "./elements/elements/Elements";
import Button from "./elements/button/Button";
import Service from "./elements/service/Service";
import CounterUp from "./elements/counterup/CounterUp";
import Progressbar from "./elements/progressbar/Progressbar";

import Portfolio from "./elements/portfolio/Portfolio";
import portfolioThreeColumn from "./elements/portfolio/PortfolioThreeColumn";
import PortfolioFullWidth from "./elements/portfolio/PortfolioFullWidth";
import PortfolioGrid from "./elements/portfolio/PortfolioGrid";
import PortfolioBoxLayout from "./elements/portfolio/PortfolioBoxLayout";
import PortfolioDetails from "./pages/PortfolioDetails";
import Social from "./elements/social/Social";
import Team from "./elements/team/Team";
import Timeline from "./elements/timeline/Timeline";
import Testimonial from "./elements/testimonial/Testimonial";
import RnAccordion from "./elements/accordion/RnAccordion";
import Tab from "./elements/tab/Tab";
import Pricing from "./elements/pricing/Pricing";
import Split from "./elements/split/Split";
import CalltoAction from "./elements/calltoaction/CalltoAction";
import Video from "./elements/video/Video";
import Gallery from "./elements/gallery/Gallery";
import Contact from "./elements/contact/Contact";
import Brand from "./elements/brand/Brand";
import AdvanceTab from "./elements/advancetab/AdvanceTab";
import AdvancePricing from "./elements/advancePricing/AdvancePricing";


import BlogGridView from "./components/blog/BlogGridView";
import BlogListView from "./components/blog/BlogListView";
import BlogGridSidebar from "./components/blog/BlogGridSidebar";
import BlogListSidebar from "./components/blog/BlogListSidebar";
import BlogDetails from "./pages/BlogDetails";
import Error from "./pages/Error";


// Import Css Here 
import './assets/scss/style.scss';
import './assets/css/custom.css';
import PrivacyPolicy from './elements/privacypolicy/PrivacyPolicy';
import TermsAndConditions from './elements/termsandconditions/TermsAndConditions';
import RefundAndCancellation from './elements/refundandcancellation/RefundAndCancellation';
import Ecommerce from './elements/ecommerce/Ecommerce';
import ErpAndCrm from './elements/erpandcrm/ErpAndCrm';
import WebsiteDevelopment from './elements/websitedevelopment/WebsiteDeveloment';
import SocialMedia from './elements/socialmedia/SocialMedia';
import DigiatalMarketing from './elements/digitalmarketing/DigitalMarketing';
import AppDevelopemnt from './elements/appdevelopment/AppDevelopment';
import UIUXDesigning from './elements/uiuxdesigning/UIUXDesigning';
import SeoAndContentWriting from './elements/seoandcontentwriting/SeoAndContentWriting';
import Animation2DAnd3D from './elements/animation2dand3d/Animation2DAnd3D';
import ArAndVr from './elements/arandvr/ArAndVr';
import MotionGraphics from './elements/motiongraphics/MotionGraphics';
import DI from './elements/di/DI';
import Editing from './elements/editing/Editing';
import CGI from './elements/cgi/CGI';
import ShippingPolicy from './elements/shippingpolicy/ShippingPolicy';



const App = () => {
    return (
        <Router>
            <PageScrollTop>
                <Switch>
                    <Route path={`${process.env.PUBLIC_URL + "/"}`} exact component={DigitalAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting"}`} exact component={HomeDefault}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business-consulting-2"}`} exact component={BusinessConsulting2}/>
                    <Route path={`${process.env.PUBLIC_URL + "/corporate"}`} exact component={Corporate}/>
                    <Route path={`${process.env.PUBLIC_URL + "/business"}`} exact component={Business}/>
                    <Route path={`${process.env.PUBLIC_URL + "/digital-agency"}`} exact component={DigitalAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/finance"}`} exact component={Finance}/>
                    <Route path={`${process.env.PUBLIC_URL + "/company"}`} exact component={Company}/>
                    <Route path={`${process.env.PUBLIC_URL + "/marketing"}`} exact component={Marketing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/travel-agency"}`} exact component={TravelAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/consulting"}`} exact component={Consulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/seo-agency"}`} exact component={SeoAgency}/>
                    <Route path={`${process.env.PUBLIC_URL + "/personal-portfolio"}`} exact component={PersonalPortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/event-conference"}`} exact component={EventConference}/>
                    <Route path={`${process.env.PUBLIC_URL + "/creative-portfolio"}`} exact component={CreativePortfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/freelancer"}`} exact component={Freelancer}/>
                    <Route path={`${process.env.PUBLIC_URL + "/international-consulting"}`} exact component={InternationalConsulting}/>
                    <Route path={`${process.env.PUBLIC_URL + "/startup"}`} exact component={Startup}/>
                    <Route path={`${process.env.PUBLIC_URL + "/web-agency"}`} exact component={WebAgency}/>

                    {/* Blog Part  */}
                    <Route path={`${process.env.PUBLIC_URL + "/blog"}`} exact component={BlogGridView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-view"}`} exact component={BlogListView}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-grid-sidebar"}`} exact component={BlogGridSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-list-sidebar"}`} exact component={BlogListSidebar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`} exact component={BlogDetails}/>
                    <Route path={`${process.env.PUBLIC_URL + "/category/:slug"}`} exact component={CategoryList}/>
                    <Route path={`${process.env.PUBLIC_URL + "/archive/:slug"}`} exact component={Author}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tag/:slug"}`} exact component={TagList}/>

                    <Route path={`${process.env.PUBLIC_URL + "/elements"}`} exact component={Elements}/>
                    <Route path={`${process.env.PUBLIC_URL + "/button"}`} exact component={Button}/>
                    <Route path={`${process.env.PUBLIC_URL + "/service"}`} exact component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services"}`} exact component={Service}/>
                    <Route path={`${process.env.PUBLIC_URL + "/counter"}`} exact component={CounterUp}/>
                    <Route path={`${process.env.PUBLIC_URL + "/progressbar"}`} exact component={Progressbar}/>
                    <Route path={`${process.env.PUBLIC_URL + "/social-share"}`} exact component={Social}/>
                    <Route path={`${process.env.PUBLIC_URL + "/team"}`} exact component={Team}/>
                    <Route path={`${process.env.PUBLIC_URL + "/testimonial"}`} exact component={Testimonial}/>
                    <Route path={`${process.env.PUBLIC_URL + "/timeline"}`} exact component={Timeline}/>
                    <Route path={`${process.env.PUBLIC_URL + "/accordion"}`} exact component={RnAccordion}/>
                    <Route path={`${process.env.PUBLIC_URL + "/tab"}`} exact component={Tab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/pricing"}`} exact component={Pricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/split"}`} exact component={Split}/>
                    <Route path={`${process.env.PUBLIC_URL + "/call-to-action"}`} exact component={CalltoAction}/>
                    <Route path={`${process.env.PUBLIC_URL + "/video-popup"}`} exact component={Video}/>
                    <Route path={`${process.env.PUBLIC_URL + "/gallery"}`} exact component={Gallery}/>
                    <Route path={`${process.env.PUBLIC_URL + "/contact"}`} exact component={Contact}/>
                    <Route path={`${process.env.PUBLIC_URL + "/brand"}`} exact component={Brand}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-tab"}`} exact component={AdvanceTab}/>
                    <Route path={`${process.env.PUBLIC_URL + "/advance-pricing"}`} exact component={AdvancePricing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/about-us"}`} exact component={AboutUs}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolios"}`} exact component={Portfolios}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation"}`} exact component={Animation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/animation2dand3d"}`} exact component={Animation2DAnd3D}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/arandvr"}`} exact component={ArAndVr}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/motiongraphics"}`} exact component={MotionGraphics}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/di"}`} exact component={DI}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/editing"}`} exact component={Editing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/animation/cgi"}`} exact component={CGI}/>
                    <Route path={`${process.env.PUBLIC_URL + "/privacypolicy"}`} exact component={PrivacyPolicy}/>
                    <Route path={`${process.env.PUBLIC_URL + "/termsandconditions"}`} exact component={TermsAndConditions}/>
                    <Route path={`${process.env.PUBLIC_URL + "/refundpolicy"}`} exact component={RefundAndCancellation}/>
                    <Route path={`${process.env.PUBLIC_URL + "/shippingpolicy"}`} exact component={ShippingPolicy}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/ecommerce"}`} exact component={Ecommerce}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/erpandcrm"}`} exact component={ErpAndCrm}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/websitedevelopment"}`} exact component={WebsiteDevelopment}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/socialmedia"}`} exact component={SocialMedia}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/digitalmarketing"}`} exact component={DigiatalMarketing}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/appdevelopment"}`} exact component={AppDevelopemnt}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/uiuxdesigning"}`} exact component={UIUXDesigning}/>
                    <Route path={`${process.env.PUBLIC_URL + "/services/seoandcontentwriting"}`} exact component={SeoAndContentWriting}/>

                    <Route path={`${process.env.PUBLIC_URL + "/error"}`} exact component={Error}/>
                    
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio"}`} exact component={Portfolio}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-three-column"}`} exact component={portfolioThreeColumn}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-full-width"}`} exact component={PortfolioFullWidth}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-grid-layout"}`} exact component={PortfolioGrid}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-box-layout"}`} exact component={PortfolioBoxLayout}/>
                    <Route path={`${process.env.PUBLIC_URL + "/portfolio-details/:id"}`} exact component={PortfolioDetails}/>


                </Switch>
            </PageScrollTop>
        </Router>
    )
}


export default App

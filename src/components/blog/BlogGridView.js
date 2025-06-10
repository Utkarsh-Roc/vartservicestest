import React from 'react';
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import BlogProp from './itemProp/BlogProp';
import HeaderOne from '../../common/header/HeaderOne';
import FooterFour from '../../common/footer/FooterFour';
import ScrollAnimation from 'react-animate-on-scroll';


const BlogGridView = () => {
  return (
    <>
      <SEO title="Blog List || Doob - React Business  Template" />
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
                    <h3 className="rn-sub-badge"><span className="theme-gradient">Our Company's Blog.</span></h3>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  delay="0500">
                  <h1 className="title display-one">Blogs</h1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  delay="1000">
                  <img src='illustrations/i22.png' />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}>
                <div className="row mt_dec--30">
                  <BlogProp column="col-lg-4 col-md-6 col-12 mt--30" StyleVarProp="box-card-style-default" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
          {/* End Blog Area  */}
        </div>
        <FooterFour />
      </main>
    </>
  )
}
export default BlogGridView;
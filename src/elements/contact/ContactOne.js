import React from 'react';
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiMapPin } from "react-icons/fi";
import ScrollAnimation from 'react-animate-on-scroll';

const ContactOne = () => {
    return (
        <>
            <div className="row row--15">
            <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}
                  delay="0500">
                <div className="col-lg-12">
                    <div className="rn-contact-address mt_dec--30">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">INDIA</h4>
                                        <p>6 Business Point, Paliram Rd, Lohana Colony, Andheri West, Mumbai, Maharashtra 400058, India</p>
                                        <p><a href="mailto: info@vartservices.com "> info@vartservices.com </a></p>
                                        <p><a href="tel:9920615137"> +91 99206 15137 </a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">USA</h4>
                                        <p>16 Middleneck Road, #1083 Great Neck, NY 11021, USA</p>
                                        <p><a href="mailto:info@vartservices.com "> info@vartservices.com</a></p>
                                        <p><a href="tel:18602612601">+1 860 261 2601 </a></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">UK</h4>
                                        <p><a href="mailto: info@vartservices.com">info@vartservices.com</a></p>
                                        <p><a href="tel:1223926666">+44 1223 92 6666</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </div>

            <div className="row mt--40 row--15">
                <div className="col-lg-7">
                    <ContactForm formStyle="contact-form-1" />
                </div>
                <div className="col-lg-5 mt_md--30 mt_sm--30">
                    <div className="google-map-style-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7253000690175!2d72.84184411490185!3d19.11970328706292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9ec60b25171%3A0x9cfe4b0f91948268!2sV-ART%20SERVICES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1672125339592!5m2!1sen!2sin" width={"100%"} height={"100%"} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactOne;
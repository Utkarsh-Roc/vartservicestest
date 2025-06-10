import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Link} from "react-router-dom";

const dataList = [
    {
        image: '/illustrations/i9.png',
        title: '',
        description: ''
    }
]

const dataList2 = [
    {
        image: '/illustrations/i10.png',
        image1: '/illustrations/i10.png',
        title: '',
        description: ''
    }
]

const dataList3 = [
    {
        image: '/illustrations/i11.png',
        title: '',
        description: ''
    }
]

const TabThree = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-lg-12">
                        <Tabs>
                            <div className="row row--30 align-items-center">
                                <div className="col-lg-12">
                                    <div className="rn-default-tab style-three">
                                        <div className="tab-button-panel">
                                            <TabList className="tab-button">
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Why Choose Us</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Who We Are</button>
                                                    </div>   
                                                </Tab>
                                                <Tab>
                                                    <div className="rn-tab-button">
                                                        <button>Our Vision</button>
                                                    </div>   
                                                </Tab>
                                            </TabList>
                                        </div>

                                        <div className="tab-content-panel">
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-6">
                                                                <div className="section-title">
                                                                    <h4 className="title">AN UNCOMMON APPROACH TO COMMON GOODS</h4>
                                                                    <p>While some promotional products companies are only in the business of selling products, we understand that you often need an uncommon approach to common goods. Maybe it’s a unique theme, special packaging or a design enhancement to make a common product a vehicle for marketing or a gift of goodwill. This is what sets us apart. Our campaigns effectively promote your company at events and trade shows, recognize your employees, show your customers how much you appreciate their business and much, much more. We are here to help you get your full RETURN ON INVESTMENT (R.O.I.) and more! It has been proven time and time again that marketing and promoting your business, group or organization increases community awareness and overall sales growth! Want to measure your ROI? We can make that happen too!</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>
                                            
                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                            <div className="col-lg-6">
                                                                <div className="section-title">
                                                                    <h4 className="title">We at V-Art Services PVT. LTD.</h4>
                                                                    <p>Are an experienced and passionate team of professionals that live and breathe brand. All our services are fully integrated to exceed your business requirements.We are pioneer in presenting genuine & inventive web design, web development, and graphic design solutions in slicing, adaptation, assimilation and customization services. From conceptualization to full website development implementation we have serviced our clients in wide range of industries whether it’s a start up or a big company. From PSD to HTML, PSD to Magento, WordPress,and Shopify our web development services come with unmatched customer support. We embrace latest technologies to meet your business challenges precisely.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                    {dataList2.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                            <TabPanel>
                                                <div className="rn-tab-content">
                                                    <div className="inner">
                                                        <div className="row align-items-center row--30">
                                                        <div className="col-lg-6">
                                                                <div className="section-title">
                                                                    <h4 className="title">Web Design and Development Company</h4>
                                                                    <p>Is to create innovative products and deliver unique services which process quality and customer satisfaction to add value to your business. Our dedicated teams especially focus on the needs and requirements of the clients to build strong and long-term relations. With the aim to meet the clients demands, our teamwork to bring successful growth for various businesses.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 mt_md--30 mt_sm--30">
                                                                <div className="row row--15 mt_dec--30 service-wrapper">
                                                                {dataList3.map( (val , i) => (
                                                                        <div key={i}>
                                                                            <div className="text-left">
                                                                                <div className="inner">
                                                                                    <div className="image">
                                                                                        <Link to="#service">
                                                                                            <img src={`${val.image}`} alt="card Images" />
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPanel>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Tabs>
                    </div>
                </div>
        </div>
    )
}

export default TabThree

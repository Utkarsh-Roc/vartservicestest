import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/illustrations/i15.png',
        title: 'E-Commerce',
        // description: 'Trading of goods and services on the internet.',
        link: '/services/ecommerce'
    },
    {
        image: '/illustrations/i16.png',
        title: 'ERP & CRM',
        // description: 'When ERP and CRM systems are integrated, they can share data and information that can be used to improve business processes.',
        link: '/services/erpandcrm'
    },
    {
        image: '/illustrations/i10.png',
        title: 'Website Development',
        // description: 'When it comes to websites, it’s all about simplicity. From your layout to design to CTAs to development, keep it clean and simple.',
        link: '/services/websitedevelopment'
    },
    {
        image: '/illustrations/i17.png',
        title: 'Social Media',
        // description: 'We are ready to serve you differently and bring your product to social media platforms.',
        link: '/services/socialmedia'
    },
    {
        image: '/illustrations/i14.png',
        title: 'Digital Marketing',
        // description: 'Component of marketing that uses the Internet and online based digital technologies to promote products and services.',
        link: '/services/digitalmarketing'
    },
    {
        image: '/illustrations/i9.png',
        title: 'App Development',
        // description: 'Process of creating software applications that run on a mobile device,',
        link: '/services/appdevelopment'
    },
    {
        image: '/illustrations/i11.png',
        title: 'UI/UX Designing',
        // description: 'Designs refers to the aesthetic elements by which people interact with a product.',
        link: '/services/uiuxdesigning'
    },
    {
        image: '/illustrations/i12.png',
        title: 'SEO & Content Writing',
        // description: 'Content isn’t just about keywords and SEO. You want every piece of online content to offer something unique and useful to your readers.',
        link: '/services/seoandcontentwriting'
    }
]
const ServiceThree = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" style={{height: "200px"}} />
                                </div>
                                <div className="content">
                                    <h4 className="title my-2"><Link to={`${val.link}`} dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                    <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceThree;
import React from 'react';
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        image: '/illustrations/i22.png',
        title: 'E-Commerce',
        link : '/services/ecommerce'
    },
    {
        image: '/illustrations/i20.png',
        title: 'ERP & CRM',
        link: '/services/erpandcrm'
    },
    {
        image: '/illustrations/i25.png',
        title: 'Website Development',
        link: '/services/websitedevelopment'
    },
    {
        image: '/illustrations/i24.png',
        title: 'Social Media',
        link: '/services/socialmedia'
    },
    {
        image: '/illustrations/i19.png',
        title: 'Digital Marketing',
        link: '/services/digitalmarketing'
    },
    {
        image: '/illustrations/i26.png',
        title: 'App Development',
        link: '/services/appdevelopment'
    }
]
const ServiceFive = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="inner">
                                <div className="content">
                                    <h4 className="title">
                                        <Link to={val.link} dangerouslySetInnerHTML={{__html: val.title}}></Link>
                                    </h4>
                                    <p className="description" dangerouslySetInnerHTML={{__html: val.description}}></p>
                                </div>
                                <div className="image">
                                    <img src={`${val.image}`} alt="card Images" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceFive;
import React from 'react';
import { FiCast,  FiBox, FiCompass, FiFilm, FiEdit3, FiVideo } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
    {
        icon: <FiBox />,
        title: '2D & 3D Animation',
        description: '2D animation implies that the object is two dimensional. 2D...',
        link: '/animation/animation2dand3d'
    },
    {
        icon: <FiCast />,
        title: 'AR & VR',
        description: 'The distinctions between VR and AR come down to the...',
        link: '/animation/arandvr'
    },
    {
        icon: <FiCompass />,
        title: 'Motion Graphics',
        description: 'If we were to define motion graphics, simply put, they...',
        link: '/animation/motiongraphics'
    },
    {
        icon: <FiFilm />,
        title: 'DI',
        description: 'Digital intermediate (typically abbreviated to DI) is a motion picture...',
        link: '/animation/di'
    },
    {
        icon: <FiEdit3 />,
        title: 'Editing',
        description: 'Editing is the process of selecting and preparing written, photographic...',
        link: '/animation/editing'
    },
    {
        icon: <FiVideo />,
        title: 'CGI',
        description: 'At the most basic level, Computer-Generated Imagery (CGI) is the...',
        link: '/animation/cgi'
    },
]

const ServiceOne = ({textAlign, serviceStyle}) => {
    return (
        <div className="row row--15 service-wrapper">
              {ServiceList.map( (val , i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`service ${serviceStyle} ${textAlign}`}>
                            <div className="icon">
                                {val.icon}
                            </div>
                            <div className="content">
                                <h4 className="title w-600">
                                    <Link to={val.link} dangerouslySetInnerHTML={{__html: val.title}}></Link></h4>
                                <p className="description b1 color-gray mb--0" dangerouslySetInnerHTML={{__html: val.description}}></p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default ServiceOne;
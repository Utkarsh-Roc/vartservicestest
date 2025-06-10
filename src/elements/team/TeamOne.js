import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'rohit',
        name: 'Rohit Jaiswal',
        designation: 'CEO',
        location: 'Mumbai, India', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/rohit-jaiswal-b4904aa0/'
            },
        ]
       
    },
    {
        image: 'kafil',
        name: 'Kafil Baloch',
        designation: 'CO-FOUNDER & CREATIVE DIRECTOR',
        location: 'Mumbai, India', 
        // description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiLinkedin />,
                url: 'https://www.linkedin.com/in/kafil-baloch-082a805b/'
            }
        ]
      
    },
]


const TeamOne = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`rn-team ${teamStyle}`}>
                        <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        animateOnce={true}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <h2 className="title">{data.name}</h2>
                                    <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                    <span className="team-form">
                                        <img src="./images/team/location.svg" alt="Corporate React Template" />
                                        <span className="location">{data.location}</span>
                                    </span>
                                    <p className="description">{data.description}</p>

                                    <ul className="social-icon social-default icon-naked mt--20" >
                                        {data.socialNetwork.map((social, index) =>
                                            <li key={index}><a href={`${social.url}`} target="_blank">{social.icon}</a></li>
                                        )}
                                    </ul>
                                </figcaption>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamOne;

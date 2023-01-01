import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.section`
  padding: 50px;
  text-align: center;
`;

const AboutAvatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
`;

const AboutName = styled.h1`
  font-size: 36px;
  margin-bottom: 10px;
  color: #333;
`;

const AboutBio = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #666;
`;

const OurMission = styled.h2`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
  color: #370054;
`;

const OurVision = styled.h2`
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.5;
  color: #370054;
`;

const Mission = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
`;

const Vision = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
`;


const About = () => (
  <AboutWrapper>
    <AboutAvatar src="./images/slider1.jpg" alt="Avatar" />
    <AboutName>About Us</AboutName>
    <AboutBio>
      Carriastic is trying to solve the Unemployment problem initially in Bangladesh and later on globally.
      We are basically a job placement platform for graduates and understudies, especially, focusing on their
      careers for ensuring job placement in the competitive job market. Carriastic is  the bridge between job
      seekers and employee seekers. Job seekers will get their desired job and vendors will ensure qualified
      employees without hassle. Our main motto is creating quality full Human resources for the companies.
      We are ensuring the quality of our candidates’ through various training and skill development programs.
      Throughout the months, we run these training programs with our trainers. As a result, we enhance the quality
      and skills of the Human resources for getting jobs along with it will increase the productivity of concerns
      and reduce the unemployment problem in Bangladesh.
    </AboutBio>

    <OurMission>Our Mission</OurMission>
    <Mission>
      Our mission is to ensure qualified candidates for our stakeholders and make the candidates eligible to start
      their very first career through various skill development programs. Our main focus is to create a platform that
      can create a bridge among the concerns and applicants.
    </Mission>

    <OurVision>Our Vision</OurVision>
    <Vision>
      Our vision is to create a sustainable qualified human resource to reduce the unemployment problem nationally and globally.
      Though initially we are trying to reduce the unemployment problem in Bangladesh, we will expand our network to an international
      level. We will ensure local employment, global employment, and remote jobs as well. Moreover, our organization will create a
      positive effect on the global or local environment, community, society, or economy.

    </Vision>

  </AboutWrapper>
);

export default About;

import React from 'react';
import './services.css';
import Image1 from '../components/assets/service-1.svg';
import Image2 from '../components/assets/folder.svg';
import Image3 from '../components/assets/service-3.svg';
import Image4 from '../components/assets/chart.svg';
import Image5 from '../components/assets/business.svg';
import Image6 from '../components/assets/mobile.svg';
import Image7 from '../components/assets/idea.svg';
import Image8 from '../components/assets/aim.svg';
import Image9 from '../components/assets/man.svg';


const data = [

  {
    id: 1,
    image: Image1,
    title: 'Website Design and development',
    description: 'Carriastic provides website design and development services,creating customized solutions for clients seeking to improve their online presence and attract new customers. This includes designing and developing websites that are user-friendly,visually appealing, and optimized for search engines.'
    
  },
  {
    id: 2,
    image: Image2,
    title: 'Recruitment and staffing',
    description: 'We help our clients attract and retain top talent by offering a range of recruitment and staffing solutions, including talent sourcing, candidate screening, and interview coordination.'
    
  },
  {
    id: 3,
    image: Image3,
    title: 'Digital marketing services',
    description: 'Carriastic offers digital marketing services, providing creative and effective solutions for clients seeking to improve their online presence, attract new customers, and grow their businesses. This includes services such as search engine optimization (SEO), social media marketing, email marketing, content marketing, and other digital marketing strategies.'
    
  },

  {
    id: 4,
    image: Image4,
    title: 'Training and development',
    description: 'We offer customized training and development programs to help employees enhance their skills, increase their productivity, and advance their careers.',
    
  },
  {
    id: 5,
    image: Image5,
    title: 'Employee relations',
    description: ' We provide guidance and support on employee relations issues, including conflict resolution, disciplinary actions, and policy development.',
    
  },
  {
    id: 6,
    image: Image6,
    title: 'IT project outsourcing',
    description: 'Carriastic provides IT project outsourcing services to help businesses access specialized skills and expertise without having to hire full-time staff. This includes software development, web development, mobile app development, and other IT services.'
  },

  {
    id: 7,
    image: Image7,
    title: 'E-commerce solutions',
    description: 'Carriastic offers e-commerce solutions, helping businesses set up online stores and sell their products or services online. This includes designing and developing e-commerce websites, setting up payment gateways, and providing ongoing support and maintenance.',
    
  },
  {
    id: 8,
    image: Image8,
    title: 'Career counseling',
    description: 'Carriastic provides career counseling services to help individuals identify their strengths, skills, and interests, and explore potential career paths that align with their goals. This includes career assessments, job market research, and personalized career planning.',
    
  },
  {
    id: 9,
    image: Image9,
    title: 'HR strategy and consulting',
    description: 'We work with organizations to develop HR strategies that align with their business goals and objectives. Our consulting services cover a range of HR topics,including compensation and benefits, HR policies and procedures, and HR technology.'
  }


]

const Services = () => {

  return (
    <section className="services container section" id="services"> 
    <h2 className="section__title">Our Services</h2>

      <div className= "services__container grid"> {data.map (({ id, image, title, description }) => {
        return (
          <div className="services__card" key={id}> 
          <img src={image} alt="" className="services__img" />
            <h3 className="services__title">{title}</h3>
             <p className="services__description">{description}</p>
          </div>
        );
      })}
      </div>
    </section>
  );
}



export default Services;
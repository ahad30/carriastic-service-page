import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../GlobalStyle';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import Home from '../components/Home';
import About from '../components/About';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Cv from '../components/Cv';
import PInfo from '../components/PersonalInfo';
import Summary from '../components/Summary';
import Contact from '../components/Contact';
import Footer from '../components/footer/Footer';

const Main = () => {
 
    return (
        <div>
        {/* <BrowserRouter> */}
          <Header />
          <Outlet></Outlet>
          {/* <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/career' element={<Cv/>}>
              <Route index element={<PInfo/>}/>
              <Route path="/career/PersonalInfo" element={<PInfo/>}/>
              <Route path="/career/Summary" element={<Summary/>}/>
              <Route path="/Workexperience" element={<WorkExperience/>}/>
              <Route path="/Education" element={<Education/>}/>
              <Route path="/Language" element={<Language/>}/>
              <Route path="/Areasofexperties" element={<Areasofexperties/>}/>
              <Route path="/Courses" element={<Courses/>}/>
              <Route path="/Certifications" element={<Certifications/>}/>
              <Route path="/Projects" element={<Projects/>}/>
              <Route path="/Extracurricularactivities" element={<Extracurricularactivities/>}/>
              <Route path="/Reference" element={<Reference/>}/> 
            </Route>
            <Route path='/contact' element={<Contact />} />
          </Routes> */}
          <Footer />
        {/* </BrowserRouter> */}
        </div>
    );
};

export default Main;
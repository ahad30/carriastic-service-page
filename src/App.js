import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import './App.css';
import Cv from './components/Cv';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import PInfo from './components/PersonalInfo';
import Summary from './components/Summary';
import WorkExperience from './components/Workexperience';
import Education from './components/Education';
import Language from './components/Language';
import Areasofexperties from './components/Areasofexperties';
import Courses from './components/Courses';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Extracurricularactivities from './components/Extracurricularactivities';
import Reference from './components/Reference';
import Main from './layouts/Main';
import Profile from './layouts/Profile';


const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31,35, 0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"services",
          element:<Services/>
        },
        {
          path:"blog",
          element:<Blog/>
        },
        {
          path:"career",
          element:<Profile/>,
          children:[
            {
              path:"PersonalInfo", element:<PInfo/>
            },
            {path:"Summary", element:<Summary/>},
            {path:"Workexperience", element:<WorkExperience/>},
            {path:"Education", element:<Education/>},
            {path:"Language", element:<Language/>},
            {path:"Areasofexperties", element:<Areasofexperties/>},
            {path:"Courses", element:<Courses/>},
            {path:"Certifications", element:<Certifications/>},
            {path:"Projects", element:<Projects/>},
            {path:"Extracurricularactivities", element:<Extracurricularactivities/>},
            {path:"Reference", element:<Reference/>}
          ]
        }
      ]
    }
  ]);


  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router}>

    </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
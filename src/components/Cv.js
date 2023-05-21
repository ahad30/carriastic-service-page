import React, {useState} from 'react';
import { NavLink } from "react-router-dom";


function Cv() {
  const [activeIndex, setActiveIndex] = useState(0);
 
  

  const buttons = [
    { title: "Personal Info", path: "PersonalInfo" },
    { title: "Summary", path: "Summary" },
    { title: "Work Experience", path: "Workexperience" },
    { title: "Education", path: "Education" },
    { title: "Language", path: "Language" },
    { title: "Areas of Expertise", path: "Areasofexperties" },
    { title: "Courses", path: "Courses" },
    { title: "Certifications", path: "Certifications" },
    { title: "Projects", path: "Projects" },
    { title: "Extracurricular Activities", path: "Extracurricularactivities" },
    { title: "Reference", path: "Reference" }
  ];

  return (
    <div style={{backgroundColor:'skyblue'}}>
      <section  style={{ backgroundColor: "#7A52C1", padding: "20px" }}>
      <h1 className='d-flex justify-content-center cvh1' style={{ color: "White" }}> Carriastic Resume Builder</h1>
      </section>

      <section style={{ backgroundColor: "#7A52C1", padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            {buttons.map((button, index) => (
              <NavLink to={button.path} key={index}>
                <button className="trackbuttons"
                  style={{ backgroundColor: activeIndex === index ? "#7A52C1" : "#fff", color: activeIndex === index ? "#fff" : "#000" }}
                  onClick={() => setActiveIndex(index)}
                >
                  {button.title}
                </button>
              </NavLink>
            ))}
          </div>

          <div>
            <button className='previewbtn btn btn-warning font-weight-bold' >Preview</button>
            
          </div>
        </div>
      </section>

  </div> 
  );
}

export default Cv;

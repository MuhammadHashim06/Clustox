import { useState } from "react";
import cutomsoftware from '../../../public/customsoftware.png'
import devops from '../../../public/devops.png'
import legacy from '../../../public/legacy.png'
import mobileapp from '../../../public/mobileapp.png'
import qa from '../../../public/qa.png'
import webapp from '../../../public/webapp.png'
import "./Service.css";

export default function Service() {
  const sofware = [
    {
      imageurl : cutomsoftware,
      head: "Custom Software Development",
      para: "Power your business with enterprise-grade solutions tailored to your specific needs.",
    },
    {imageurl : webapp,
      head: "Web App Development",
      para: "Scale your business with our dedicated web app development services.",
    },
    {imageurl : mobileapp,
      head: "Mobile App Development",
      para: "Enable seamless user experiences with superior digital mobile app development.",
    },
    {imageurl : devops,
      head: "DevOps",
      para: "Automate, integrate & deliver faster with diverse and comprehensive DevOps solutions.",
    },
    {imageurl : legacy,
      head: "Legacy Software Modernization",
      para: "Regain the effectiveness of apps with upgraded & strategic legacy software modernization.",
    },
    {imageurl : qa,
      head: "QA & Testing",
      para: "Streamline your testing & ship bulletproof software with state-of-the-art QA & Testing.",
    },
  ];

  const product = [
    // ...other service data for product development
  ];

  const advisory = [
    // ...other service data for advisory/consultancy
  ];

  const techSolutions = [
    // ...other service data for technology solutions
  ];

  const emergingTech = [
    // ...other service data for emerging tech
  ];

  const [detail, setDetail] = useState(sofware);
  const [activeIndex, setActiveIndex] = useState(0);

  function switchInfo(index, type) {
    setActiveIndex(index);
    switch (type) {
      case "software":
        setDetail(sofware);
        break;
      case "product":
        setDetail(product);
        break;
      case "advisory":
        setDetail(advisory);
        break;
      case "techSolutions":
        setDetail(techSolutions);
        break;
      case "emergingTech":
        setDetail(emergingTech);
        break;
      default:
        setDetail(sofware);
        break;
    }
  }

  return (
    <div className="landservice">
      <div className="heading">
        <h1>
          <span>Services</span> <span> We Offer </span>
        </h1>
      </div>
      <div className="navlinks">
        <ul>
          <li
            className={activeIndex === 0 ? "active" : ""}
            onClick={() => switchInfo(0, "software")}
          >
            <i className="fas fa-code"></i> SOFTWARE DEVELOPMENT
          </li>
          <li
            className={activeIndex === 1 ? "active" : ""}
            onClick={() => switchInfo(1, "product")}
          >
            <i className="fas fa-cogs"></i> PRODUCT DEVELOPMENT
          </li>
          <li
            className={activeIndex === 2 ? "active" : ""}
            onClick={() => switchInfo(2, "advisory")}
          >
            <i className="fas fa-comments"></i> ADVISORY/CONSULTANCY
          </li>
          <li
            className={activeIndex === 3 ? "active" : ""}
            onClick={() => switchInfo(3, "techSolutions")}
          >
            <i className="fas fa-laptop-code"></i> TECHNOLOGY SOLUTIONS
          </li>
          <li
            className={activeIndex === 4 ? "active" : ""}
            onClick={() => switchInfo(4, "emergingTech")}
          >
            <i className="fas fa-rocket"></i> EMERGING TECH
          </li>
        </ul>
      </div>
      <div className="detail">
        {detail.map((d, index) => (
          <div className="detailbox" key={index}>
          <img src={d.imageurl} alt="Logo.png" />
            <h2 className="font-bold text-lg">{d.head}</h2>
            <p className="text-md text-slate-700">{d.para}</p>
            <div className="linkbutton">
              <button className="chat">Let&lsquo;s Chat <i className="fas fa-arrow-right"></i> </button>
              <button>Learn more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

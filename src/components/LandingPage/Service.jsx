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
    {
      imageurl : cutomsoftware,
      head: "Product Strategy",
      para: "Elevate Your Product Strategy, enabled by design and data to get competitive edge",
    },
    {imageurl : webapp,
      head: "Product Design",
      para: "Boost your digital products and keep your prospects hooked with our product design services.",
    },
    {imageurl : mobileapp,
      head: "Discovery Workshop",
      para: "Validate your product ideas and scope with minimum risks and investments.",
    },
    {imageurl : devops,
      head: "Clustox Product Studio",
      para: "Know the right potential of your project and lead the industry with future-ready products.",
    },
    {imageurl : legacy,
      head: "POC/MVP Development",
      para: "Validate your ideas with proof of concept using a rigorous testing road map.",
    },
    {imageurl : qa,
      head: "Augmented product",
      para: "Redefine industry standards and empower your business through elite augmented products.",
    },
  ];

  const advisory = [
    {
      imageurl : cutomsoftware,
      head: "Digital Transformation",
      para: "Drive impact through a digital-first strategy with Clustox’ digital transformation services.",
    },
    {imageurl : webapp,
      head: "Product development & growth",
      para: "Accelerate your digital product success with test-and-learn growth strategies",
    },
    {imageurl : mobileapp,
      head: "Process Consulting & Audit",
      para: "Carve your path to excellence through world-class consultancy services.",
    },
    {imageurl : devops,
      head: "Technology leadership advisory",
      para: "Shape your product’s path to perfection through visionary leadership advisory.",
    }, ];

  const techSolutions = [
    {
      imageurl : cutomsoftware,
      head: "Mulesoft",
      para: "Fuel your digital capabilities with our next-gen Mulesoft solutions.",
    },
    {imageurl : webapp,
      head: "AWS",
      para: "Scale your business growth by focusing on winning customers through innovative solutions.",
    },
    {imageurl : mobileapp,
      head: "Shopify",
      para: "Accelerate enterprise-grade capabilities and deliver conversion-focused experiences.",
    },
    {imageurl : devops,
      head: "Power BI",
      para: "Transform your data into confident decisions and actionable insights with AI capabilities.",
    },
    {imageurl : legacy,
      head: "TIBCO",
      para: "Empower your business with enterprise-grade and high-quality TIBCO solutions.",
    },
    {imageurl : qa,
      head: "Managed IT services",
      para: "Keep your IT infrastructure scalable and stable with Clustox managed IT services.",
    },  ];

  const emergingTech = [
    {
      imageurl : cutomsoftware,
      head: "Data Science ",
      para: "Get a steady stream of data democratization and insights for better decision making.",
    },
    {imageurl : webapp,
      head: "AI and ML",
      para: "Supercharge your innovation engine with next-gen AI-powered technologies",
    },
    {imageurl : mobileapp,
      head: "Blockchain",
      para: "Join the revolutionizing industry of passionate entrepreneurs with accelerating blockchain.",
    },
    {imageurl : devops,
      head: "Internet of Things",
      para: "Drive sustainability by value-centered IoT solutions and build multi-level data pipelines.",
    },
    {imageurl : legacy,
      head: "Generative AI",
      para: "Use predictive capabilities to paint a vision of limitless possibilities and innovation.",
    },
    {imageurl : qa,
      head: "Web3",
      para: "Utilize peer-to-peer decentralized networks with our futuristic and innovative Web3 expertise.",
    },  ];

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

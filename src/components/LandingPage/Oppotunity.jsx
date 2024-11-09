import "./Opportunity.css";
import arrow from "/public/opportunityarraow.png";
import opportunityimage from "/public/home-opportunity-img-bg.webp.png";
import opportunityicon from "/public/oprtunityicon.png";
export default function Oppotunity() {
  return (
    <div className="landopportunity">
      <div className="leftbox">
        <h1 className="title font-bold text-4xl">
          Versatile <span>Collaboration Opportunities for All</span>
        </h1>
        <div className="opportunity">
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">Startups</h1>
              <p className="text-md">
                Unleash your product potential with unlimited tech support from
                MVP to marketing and elevate your digital journey
              </p>
              <h1 className="font-bold">Discuss your idea</h1>
            </div>
          </div>
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              {" "}
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">Scaleups</h1>
              <p>
                Empower the future of your growth companies and accelerate your
                innovation through highly qualified specialists.{" "}
              </p>
              <h1 className="font-bold">Share your project insights</h1>
            </div>
          </div>
          <div className="card">
            <img className="arrow" src={arrow} />
            <div className="logo">
              {" "}
              <img src={opportunityicon} />
            </div>
            <div className="content">
              <h1 className="font-bold">SMBs & Enterprises</h1>
              <p>
                Automate your business processes with seamless software
                solutions through smartly tailored tech collaboration.{" "}
              </p>
              <h1 className="font-bold">Connect with our experts now</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="rightbox">
        <img src={opportunityimage} alt="" />
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="linksandinfo">
      <div className="upperlinks">
        <div className="Emergingtech service ">
          <h1 className="font-bold"> Emerging Tech </h1>
          <ul>
            <Link to="">
              <li>Blockchain</li>{" "}
            </Link>
            <Link to="">
              <li>Internet of Things</li>{" "}
            </Link>
            <Link to="">
              <li>AI and ML</li>{" "}
            </Link>
            <Link to="">
              <li>Generative AI</li>{" "}
            </Link>
          </ul>
        </div>

        <div className="productengineering service">
          <h1 className="font-bold">Product Engineering</h1>
          <ul>
            <Link to="">
              <li>Custom Software Development</li>{" "}
            </Link>
            <Link to="">
              <li>Web App Development</li>{" "}
            </Link>
            <Link to="">
              <li>Mobile App Development</li>{" "}
            </Link>
            <Link to="">
              <li>Front-end Development</li>{" "}
            </Link>
            <Link to="">
              <li>Back-end Development</li>{" "}
            </Link>
            <Link to="">
              <li>DevOps</li>{" "}
            </Link>
          </ul>
        </div>

        <div className="solutions service">
          <h1 className="font-bold">Solutions </h1>
          <ul>
            <Link to="">
              <li>AWS</li>{" "}
            </Link>
          </ul>
        </div>
        </div>
        <div className="lowerlinks">
          <Link to="" > Career </Link> | <Link to="/case-studies" > Case Studies </Link> | <Link to="" >Blog</Link> | <Link to="" >Press Releases</Link> | <Link to="" >Technical Guides</Link> 
        </div>
        <div className="copyright">
          <h1 className="font-bold">Clustox © 2012 - 2024. All rights reserved.</h1>
        </div>
      </div>


      <div className="contactinfo">
        <h1 className="font-bold">Get in Touch</h1>
        <div className="contactbuttons"> <button>Contact us</button>  <button>Schedule a meeting</button> </div>
        <div className="contactdetail">
      <ul>
        <li>
          <i className="fas fa-phone-alt"></i> +1-718-593-4362
        </li>
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:sales@clustox.com">sales@clustox.com</a>
        </li>
        <li>
          <i className="fas fa-map-marker-alt"></i>
          Clustox LLC, 8 The Green STE A, Dover, DE 19901, United States
        </li>
      </ul>
    </div>

    <div className="social-media">
        <h1 className="font-bold">Follow us on</h1>
        <ul className="social-media-list">
          <li>
            <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i> 
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> 
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> 
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> 
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}

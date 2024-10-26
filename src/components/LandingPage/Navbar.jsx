import { useEffect } from "react";
import "./Navbar.css";
import { useState } from "react";
export default function Navbar() {


  const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
      console.log(window.scrollY);
      
        setIsScrolled(window.scrollY > 20);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo text-3xl">Clusto<span className="text-green-600">X</span></div>
      <div className="links">
        <ul>
          <a href="">
            <li>Services</li>
          </a>
          <a href="">
            <li>Case Studies</li>
          </a>
          <a href="">
            <li>Hire Expert</li>
          </a>
          <a href="">
            <li>Resources</li>
          </a>
        </ul>
      </div>
      <div className="callmeeting">
        <button >Schedule a Call</button>
      </div>
    </div>
  );
}

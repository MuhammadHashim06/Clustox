// import { useEffect } from "react";
// import "./Navbar.css";
// import { useState } from "react";
// export default function Navbar() {


//   const [isScrolled, setIsScrolled] = useState(false);

//     const handleScroll = () => {
//       console.log(window.scrollY);
      
//         setIsScrolled(window.scrollY > 20);
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//   return (
//     <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
//       <div className="logo text-3xl">Clusto<span className="text-green-600">X</span></div>
//       <div className="links">
//         <ul>
//           <a href="">
//             <li>Services</li>
//           </a>
//           <a href="">
//             <li>Case Studies</li>
//           </a>
//           <a href="">
//             <li>Hire Expert</li>
//           </a>
//           <a href="">
//             <li>Resources</li>
//           </a>
//         </ul>
//       </div>
//       <div className="callmeeting">
//         <button >Schedule a Call</button>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import "./Navbar.css";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <div className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo text-3xl">
        Clusto<span className="text-green-600">X</span>
      </div>

<div className="links" >
      {isMobile ? (
        <Button
          type="primary"
          icon={<MenuOutlined />}
          onClick={toggleDrawer}
          className="menu-button"
        />
      ) : (
        <div className="links">
          <ul>
            <a href="#">
              <li>Services</li>
            </a>
            <a href="#">
              <li>Case Studies</li>
            </a>
            <a href="#">
              <li>Hire Expert</li>
            </a>
            <a href="#">
              <li>Resources</li>
            </a>
          </ul>
        </div>
      )}

      <div className="callmeeting">
        <button>Schedule a Call</button>
      </div>

      <Drawer
        title="Navigation"
        placement="right"
        onClose={toggleDrawer}
        visible={isDrawerVisible}
      >
        <ul className="drawer-links">
          <a href="#">
            <li>Services</li>
          </a>
          <a href="#">
            <li>Case Studies</li>
          </a>
          <a href="#">
            <li>Hire Expert</li>
          </a>
          <a href="#">
            <li>Resources</li>
          </a>
        </ul>
      </Drawer>
      </div>
    </div>
  );
}

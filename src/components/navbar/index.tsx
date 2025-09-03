import { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo.svg";
import { navTabs } from "../../data";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import "./navbar.css";

interface NavTab {
  id: string;
  name: string;
  type: "scroll" | "link" | "route";
  scrollTo?: string;
}

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1000);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setVisible(currentScrollPosition > 145);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(".navbar", { y: -250 }, { y: 0, top: 0 });
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open && (
        <div className="sidebar_overlay" onClick={() => setOpen(false)}></div>
      )}
      <img src={Logo} alt="" className="!w-20 !h-auto" />
      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div
          className="icon_container cancel_btn"
          onClick={() => setOpen(false)}
        >
          <FaTimes />
        </div>

        {navTabs.map((tab: NavTab, index: number) => {
          const isActive =
            location.pathname === tab.id ||
            (tab.id === "/" && location.pathname === "/");

          if (isHome && tab.type === "scroll") {
            return (
              <ScrollLink
                key={index}
                to={tab.id}
                className={`tab ${isActive ? "active" : ""}`}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-70}
                onClick={() => setOpen(false)}
              >
                <p>{tab.name}</p>
              </ScrollLink>
            );
          } else if (tab.type === "link") {
            return (
              <ScrollLink
                key={index}
                to={tab.id}
                className={`tab ${isActive ? "active" : ""}`}
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.scrollTo || "");
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </ScrollLink>
            );
          } else {
            return (
              <RouterLink
                key={index}
                to={tab.id}
                className={`tab ${isActive ? "active" : ""}`}
                onClick={() => {
                  localStorage.setItem("scrollTo", tab.id);
                  setOpen(false);
                }}
              >
                <p>{tab.name}</p>
              </RouterLink>
            );
          }
        })}

        {isMobile && (
          <ScrollLink
            to="/contact-detail"
            className="tab contact_tab_mobile"
            smooth={true}
            spy={true}
            offset={-70}
            onClick={() => setOpen(false)}
          >
            Daftar
          </ScrollLink>
        )}
      </div>

      <div className="box buttons">
        {!isMobile && (
          <ScrollLink
            to="/contact-detail"
            className="btn contact_btn"
            smooth={true}
            spy={true}
            offset={-70}
          >
            Daftar
          </ScrollLink>
        )}
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../public/assets/logo.svg";
import { navTabs2 } from "../../data";
import type { NavTab } from "../../data";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import gsap from "gsap";
import "./NavbarDetail.css";

const NavbarDetail: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  // Scroll detection
  const handleScroll = () => {
    setVisible(window.scrollY > 145);
  };

  // Dropdown toggle
  const handleDropdownClick = (tabId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === tabId ? null : tabId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => setIsMobile(window.innerWidth <= 1000);
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".navbar-dropdown-container")) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.fromTo(
        ".navbar",
        { y: -250 },
        { y: 0, top: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [visible]);

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

  // Recursive render for nested dropdowns
  const renderNavTabs = (tabs: NavTab[]) => {
    return tabs.map((tab, index) => {
      const isActive =
        location.pathname === tab.id ||
        (tab.id === "/" && location.pathname === "/");

      // If tab has children (dropdown)
      if (tab.children && tab.children.length > 0) {
        return (
          <div key={index} className="navbar-dropdown-container">
            <p
              className={`navbar-dropdown-trigger ${
                openDropdown === tab.id ? "active" : ""
              }`}
              onClick={(e) => handleDropdownClick(tab.id, e)}
            >
              {tab.name}
            </p>

            <div
              className={`navbar-dropdown-menu ${
                openDropdown === tab.id ? "show" : ""
              }`}
            >
              {renderNavTabs(tab.children)}
            </div>
          </div>
        );
      }

      // Scroll link (only on home)
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
            onClick={closeMobileMenu}
          >
            <p>{tab.name}</p>
          </ScrollLink>
        );
      }

      // Scroll link (to section on another page)
      if (tab.type === "link") {
        return (
          <ScrollLink
            key={index}
            to={tab.id}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => {
              localStorage.setItem("scrollTo", tab.scrollTo || "");
              closeMobileMenu();
            }}
          >
            <p>{tab.name}</p>
          </ScrollLink>
        );
      }

      // Default: route link
      return (
        <RouterLink
          key={index}
          to={tab.id}
          className={`tab ${isActive ? "active" : ""}`}
          onClick={() => {
            localStorage.setItem("scrollTo", tab.id);
            closeMobileMenu();
          }}
        >
          <p>{tab.name}</p>
        </RouterLink>
      );
    });
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      {open && (
        <div className="sidebar_overlay" onClick={closeMobileMenu}></div>
      )}

      {/* Logo */}
      <img src={Logo} alt="Logo" className="img-logo" />

      <div className={`box nav_tabs ${open ? "open" : ""}`}>
        <div className="icon_container cancel_btn" onClick={closeMobileMenu}>
          <FaTimes />
        </div>
        {renderNavTabs(navTabs2)}
        {isMobile && (
          <RouterLink
            to="/pendaftaran-siswa"
            className="tab contact_tab_mobile"
            onClick={closeMobileMenu}
          >
            Pendaftaran Siswa
          </RouterLink>
        )}
      </div>

      {/* Right Buttons */}
      <div className="box buttons">
        {!isMobile && (
          <RouterLink to="/pendaftaran-siswa" className="btn contact_btn">
            Pendaftaran Siswa
          </RouterLink>
        )}
        <div className="icon_container menu_btn" onClick={() => setOpen(!open)}>
          <RiMenu3Fill />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetail;

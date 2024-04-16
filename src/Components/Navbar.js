import React, { useEffect } from 'react'; 
import { HashLink as Link } from 'react-router-hash-link';

// import { Link } from 'react-router-dom';

const Navbar = ({ setActiveTab }) => {

  useEffect(() => {
    const navbarMenu = document.getElementById("navbar");
    const burgerMenu = document.getElementById("burger");
    const overlayMenu = document.querySelector(".overlay");

    // Show and Hide Navbar Function
    const toggleMenu = () => {
      navbarMenu.classList.toggle("active");
      overlayMenu.classList.toggle("active");
    };

    // Collapsible Mobile Submenu Function
    const collapseSubMenu = () => {
      navbarMenu.querySelector(".menu-dropdown.active .submenu")
        .removeAttribute("style");
      navbarMenu.querySelector(".menu-dropdown.active")
        .classList.remove("active");
    };

    // Toggle Mobile Submenu Function
    const toggleSubMenu = (e) => {
      if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
        e.preventDefault();
        const menuDropdown = e.target.parentElement;

        // If Dropdown is Expanded, then Collapse It
        if (menuDropdown.classList.contains("active")) {
          collapseSubMenu();
        } else {
          // Collapse Existing Expanded Dropdown
          if (navbarMenu.querySelector(".menu-dropdown.active")) {
            collapseSubMenu();
          }

          // Expand the New Dropdown
          menuDropdown.classList.add("active");
          const subMenu = menuDropdown.querySelector(".submenu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    // Fixed Resize Window Function
    const resizeWindow = () => {
      if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("active")) {
          toggleMenu();
        }
        if (navbarMenu.querySelector(".menu-dropdown.active")) {
          collapseSubMenu();
        }
      }
    };

    // Initialize Event Listeners
    burgerMenu.addEventListener("click", toggleMenu);
    overlayMenu.addEventListener("click", toggleMenu);
    navbarMenu.addEventListener("click", toggleSubMenu);
    window.addEventListener("resize", resizeWindow);

    // Cleanup the Event Listeners
    return () => {
      burgerMenu.removeEventListener("click", toggleMenu);
      overlayMenu.removeEventListener("click", toggleMenu);
      navbarMenu.removeEventListener("click", toggleSubMenu);
      window.removeEventListener("resize", resizeWindow);
    };

  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    // <BrowserRouter>
    <header className="header" id="header">
    <section className="wrapper container">
       <Link to="/" className="brand">
       <img src={process.env.PUBLIC_URL + 'assets/images/cloudverse-logo.svg'} alt="logo" />
       </Link>
       <div className="burger" id="burger">
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
       </div>
       <span className="overlay"></span>
       <nav className="navbar" id="navbar">
          <ul className="menu" id="menu">
             <li className="menu-item">
             <Link to="/why-cloudverse" className="menu-link">Why CloudVerse</Link>
             </li>
             <li className="menu-item">
             <Link to="/about" className="menu-link">About</Link>
             </li>
             <li className="menu-item menu-dropdown">
                <span className="menu-link" data-toggle="submenu"><Link to="platform-overview">Plateform</Link><i className="bx bx-chevron-down"></i></span>
                <ul className="submenu">
                   {/* <li className="submenu-item"><Link to="/platform-overview#tab1" className="submenu-link">Asset management & cost tracking</Link></li> 
                   <li className="submenu-item"><Link to="/platform-overview#tab2" className="submenu-link">Multiple product & application visibility</Link></li> 
                   <li className="submenu-item"><Link to="/platform-overview#tab3" className="submenu-link">Multiple cloud service cost & budgeting</Link></li> 
                   <li className="submenu-item"><Link to="/platform-overview#tab4" className="submenu-link">Recommendations on underutilizing resources</Link></li>  */}
                   <li className="submenu-item">
                <a href="/platform-overview#tab1" className="submenu-link"  >Asset management & cost tracking</a>
              </li>
              <li className="submenu-item">
                <a href="/platform-overview#tab2" className="submenu-link"  >Multiple product & application visibility</a>
              </li>
              <li className="submenu-item">
                <a href="/platform-overview#tab3" className="submenu-link"  >Multiple cloud service cost & budgeting</a>
              </li>
              <li className="submenu-item">
                <a href="/platform-overview#tab4" className="submenu-link"  >Recommendations on underutilizing resources</a>
              </li>
                </ul>
             </li>
             <li className="menu-item menu-dropdown">
                <span className="menu-link" data-toggle="submenu">Discover<i className="bx bx-chevron-down"></i></span>
                <ul className="submenu">
                <li className="submenu-item"><Link href="/" className="submenu-link">Feature Link</Link></li>
                <li className="submenu-item"><Link href="/" className="submenu-link">Feature Link</Link></li>
                   
                </ul>
             </li>
             <li className="menu-item menu-dropdown">
                <span className="menu-link" data-toggle="submenu">Resource<i className="bx bx-chevron-down"></i></span>
                <ul className="submenu">
                <li className="submenu-item"><Link href="/" className="submenu-link">Blog</Link></li>
                   
                </ul>
             </li>
             <li className="menu-item"><Link href="/" className="menu-link">Support</Link></li>
          </ul>
       </nav>
    </section>
 </header>
//  </BrowserRouter>
  );
};

export default Navbar;

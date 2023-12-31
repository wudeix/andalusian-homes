import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FeatherIcon from "feather-icons-react";

//import images
import logoDark from "../../assets/images/logo-dark.png";
import logoLight from "../../assets/images/logo-light.png";

import RightSidebar from '../../components/Layout/RightSidebar';
import { Offcanvas } from 'reactstrap';

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState('right');
  
    const toggleRightDrawer = () => {
      setPosition('right');
      setOpen(!open);
    };
  
    const onDrawerClose = () => {
      setOpen(false);
    };
  
    const initMenu = () => {
      activateMenu();
    };
  
    const activateMenu = () => {
      var menuItems = document.getElementsByClassName("sub-menu-item");
      if (menuItems) {
        var matchingMenuItem = null;
        for (var idx = 0; idx < menuItems.length; idx++) {
          if (menuItems[idx].href === window.location.href) {
            matchingMenuItem = menuItems[idx];
          }
        }
        if (matchingMenuItem) {
          matchingMenuItem.classList.add('active');
          const immediateParent = matchingMenuItem.closest('li');
          if (immediateParent) {
            immediateParent.classList.add('active');
          }
          const parent = matchingMenuItem.closest(".parent-menu-item");
          if (parent) {
            parent.classList.add('active');
            var parentMenuitem = parent.querySelector('.menu-item');
            if (parentMenuitem) {
              parentMenuitem.classList.add('active');
            }
            const parentOfParent = parent.closest(".parent-parent-menu-item");
            if (parentOfParent) {
              parentOfParent.classList.add('active');
            }
          } else {
            const parentOfParent = matchingMenuItem.closest(".parent-parent-menu-item");
            if (parentOfParent) {
              parentOfParent.classList.add("active");
            }
          }
        }
      }
    };
  
    useEffect(() => {
      window.scrollTo(0, 0);
      initMenu();
      document.body.classList = "";
      document.querySelectorAll("#buyButton").forEach((navLink) => {
        navLink.classList.add("btn-light")
        navLink.classList.remove("btn-soft-primary");
      });
      window.addEventListener("scroll", scrollNavigation, true);
  
      return () => {
        window.removeEventListener("scroll", scrollNavigation, true);
      };
    }, []);
  
    const scrollNavigation = () => {
      var doc = document.documentElement;
      const navBar = document.getElementById("topnav");
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      if (navBar != null) {
        if (top > 80) {
          navBar.classList.add("nav-sticky");
        } else {
          navBar.classList.remove("nav-sticky");
        }
      }
    };
  
    const isToogleMenu = () => {
      const isToggle = document.getElementById("isToggle");
      if (isToggle) {
        isToggle.classList.toggle("open");
        var isOpen = document.getElementById('navigation');
        console.log("navgiationId", isOpen);
        if (isOpen.style.display === "block") {
          isOpen.style.display = "none";
        } else {
          isOpen.style.display = "block";
        }
      }
    };
  
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container">
            <Link className="logo" to="/">
              <span className="logo-light-mode">
                <img src={logoDark} className="l-dark" height="24" alt="" />
                <img src={logoLight} className="l-light" height="24" alt="" />
              </span>
              <img src={logoLight} height="24" className="logo-dark-mode" alt="" />
            </Link>
            <div className="menu-extras">
              <div className="menu-item">
                <Link to="#" className="navbar-toggle" id="isToggle" onClick={isToogleMenu}>
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            <ul className="buy-button list-inline mb-0">
              <li className="list-inline-item mb-0">
                <Link to="#" onClick={toggleRightDrawer} disabled={open}>
                  <div id="buyButton" className="login-btn-primary">
                    <span className="btn btn-icon btn-pills btn-soft-primary settingbtn">
                      <FeatherIcon icon="settings" className="fea icon-sm" />
                    </span>
                  </div>
                  <div className="login-btn-light">
                    <span className="btn btn-icon btn-pills btn-light">
                      <FeatherIcon icon="settings" className="fea icon-sm" />
                    </span>
                  </div>
                </Link>
              </li>{" "}
              <li className="list-inline-item ps-1 mb-0">
                <Link to="//1.envato.market/landrickreactjs" target="_blank">
                  <div id="buyButton" className="login-btn-primary">
                    <span className="btn btn-icon btn-pills btn-primary shoppingbtn">
                      <FeatherIcon icon="shopping-cart" className="fea icon-sm" />
                    </span>
                  </div>
                  <div className="login-btn-light">
                    <span className="btn btn-icon btn-pills btn-light">
                      <FeatherIcon icon="shopping-cart" className="fea icon-sm" />
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
            <div id="navigation">
              <ul className="navigation-menu nav-light">
                {/* ... (Menu items) ... */}
                <li><Link to="/index-hosting" className="sub-menu-item">Home</Link></li>

                <li><Link to="/hosting-domain" className="sub-menu-item">Domain</Link></li>

                <li className="has-submenu parent-menu-item">
                    <Link to="#">Hosting</Link><span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li><Link to="/hosting-shared" className="sub-menu-item">Shared Hosting</Link></li>
                        <li><Link to="/hosting-vps" className="sub-menu-item">VPS Hosting</Link></li>
                        <li><Link to="/hosting-dedicated" className="sub-menu-item">Dedicated Hosting</Link></li>
                        <li><Link to="/hosting-cloud" className="sub-menu-item">Cloud Hosting</Link></li>
                        <li><Link to="/hosting-reseller" className="sub-menu-item">Reseller Hosting</Link></li>
                    </ul>
                </li>

                <li className="has-submenu parent-parent-menu-item">
                    <Link to="#">Pages</Link><span className="menu-arrow"></span>
                    <ul className="submenu">
                        <li><Link to="/hosting-aboutus" className="sub-menu-item"> About Us</Link></li>
                        <li><Link to="/hosting-services" className="sub-menu-item"> Services</Link></li>
                        <li><Link to="/hosting-faqs" className="sub-menu-item"> FAQs</Link></li>
                        <li className="has-submenu parent-menu-item"><Link to="#"> Blog </Link><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/hosting-blog" className="sub-menu-item"> Blogs </Link></li>
                                <li><Link to="/hosting-blog-detail" className="sub-menu-item">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-submenu parent-menu-item"><Link to="#"> Auth pages </Link><span className="submenu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/auth-cover-login" className="sub-menu-item">Login</Link></li>
                                <li><Link to="/auth-cover-signup" className="sub-menu-item">Signup</Link></li>
                                <li><Link to="/auth-cover-re-password" className="sub-menu-item">Reset Password</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Offcanvas isOpen={open} direction="end" toggle={toggleRightDrawer}>
          <RightSidebar onClose={onDrawerClose} />
        </Offcanvas>
      </React.Fragment>
    );
  };
  
  export default NavBar;

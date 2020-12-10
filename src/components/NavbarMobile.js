import React, { useState } from "react";
import logo from "../images/liteflix-logo.svg";
import plus from "../images/plus-icon.svg";
import bell from "../images/bell-icon.svg";
import profilePicture from "../images/main-profile-img.svg";
import profilePictureTwo from "../images/user-2.svg";
import profilePictureDefault from "../images/user-default.svg";
import chivronDown from "../images/chivron-down.svg";
import hamburguer from "../images/hamburguer.svg";

function NavbarMobile(props) {

      function handleNavbarExit() {
        const navExtended = document.getElementById("navExtended");
        const shadow = document.getElementById("mobileShadow");
        document.documentElement.style.height = "100%";
        document.documentElement.style.overflowY = "auto";
        shadow.style.opacity = 0;
        navExtended.style.width = "55vw";
        navExtended.style.opacity = 0;
        setTimeout(() => {
            navExtended.style.visibility = "hidden";
            shadow.style.visibility = "hidden";
            navExtended.style.display = "none";
        }, 300);
      }

      function handleNavbarOpen() {
        const navExtended = document.getElementById("navExtended");
        const shadow = document.getElementById("mobileShadow");
        document.documentElement.style.height = "100vh";
        document.documentElement.style.overflow = "hidden";
        shadow.style.visibility = "visible";
        shadow.style.opacity = 1;
        navExtended.style.display = "block";
        navExtended.style.width = "55vw";
        navExtended.style.opacity = 0;
        setTimeout(() => {
            navExtended.style.visibility = "visible";
            navExtended.style.opacity = 1;
            navExtended.style.width = "65vw";
        }, 50);
      }

    

    return( 
                <nav className="nav nav-mobile">
                    <div className="hamburguer" onClick={() => handleNavbarOpen()}>
                        <img src={hamburguer} alt="Expand Navbar" />
                    </div>
                    <div className="logo logo-mobile" onClick={() => window.location.href = "/"}>
                        <img src={logo} alt="Liteflix"/>
                    </div>
                    <div className="nav-mobile-extended" id="navExtended">
                        <div className="flex">
                            <img src={hamburguer} 
                            alt="Retract Navbar" 
                            className="hamburguer-expanded" 
                            onClick={() => handleNavbarExit()} />
                            <img src={logo} alt="Liteflix"/>
                        </div>
                        <div className="user user-mobile">
                            <img src={profilePictureTwo} alt="profile" className="profile-picture"/>
                            Ernesto Garmendia
                        </div>
                        <div className="option u-margin-top-1">
                            Cambiar Usuario
                        </div>
                        <hr className="hr"/>
                        <div className="option">
                            Configuración
                        </div>
                        <hr className="hr"/>
                        <div className="option">
                            Ayuda
                        </div>
                        <hr className="hr"/>
                        <div className="links-mobile">
                            <div className="link">
                                <div className="bell-container">
                                    <img src={bell} alt="bell"/>
                                    <div className="notification-active"></div>
                                </div>
                                Novedades
                            </div>
                            <div className="link">Series</div>
                            <div className="link">Películas</div>
                            <div className="link">Mi Lista</div>
                            <div className="link">Niños</div>
                            <div className="link" onClick={() => props.addMovieOpen()} >
                                <div className="flex-center add-movie-container" >
                                    <div className="circle">
                                        <img src={plus} alt="plus icon" className="plus-icon"/>
                                        <div className="hover-btn" id="hoverOptions">
                                        Agregar Película
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="option bold">
                            Log Out
                        </div>
                    </div>
                    <div className="nav-mobile-shadow" id="mobileShadow"></div>
                </nav>
    );
}

export default NavbarMobile;
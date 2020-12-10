import React from "react";
import logo from "../images/liteflix-logo.svg";
import plus from "../images/plus-icon.svg";
import bell from "../images/bell-icon.svg";
import profilePicture from "../images/main-profile-img.svg";
import profilePictureTwo from "../images/user-2.svg";
import profilePictureDefault from "../images/user-default.svg";
import chivronDown from "../images/chivron-down.svg";

function Navbar(props) {

    return( 
                <nav className="nav">
                    <div className="logo" onClick={() => window.location.href = "/"}>
                        <img src={logo} alt="liteflix logo"/>
                    </div>
                    <div className="links">
                        <div className="link active">Inicio</div>
                        <div className="link">Series</div>
                        <div className="link">Películas</div>
                        <div className="link">Agregados Recientemente</div>
                        <div className="link">Mi lista</div>
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
                        <div className="links-right">
                            <div className="link margin-right">
                                Niños
                            </div>
                            <div className="link">
                                <img src={bell} alt="bell"/>
                                <div className="notification-active"></div>
                            </div>
                            <div className="link profile-section">
                                <img src={profilePicture} alt="profile" className="profile-picture"/>
                                <img src={chivronDown} alt="down arrow"/>
                            </div>
                        <div className="profile-section-hover" id="profileSectionHover">
                            <div className="triangle-up"></div>
                                    <div className="user user-active">
                                            <img src={profilePictureTwo} alt="profile" className="profile-picture"/>
                                        Ernesto G...
                                    </div>
                                    <div className="user">
                                        <img src={profilePictureDefault} alt="profile" className="profile-picture"/>
                                        User 03
                                    </div>
                                    <div className="user">
                                        <img src={profilePictureDefault} alt="profile" className="profile-picture"/>
                                        User 04
                                    </div>
                                    <div className="option u-margin-top-1">
                                        Configuración
                                    </div>
                                    <hr className="hr"/>
                                    <div className="option">
                                        Ayuda
                                    </div>
                                    <hr className="hr"/>
                                    <div className="option bold">
                                        Log Out
                                    </div>
                                </div>
                        </div>
                </nav>
            
    );
}

export default Navbar;
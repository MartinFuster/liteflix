import React from "react";
import logo from "../images/liteflix-logo.svg";
import plus from "../images/plus-icon.svg";
import bell from "../images/bell-icon.svg";
import profilePicture from "../images/main-profile-img.svg";
import chivronDown from "../images/chivron-down.svg";

function Navbar() {
    return( 
                <nav className="nav">
                    <div className="logo">
                        <img src={logo} alt="liteflix logo"/>
                    </div>
                    <div className="links">
                        <div className="link active">Inicio</div>
                        <div className="link">Series</div>
                        <div className="link">Películas</div>
                        <div className="link">Agregados Recientemente</div>
                        <div className="link">Mi lista</div>
                        <div className="link">
                            <div className="circle">
                                <img src={plus} alt="plus icon"/>
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
                        </div>
                </nav>
            
    );
}

export default Navbar;
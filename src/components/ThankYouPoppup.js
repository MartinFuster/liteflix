import React, { useEffect, useState } from "react";
import liteflix from "../images/liteflix-logo.svg";
import { useSpring, animated } from "react-spring";

function ThankYouPoppup(props) {
    const [thankYouPoppupActive, setThankYouPoppupActive] = useState(false);

    const thankYouPoppupAnimation = useSpring({
        opacity: thankYouPoppupActive ? 1 : 0,
        visibility: thankYouPoppupActive ? "visible" : "hidden",
      });

    useEffect(() => {
        setThankYouPoppupActive(props.thankYouPoppupActive);
    }, [props.thankYouPoppupActive]);

    useEffect(() => {
        setThankYouPoppupActive(false);
    }, [props.backgroundShadowActive]);

    return (
        <animated.div style={thankYouPoppupAnimation} className="modal-container thank-you-poppup-container">
            <div className="cross cross-black" onClick={() => props.handleThankYouPoppupExit()} >&times;</div>
            <img src={liteflix} alt="Liteflix" className="thank-you-liteflix"/>
            <div className="thank-you-poppup-description">
            <h2 className="congrats">Felicitaciones!</h2>
                <h3 className="thank-you-text">
                    <span className="bold">{props.title}</span> fue correctamente
                    subido a la categoría <span className="bold">{props.category}</span>
                </h3>
            </div>
            <button type="submit" className="modal-btn btn-thank-you" onClick={() => props.handleThankYouPoppupExit()}>
                  Cerrar
            </button>
        </animated.div>
    );
}

export default ThankYouPoppup;
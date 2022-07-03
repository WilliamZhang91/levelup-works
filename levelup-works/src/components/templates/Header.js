import React, { useState } from "react";
import "../../styles/template/template.css";
import { Modal } from "./Modal";
import { Link } from "react-router-dom";

export const Header = ({ isDashboardOpen }) => {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return <>
        {
            showModal ? <Modal toggleModal={toggleModal} /> : null
        }
        <div className={`${isDashboardOpen ? "width white-background" : "width"}`}>
            <div className="header">
                <Link
                    style={{ textDecoration: "none" }}
                    to="/teacher_dashboard"
                //onClick={openDashboard}
                >
                    {
                        isDashboardOpen ?
                            <img className="logo" src="images/templates/star2.png" />
                            :
                            <img className="logo" src="images/templates/star.png" />
                    }
                </Link>
                <div className="nav">
                    <h3 className="links">HOME</h3>
                    <h3 className="links">FEATURES</h3>
                    <h3 className="links">TEACHERS</h3>
                </div>
                <div>
                    <div className={`${isDashboardOpen ? "nav none" : "nav"}`}>
                        <h3
                            data-testid="register"
                            className="login"
                            onClick={toggleModal}
                        >
                            REGISTER
                        </h3>
                        <h3>|</h3>
                        <h3
                            data-testid="login"
                            className="login"
                            onClick={toggleModal}
                        >
                            LOGIN
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </>
};
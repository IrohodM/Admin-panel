import React, { useContext, useState } from "react";
import { CollapseContext } from "../../../context/CheckCollapseContext";
// import NavRightContent from "./NavRightContent";
// import NavLeftContent from "./NavLeftContent";

const Navbar = () => {
    const {collapse , toggleCollapse} = useContext(CollapseContext);

    return (
        <>
            {/* <!-- header start --> */}
            <div id="header">

                {/* <!-- navbar start --> */}
                <nav className="fixed-top top_navbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="bg-dark top_navbar_left_content d-flex justify-content-between align-items-center col-3">
                                <div id="logo">
                                    <img src="/assets/img/logo.png" alt="logo" id="navbar_brand" />
                                    {/* <img src="" alt="" /> */}
                                </div>

                                <div className="text-center">
                                    <div className="text-center form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault"
                                            checked={collapse} onChange={() => toggleCollapse()} />
                                    </div>
                                </div>

                            </div>
                            {/* <!-- top left start  --> */}
                            <div className="col-9 bg-secondary">
                                <div className="d-flex justify-content-end">
                                    <div className="pe-3 cursor-pointer">
                                        <i className="bi bi-search"></i>
                                    </div>
                                    <div className="pe-3 cursor-pointer">
                                        <i className="bi bi-bell"></i>
                                    </div>
                                    <div className=" cursor-pointer">
                                        <i className="bi bi-grip-vertical"></i>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- top left end  --> */}
                        </div>


                    </div>
                </nav>
                {/* <NavRightContent />
                            <NavLeftContent /> */}

            </div>
            {/* <!-- header end --> */}
        </>
    )
}

export default Navbar; 
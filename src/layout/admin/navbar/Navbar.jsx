import React, { useContext } from "react";
import { CollapseContext } from "../../../context/CheckCollapseContext";
import NavRightContent from "./NavRightContent";
import NavLeftContent from "./NavLeftContent";

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
                            <NavRightContent collapse={collapse} toggleCollapse={toggleCollapse}/>
                            <NavLeftContent />
                        </div>


                    </div>
                </nav>
            </div>
            {/* <!-- header end --> */}
        </>
    )
}

export default Navbar; 
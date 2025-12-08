import React from "react";
import NavRightContent from "./NavRightContent";
import NavLeftContent from "./NavLeftContent";

const Navbar = () => {
    return (
        <>
            {/* <!-- header start --> */}
            <div id="header">


                {/* <!-- navbar start --> */}
                <nav className="navbar fixed-top bg-secondary top_navbar py-0">
                    <div className="h-100 container-fluid ps-0 row">

                        <NavRightContent />
                        <NavLeftContent />

                    </div>
                </nav>

            </div>
            {/* <!-- header end --> */}
        </>
    )
}

export default Navbar; 
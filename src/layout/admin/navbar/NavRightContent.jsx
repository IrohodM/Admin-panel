import React from "react";

const NavRightContent = () => {
    return (
        <>
            {/* <!-- top right start --> */}
            <div className="bg-dark h-100 top_navbar_left_content d-flex justify-content-around col-4 col-md-2">
                <div id="logo">
                    <img src="/assets/img/logo.png" alt="logo" id="navbar_brand" className="h-100" />
                    {/* <img src="" alt="" /> */}
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" />
                </div>

            </div>
            {/* <!-- top right end --> */}
        </>
    )
}

export default NavRightContent;
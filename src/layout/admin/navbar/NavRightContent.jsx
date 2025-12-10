import React from "react";


const NavRightContent = ({ collapse, toggleCollapse }) => {
    return (
        <>
            {/* top right start */}
            <div className="bg-dark top_navbar_left_content d-flex justify-content-between align-items-center col-3">
                <div id="logo">
                    <img src="/assets/img/logo.png" alt="logo" id="navbar_brand" />
                </div>

                <div className="">
                    <div className="form-check form-switch">
                        <input className="form-check-input pb-xl-0 mb-xl-0 mb-3" type="checkbox" role="switch" id="switchCheckDefault"
                            checked={collapse} onChange={() => toggleCollapse()} />
                    </div>
                </div>

            </div>
            {/* top right end */}
        </>
    )
}

export default NavRightContent;
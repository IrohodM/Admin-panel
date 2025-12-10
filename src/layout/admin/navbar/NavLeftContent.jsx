import React from "react";

const NavLeftContent = () => {
    return (
        <>
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
        </>
    )
}

export default NavLeftContent;
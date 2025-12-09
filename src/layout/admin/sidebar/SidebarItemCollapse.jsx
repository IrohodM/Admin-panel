import React from "react";

const SidebarItemCollapse = ({icon}) => {
    return (
        <li className="py-4 py-md-4 py-lg-3 d-flex justify-content-center">
            <i className={`bi ${icon}`}></i>
        </li>
    )
}

export default SidebarItemCollapse;
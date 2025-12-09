import React from "react";

const SidebarItem = ({ icon , title}) => {
    return (
        <li className="py-4 py-md-4 py-lg-3">
            <i className={`bi ${icon} me-2`}></i>
            <span>{title}</span>
        </li>
    )
}

export default SidebarItem;
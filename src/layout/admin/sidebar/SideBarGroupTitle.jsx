import React from "react";

const SidebarGroupTitle = ({ title }) => {
    return (
        <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
            <span>{title}</span>
        </li>
    )
}

export default SidebarGroupTitle;
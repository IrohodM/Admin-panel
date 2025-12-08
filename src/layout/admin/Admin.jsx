import React, { useContext, useEffect } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { ToggleSidebar } from "../../utils/InitialDoms";
// import AdminContextContainer, { AdminContext } from "../../context/adminLayoutContext";


const Admin = () => {
    // const { showSidebar } = useContext(AdminContext)
    useEffect(() => {
    // require('../../utils/InitialDoms')
        ToggleSidebar();
    }, [])
    return (
        <>
            <Navbar />
            <Sidebar />
        </>
        // <AdminContextContainer>
        //     <div>
        //         <Navbar />
        //         <Sidebar />
        //         <section id="content_section"
        //             className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}></section>
        //     </div>
        // </AdminContextContainer>
    )
}

export default Admin;
import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { CollapseProvider } from "../../context/CheckCollapseContext";
// import { ToggleSidebar } from "../../utils/InitialDoms";



const Admin = () => {
    // const { showSidebar } = useContext(AdminContext)
    // useEffect(() => {
    //     ToggleSidebar();
    // }, [])
    return (
        // <>
        //     <Navbar />
        //     <Sidebar />
        // </>
        <CollapseProvider>
            <Navbar />
            <Sidebar />
        </CollapseProvider>

    )
}

export default Admin;
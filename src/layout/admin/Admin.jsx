import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import { CollapseProvider } from "../../context/CheckCollapseContext";
import Dashboard from "../../pages/dashboard/Dashboard"
import Category from "../../pages/category/Category";
// import { ToggleSidebar } from "../../utils/InitialDoms";



const Admin = () => {
    // const { showSidebar } = useContext(AdminContext)
    // useEffect(() => {
    //     ToggleSidebar();
    // }, [])
    return (
        <CollapseProvider>
            <Navbar />
            <div id="main">
                <div className=" container-fluid">
                    <div className="row">
                        <Sidebar />
                        {/* <Dashboard/> */}
                        <Category/>
                    </div>
                </div>
            </div>
            
        </CollapseProvider>

    )
}

export default Admin;
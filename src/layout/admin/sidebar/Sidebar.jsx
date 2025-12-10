import React, { useContext } from "react";
import { CollapseContext } from "../../../context/CheckCollapseContext";
import SidebarGroupTitle from "./SideBarGroupTitle";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {

    const { collapse, toggleCollapse } = useContext(CollapseContext);
    return (
        <>
            {/* <!-- main start --> */}
            <div id="main">

                <div className=" container-fluid">

                    <div className="row">
                        {/* aside start*/}

                        {/* aside without collapse */}
                        <div id="my_aside" className={`bg-dark d-flex flex-column ${collapse ? "d-none" : "col-3"}`}>
                            <ul className="p-0 m-0 mt-2 list-unstyled text-white">
                                <li className="d-flex flex-column justify-content-center align-items-center no_hover pb-3">
                                    <img src="/assets/img/face.png" alt="" className="rounded-circle border border-3"
                                        id="profile_img" />
                                    <span>امیرمحمد محسنی</span>
                                </li>
                                <li className="py-4 pb-2" id="li_1">
                                    <i className="bi bi-speedometer me-2"></i>
                                    <span>داشبورد</span>
                                </li>

                                {/* <!-- li part 2 --> */}
                                <SidebarGroupTitle title="فروشگاه" />
                                <SidebarItem icon="bi-collection" title="مدیریت گروه محصول" />
                                <SidebarItem icon="bi-box" title="مدیریت محصول" />
                                <SidebarItem icon="bi-check-circle" title="مدیریت برند ها" />
                                <SidebarItem icon="bi-flower1" title="مدیریت گارنتی ها" />
                                <SidebarItem icon="bi-palette" title="مدیریت رنگ ها" />
                                <SidebarItem icon="bi-percent" title="مدیریت تخفیف ها" />

                                {/* <!-- li part3 --> */}
                                <SidebarGroupTitle title="سفارشات و سبد ها" />
                                <SidebarItem icon="bi-basket" title="مدیریت سبد ها" />
                                <SidebarItem icon="bi-cart-check-fill" title="مدیریت سفارشات" />
                                <SidebarItem icon="bi-truck" title="مدیریت نحوه ارسال" />

                                {/* <!-- li part4 --> */}
                                <SidebarGroupTitle title="کاربران و همکاران" />
                                <SidebarItem icon="bi-people" title="مشاهده کاربران" />
                                <SidebarItem icon="bi-person-bounding-box" title="نقش ها" />
                                <SidebarItem icon="bi-shield-fill-check" title="مجوز ها" />

                                {/* <!-- li part5 --> */}
                                <SidebarGroupTitle title="ارتباطات" />
                                <SidebarItem icon="bi-question-diamond" title="سوال ها" />
                                <SidebarItem icon="bi-chat-left-dots-fill" title="نظرات" />
                            </ul>
                        </div>

                        {/* aside with collapse */}
                        <div id="my_aside_collapsed" className={`d-flex flex-column ${collapse ? "col-1" : "d-none"}`}>
                            <div className="row">
                                <div className="col-12 col-md-8 col-lg-8 bg-dark">
                                    <ul className="p-0 m-0 mt-2 text-center list-unstyled text-white">
                                        <li className="d-flex flex-column justify-content-center align-items-center no_hover pb-3">
                                            <img src="/assets/img/face.png" alt="" className="rounded-circle border border-3"
                                                id="profile_img_collapsed" />
                                            <span className="text-center"></span>
                                        </li>
                                        <li className="py-4 pb-2  d-flex justify-content-center" id="li_1">
                                            <i className="bi bi-speedometer"></i>
                                        </li>

                                        {/* <!-- li part 2 --> */}
                                        <SidebarGroupTitle title=" " />
                                        <SidebarItemCollapse icon="bi-collection" />
                                        <SidebarItemCollapse icon="bi-box" />
                                        <SidebarItemCollapse icon="bi-check-circle" />
                                        <SidebarItemCollapse icon="bi-flower1" />
                                        <SidebarItemCollapse icon="bi-palette" />
                                        <SidebarItemCollapse icon="bi-percent" />

                                        {/* <!-- li part3 --> */}
                                        <SidebarGroupTitle title=" " />
                                        <SidebarItemCollapse icon="bi-basket" />
                                        <SidebarItemCollapse icon="bi-cart-check-fill" />
                                        <SidebarItemCollapse icon="bi-truck" />

                                        {/* <!-- li part4 --> */}
                                        <SidebarGroupTitle title=" " />
                                        <SidebarItemCollapse icon="bi-people" />
                                        <SidebarItemCollapse icon="bi-person-bounding-box" />
                                        <SidebarItemCollapse icon="bi-shield-fill-check" />

                                        {/* <!-- li part5 --> */}
                                        <SidebarGroupTitle title=" " />
                                        <SidebarItemCollapse icon="bi-question-diamond"/>
                                        <SidebarItemCollapse icon="bi-chat-left-dots-fill"/>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-4 ">
                                </div>
                            </div>

                        </div>
                        <div className={collapse ? "col-2" : "d-none"}></div>
                        {/* aside start*/}

                        {/* section */}
                        <div className="col-9 d-flex text-center">
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- main end --> */}
        </>
    )
}

export default Sidebar;





import React, { useContext } from "react";
import { CollapseContext } from "../../../context/CheckCollapseContext";
// import { AdminContext } from "../../../context/adminLayoutContext";

const Sidebar = () => {

    const {collapse , toggleCollapse} = useContext(CollapseContext);
    // const {showSidebar} = useContext(AdminContext)
    return (
        <>
                    {/* <!-- main start --> */}
            <div id="main">

                <div className=" container-fluid">

                    <div className="row">
                        {/* aside */}
                        {/* <div className="bg-warning col-3 d-flex flex-column" id="my_aside"> */}
                        <div id="my_aside" className={`bg-warning d-flex flex-column ${collapse ? "d-none" : "col-3"}`}>
                            <ul className="p-0 m-0 mt-5 list-unstyled text-white">
                                <li className="d-flex flex-column justify-content-center align-items-center no_hover pb-5">
                                    <img src="/assets/img/face.png" alt="" className="rounded-circle border border-3"
                                        id="profile_img" />
                                    <span>امیرمحمد محسنی</span>
                                </li>
                                <li className="py-4 pb-2" id="li_1">
                                    <i className="bi bi-speedometer me-2"></i>
                                    <span>داشبورد</span>
                                </li>

                                {/* <!-- li part 2 --> */}
                                <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                    <span>فروشگاه</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-collection me-2"></i>
                                    <span>مدیریت گروه محصول</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-box me-2"></i>
                                    <span>مدیریت محصول</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-check-circle me-2"></i>
                                    <span>مدیریت برند ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-flower1 me-2"></i>
                                    <span>مدیریت گارانتی ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-palette me-2"></i>
                                    <span>مدیریت رنگ ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-percent me-2"></i>
                                    <span>مدیریت تخفیف ها</span>
                                </li>

                                {/* <!-- li part3 --> */}
                                <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                    <span>سفارشات و سبد ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-basket me-2"></i>
                                    <span>مدیریت سبد ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-cart-check-fill me-2"></i>
                                    <span>مدیریت سفارشات</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-truck me-2"></i>
                                    <span>مدیریت نحوه ارسال</span>
                                </li>

                                {/* <!-- li part4 --> */}
                                <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                    <span>کاربران و همکاران</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-people me-2"></i>
                                    <span>مشاهده کاربران</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-person-bounding-box me-2"></i>
                                    <span>نقش ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-shield-fill-check me-2"></i>
                                    <span>مجوز ها</span>
                                </li>

                                {/* <!-- li part5 --> */}
                                <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                    <span>ارتباطات</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-question-diamond me-2"></i>
                                    <span>سوال ها</span>
                                </li>
                                <li className="py-4 py-md-4 py-lg-3">
                                    <i className="bi bi-chat-left-dots-fill me-2"></i>
                                    <span>نظرات</span>
                                </li>



                            </ul>
                        </div>

                        <div id="my_aside_collapsed" className={`bg-warning d-flex flex-column ${collapse ? "col-1" : "d-none"}`}>
                            <div className="row">
                                <div className="col-8">
                                    <ul className="p-0 m-0 mt-5 text-center list-unstyled text-white">
                                        <li className="d-flex flex-column justify-content-center align-items-center no_hover pb-5">
                                            <img src="/assets/img/face.png" alt="" className="rounded-circle border border-3"
                                                id="profile_img" />
                                            <span>امیرمحمد محسنی</span>
                                        </li>
                                        <li className="py-4 pb-2" id="li_1">
                                            <i className="bi bi-speedometer me-2"></i>
                                        </li>

                                        {/* <!-- li part 2 --> */}
                                        <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                            <span>       </span>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-collection me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-box me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-check-circle me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-flower1 me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-palette me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-percent me-2"></i>
                                        </li>

                                        {/* <!-- li part3 --> */}
                                        <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                            <span>     </span>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-basket me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-cart-check-fill me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-truck me-2"></i>
                                        </li>

                                        {/* <!-- li part4 --> */}
                                        <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                            <span>      </span>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-people me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-person-bounding-box me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-shield-fill-check me-2"></i>
                                        </li>

                                        {/* <!-- li part5 --> */}
                                        <li className="d-flex justify-content-center pt-4 pb-3 text-primary no_hover">
                                            <span>    </span>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-question-diamond me-2"></i>
                                        </li>
                                        <li className="py-4 py-md-4 py-lg-3">
                                            <i className="bi bi-chat-left-dots-fill me-2"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 bg-danger">
                                </div>
                            </div>

                        </div>


                        <div className={collapse ? "col-2" : "d-none"}></div>
                        {/* <div
                            id="my_aside"
                            className={`bg-warning d-flex flex-column ${collapsed ? "col-1" : "col-3"}`}
                        >
                            
                            {!collapsed && (
                                <>
                                    <div>div1</div>
                                    <div>div2</div>
                                    <div>div3</div>
                                    <div>div4</div>
                                </>
                            )}

                            {collapsed && (
                                <div>
                                    <i className="bi bi-list"></i> 
                                </div>
                            )}
                        </div> */}

                        {/* section */}
                        <div className="bg-primary col-9 d-flex text-center">
                            section
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- main end --> */}
        </>
    )
}

export default Sidebar;





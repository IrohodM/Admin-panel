import React from "react";
// import { AdminContext } from "../../../context/adminLayoutContext";

const Sidebar = () => {

    // const {showSidebar} = useContext(AdminContext)
    return (
        <>
                    {/* <!-- main start --> */}
            <div id="main">
                <div className="row container-fluid p-0 mt-4">

                    {/* <!-- aside start --> */}
                    <div id="sidebar_section" className="col-4 ">
                        <div className="bg-warning">
                            hello world
                            hello world
                            hello world
                            hello world
                            hello world
                            hello world
                            hello world
                            hello world
                            hello world
                        </div>
                    </div>
                    {/* <!-- aside end --> */}

                    {/* <!-- main section start --> */}
                    <div className="col-8 ">
                        <div className="text-black">

                            this  is the main section
                        </div>
                    </div>
                    {/* <!-- main section end --> */}
                </div>

            </div>
            {/* <!-- main end --> */}
        </>
    )
}

export default Sidebar;



// import React, { useContext } from "react";
// import { AdminContext } from "../../../context/adminLayoutContext";
// import { AdminContext } from "../../../context/adminLayoutContext";

// const SidebarLayout = () => {
   
//     const { showSidebar } = useContext(AdminContext);
//     return (
//         <section id="sidebar_section">
//             <div classNameNameName={`mini_sidebar collapsedd bg-dark h-100 ${showSidebar ? "expanded" : null}`}>
//                 <ul classNameName="p-0 m-0">
//                     <li classNameName="pt-1 pb-2 d-flex flex-column avatar_li position-relative">
//                         <span classNameName="avatar_box">
//                             <img
//                                 classNameName="w-100 rounded-circle"
//                                 src="/assets/images/avatar/user2.jpg"
//                             />
//                         </span>
//                         <div classNameName="sidebar_avatar_name text-center hiddenable">
//                             قاسم بساکی
//                         </div>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item mt-2 active"
//                         data-section-id="dashboard_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-tachometer-alt text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">داشبورد</span>
//                     </li>
//                     {/* <!-- =================================== --> */}
//                     <li classNameName="py-1 text-start d-flex justify-content-center no_pointer no_hover ">
//                         <span classNameName="hiddenable no_wrap group_sidebar_title">
//                             فروشگاه
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_product_category"
//                     >
//                         <i classNameName="ms-3 icon fas fa-stream text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">
//                             مدیریت گروه محصول
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_product_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-cube text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت محصول</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_brand_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-copyright text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت برند ها</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_guarantee_section"
//                     >
//                         <i classNameName="ms-3 icon fab fa-pagelines text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">
//                             مدیریت گارانتی ها
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_color_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-palette text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت رنگ ها</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_discount_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-percentage text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت تخفیف ها</span>
//                     </li>
//                     {/* <!-- =================================== --> */}
//                     <li classNameName="py-1 text-start d-flex justify-content-center no_pointer no_hover ">
//                         <span classNameName="hiddenable no_wrap group_sidebar_title">
//                             سفارشات و سبد
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_cart_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-shopping-basket text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت سبد ها</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_orders_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-luggage-cart text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مدیریت سفارشات</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_deliveries_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-truck-loading text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">
//                             مدیریت نحوه ارسال
//                         </span>
//                     </li>
//                     {/* <!-- =================================== --> */}
//                     <li classNameName="py-1 text-start d-flex justify-content-center no_pointer no_hover ">
//                         <span classNameName="hiddenable no_wrap group_sidebar_title ">
//                             کاربران و همکاران
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_user_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-users text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مشاهده کاربران</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_role_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-user-tag text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">نقش ها</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_permission_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-shield-alt text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">مجوز ها</span>
//                     </li>
//                     {/* <!-- =================================== --> */}
//                     <li classNameName="py-1 text-start d-flex justify-content-center no_pointer no_hover ">
//                         <span classNameName="hiddenable no_wrap group_sidebar_title ">
//                             ارتباطات
//                         </span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_question_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-question-circle text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">سوال ها</span>
//                     </li>
//                     <li
//                         classNameName="py-1 text-start pe-4 sidebar_menu_item"
//                         data-section-id="manage_comments_section"
//                     >
//                         <i classNameName="ms-3 icon fas fa-comment text-light"></i>
//                         <span classNameName="hiddenable no_wrap font_08">نظرات</span>
//                     </li>
//                 </ul>
//             </div>
//         </section>
//     );
// };

// export default SidebarLayout;

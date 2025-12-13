import React from "react";
import DashboardChart from "../../utils/DashboardChart"

const Dashboard = () => {
   
    return (
        <div className="col-9 text-center" id="Dashboard">
            {/* cards start */}
            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 p-2 dashboard_card_parent">
                    <div className="dashboard_card rounded py-2 ">
                        <div className="card-body row">
                            <div className="col-10">
                                <h4 className="ps-2">12</h4>
                                <h6 className="card-title ps-2 pb-2">سبد خرید امروز</h6>
                                <small className="card-title px-2">سبد های خرید مانده امروز</small>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                                <i className="bi bi-basket3 fs-3 pe-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_card mt-2 rounded py-1">
                        <div className="card-body ps-2 row">
                            <small className="m-0 d-block text_truncate pb-1">
                                <b>13</b> در هفته گذشته
                            </small>
                            <small className="m-0 d-block text_truncate">
                                <b>18</b> در ماه گذشته
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 dashboard_card_parent">
                    <div className="dashboard_card rounded py-2 ">
                        <div className="card-body row">
                            <div className="col-10">
                                <h4 className="ps-2">39</h4>
                                <h6 className="card-title ps-2 pb-2">سفارشات مانده امروز</h6>
                                <small className="card-title px-2">سفارشات معلق و فاقد پر...</small>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                                <i className="bi bi-minecart-loaded fs-3 pe-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_card mt-2 rounded py-1">
                        <div className="card-body ps-2 row">
                            <small className="m-0 d-block text_truncate pb-1">
                                <b>30</b> در هفته گذشته
                            </small>
                            <small className="m-0 d-block text_truncate">
                                <b>24</b> در ماه گذشته
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 dashboard_card_parent">
                    <div className="dashboard_card rounded py-2 ">
                        <div className="card-body row">
                            <div className="col-10">
                                <h4 className="ps-2">72</h4>
                                <h6 className="card-title ps-2 pb-2">سفارشات امروز</h6>
                                <small className="card-title px-2">سفارشات کامل و داری پرداختی</small>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                                <i className="bi bi-cart-fill fs-3 pe-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_card mt-2 rounded py-1">
                        <div className="card-body ps-2 row">
                            <small className="m-0 d-block text_truncate pb-1">
                                <b>134</b> در هفته گذشته
                            </small>
                            <small className="m-0 d-block text_truncate">
                                <b>254</b> در ماه گذشته
                            </small>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-3 p-2 dashboard_card_parent">
                    <div className="dashboard_card rounded py-2 ">
                        <div className="card-body row">
                            <div className="col-10">
                                <h4 className="ps-2">7,578,000</h4>
                                <h6 className="card-title ps-2 pb-2">سبد خرید امروز</h6>
                                <small className="card-title px-2">سبد های خرید مانده امروز</small>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                                <i className="bi bi-cash-coin fs-3 pe-5"></i>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard_card mt-2 rounded py-1">
                        <div className="card-body ps-2 row">
                            <small className="m-0 d-block text_truncate pb-1">
                                <b>53,248,000</b> در هفته گذشته
                            </small>
                            <small className="m-0 d-block text_truncate">
                                <b>321,875,000</b> در ماه گذشته
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            {/* cards end */}

            {/* table and chart */}
            <div className="row mt-2">

                {/* table start */}
                <div className="col-12 col-lg-6">
                    <div className="table-responsive text-center">
                        <h5 className="mb-3 text-center">محصولات رو به اتمام</h5>
                        <table className="table table-bordered table-striped align-middle text-center">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">دسته</th>
                                    <th scope="col">عنوان</th>
                                    <th scope="col">وضعیت</th>
                                    <th scope="col">عملیات</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>سبد خرید</td>
                                    <td>خرید امروز</td>
                                    <td><span className="badge bg-success">فعال</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>سفارشات</td>
                                    <td>سفارشات مانده</td>
                                    <td><span className="badge bg-warning text-dark">در انتظار</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>پرداخت</td>
                                    <td>پرداخت‌های کامل</td>
                                    <td><span className="badge bg-danger">لغو شده</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>انبار</td>
                                    <td>کالاهای کم‌موجودی</td>
                                    <td><span className="badge bg-warning text-dark">کمبود</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>محصولات ویژه</td>
                                    <td>پیشنهاد ویژه</td>
                                    <td><span className="badge bg-success">فعال</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>6</td>
                                    <td>محصولات جدید</td>
                                    <td>ورودی تازه</td>
                                    <td><span className="badge bg-info text-dark">جدید</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">ویرایش</button>
                                        <button className="btn btn-sm btn-danger">حذف</button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                </div>
                {/* table end */}

                {/* chart start */}
                <div className="col-12 col-lg-6">
                    <h5 className="mb-3 text-center">نمودار فروش 1 سال گذشته</h5>
                    <DashboardChart/>
                </div>
                {/* chart end */}

            </div>
        </div>
    )
}

export default Dashboard;

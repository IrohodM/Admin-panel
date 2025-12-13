import React from "react";

const Dashboard = () => {
    return (
        <div className="col-9 d-flex text-center" id="Dashboard">
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
                                <i class="bi bi-basket3 fs-3 pe-5"></i>
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
                                <h4 className="ps-2">12</h4>
                                <h6 className="card-title ps-2 pb-2">سفارشات مانده امروز</h6>
                                <small className="card-title px-2">سفارشات معلق و فاقد پر...</small>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                                <i class="bi bi-minecart-loaded fs-3 pe-5"></i>
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
                                <i class="bi bi-cart-fill fs-3 pe-5"></i>
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
                                <i class="bi bi-cash-coin fs-3 pe-5"></i>
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
        </div>
    )
}

export default Dashboard;

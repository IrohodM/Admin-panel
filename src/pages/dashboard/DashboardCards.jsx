import React from "react";

const DashboardCards = ({ currentValue, title, desc, icon, lastWeekValue, lastMonthValue }) => {

    return (
        <>
            <div className="col-12 col-md-6 col-lg-3 p-2 dashboard_card_parent">
                <div className="dashboard_card rounded py-2 ">
                    <div className="card-body row">
                        <div className="col-10">
                            <h4 className="ps-2">{currentValue}</h4>
                            <h6 className="card-title ps-2 pb-2">{title}</h6>
                            <small className="card-title px-2">{desc}</small>
                        </div>
                        <div className="col-2 d-flex justify-content-center align-items-center pe-2">
                            <i className={`bi ${icon} fs-3 pe-5`}></i>
                        </div>
                    </div>
                </div>
                <div className="dashboard_card mt-2 rounded py-1">
                    <div className="card-body ps-2 row">
                        <small className="m-0 d-block text_truncate pb-1">
                            <b>{lastWeekValue}</b> در هفته گذشته
                        </small>
                        <small className="m-0 d-block text_truncate">
                            <b>{lastMonthValue}</b> در ماه گذشته
                        </small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardCards;
import React, { useEffect, useState } from 'react';

let numOfPage = 2;
const PaginatedTable = ({ data, dataInfo, additionField }) => {
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(2);
    const [pages, setPages] = useState([]);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        let pCount = Math.ceil(data.length / numOfPage);
        console.log(pCount);
        setPageCount(pCount);
        let pArr = [];
        for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
        setPages(pArr);
    }, []);

    useEffect(() => {
        let start = currentPage * numOfPage - numOfPage; // 0
        let end = currentPage * numOfPage; // 2
        setTableData(data.slice(start, end));
    }, [currentPage]);

    return (
        <>
            <div className="row p-2">
                <table className="table table-bordered table-striped ">
                    <thead>
                        <tr>
                            {dataInfo.map((i) => (
                                <th scope="col" className='text-center' key={i.field} >{i.title}</th>
                            ))}
                            {additionField ? <th className='text-center'>{additionField.title}</th> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((d) => (
                            <tr key={d.field}>
                                {dataInfo.map((i) => (
                                    <td className='text-center' key={d.field + "_" + i.id}>{d[i.field]}</td>
                                ))}
                                {additionField ? <th className='text-center'>{additionField.elements(d.id)}</th> : null}
                            </tr>
                        ))}

                    </tbody>
                </table>

                {/* <div className='d-flex justify-content-center align-items-center'> */}
                <nav className='d-flex justify-content-center align-items-center' aria-label="Page navigation example " >
                    <ul className="pagination">
                        <li className="page-item">
                            <span className={`page-link cursor-pointer ${currentPage == 1 ? "disabled" : ""}`} href="#" aria-label="Previous" onClick={() => setCurrentPage(currentPage - 1)}>
                                <span aria-hidden="true">&laquo;</span>
                            </span>
                        </li>
                        {pages.map((p) => (
                            <li className="page-item" key={p}>
                                <span className={`page-link cursor-pointer rounded-0 ${currentPage == p ? "alert-success" : ""}`} href="#" onClick={() => setCurrentPage(p)} >
                                    {p}
                                </span>
                            </li>
                        ))}

                        <li className="page-item">
                            <span className={`page-link cursor-pointer ${currentPage == pageCount ? "disabled" : ""}`} href="#" aria-label="Next" onClick={() => setCurrentPage(currentPage + 1)}>
                                <span aria-hidden="true">&raquo;</span>
                            </span>
                        </li>
                    </ul>
                </nav>
                {/* </div> */}
            </div>
        </>
    );
}

export default PaginatedTable;

// <div>
//     <>
//         <div className="row p-2">
//             <table className="table table-bordered table-striped">
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col" className='text-center'>عنوان</th>
//                         <th scope="col" className='text-center'>وضعیت</th>
//                         <th scope="col" className='text-center'>عملیات</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <th scope="row">1</th>
//                         <td className='text-center' >Mark</td>
//                         <td className='text-center' >فعال</td>
//                         <td className='text-center' >
//                             <i
//                                 className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="زیرمجموعه"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="ویرایش دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="افزودن ویژگی"
//                                 data-bs-placement="top"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#add_product_category_attr_modal"
//                             ></i>
//                             <i
//                                 className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="حذف دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">2</th>
//                         <td className='text-center'>Jacob</td>
//                         <td className='text-center'>فعال</td>
//                         <td className='text-center'>
//                             <i
//                                 className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="زیرمجموعه"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="ویرایش دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="افزودن ویژگی"
//                                 data-bs-placement="top"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#add_product_category_attr_modal"
//                             ></i>
//                             <i
//                                 className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="حذف دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                         </td>
//                     </tr>
//                     <tr>
//                         <th scope="row">3</th>
//                         <td className='text-center'>John</td>
//                         <td className='text-center'>فعال</td>
//                         <td className='text-center'>
//                             <i
//                                 className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="زیرمجموعه"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="ویرایش دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                             <i
//                                 className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="افزودن ویژگی"
//                                 data-bs-placement="top"
//                                 data-bs-toggle="modal"
//                                 data-bs-target="#add_product_category_attr_modal"
//                             ></i>
//                             <i
//                                 className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
//                                 title="حذف دسته"
//                                 data-bs-toggle="tooltip"
//                                 data-bs-placement="top"
//                             ></i>
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>
//     </>
// </div>




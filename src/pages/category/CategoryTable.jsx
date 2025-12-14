import React from 'react';

const CategoryTable = () => {
    return (
        <>
            <div className="row p-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='text-center'>عنوان</th>
                            <th scope="col" className='text-center'>وضعیت</th>
                            <th scope="col" className='text-center'>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td className='text-center' >Mark</td>
                            <td className='text-center' >فعال</td>
                            <td className='text-center' >
                                <i
                                    className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="زیرمجموعه"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="ویرایش دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="افزودن ویژگی"
                                    data-bs-placement="top"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_product_category_attr_modal"
                                ></i>
                                <i
                                    className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="حذف دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td className='text-center'>Jacob</td>
                            <td className='text-center'>فعال</td>
                            <td className='text-center'>
                                <i
                                    className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="زیرمجموعه"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="ویرایش دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="افزودن ویژگی"
                                    data-bs-placement="top"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_product_category_attr_modal"
                                ></i>
                                <i
                                    className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="حذف دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td className='text-center'>John</td>
                            <td className='text-center'>فعال</td>
                            <td className='text-center'>
                                <i
                                    className="bi bi-diagram-3 text-info mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="زیرمجموعه"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-pencil-square text-warning mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="ویرایش دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                                <i
                                    className="bi bi-plus text-success mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="افزودن ویژگی"
                                    data-bs-placement="top"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_product_category_attr_modal"
                                ></i>
                                <i
                                    className="bi bi-dash text-danger mx-1 hoverable_text cursor-pointer has_tooltip"
                                    title="حذف دسته"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                ></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryTable;

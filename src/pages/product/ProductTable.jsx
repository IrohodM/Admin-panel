import React from 'react';

const ProductTable = () => {
    return (
        <>
            <div className="row p-2">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col" className='text-center'>دسته</th>
                            <th scope="col" className='text-center'>عنوان</th>
                            <th scope="col" className='text-center'>قیمت</th>
                            <th scope="col" className='text-center'>موجودی</th>
                            <th scope="col" className='text-center'>تعداد لایک</th>
                            <th scope="col" className='text-center'>وضعیت</th>
                            <th scope="col" className='text-center'>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td className='text-center'>دسته شماره فلان</td>
                            <td className='text-center'>محصول شماره1</td>
                            <td className='text-center'>20,000 تومان</td>
                            <td className='text-center'>10</td>
                            <td className='text-center'>
                                <span className="text-success mx-2">30</span>
                                <span className="text-danger mx-2">10</span>
                            </td>
                            <td className='text-center'>فعال</td>
                            <td className='text-center'>
                                <i
                                    className="bi bi-pencil text-warning mx-1 cursor-pointer"
                                    title="ویرایش محصول"
                                    data-bs-toggle="modal"
                                    data-bs-placement="top"
                                    data-bs-target="#add_product_modal"
                                ></i>
                                <i
                                    className="bi bi-receipt text-info mx-1 cursor-pointer"
                                    title="ثبت ویژگی"
                                    data-bs-toggle="modal"
                                    data-bs-target="#add_product_attr_modal"
                                ></i>
                                <i
                                    className="bi bi-x text-danger mx-1 cursor-pointer"
                                    title="حذف محصول"
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

export default ProductTable;

import React, { useContext } from 'react';
import ProductTable from './ProductTable';
import ProductPagenation from './ProductPagenation';
import AddProduct from './AddProduct';
import { CollapseContext } from '../../context/CheckCollapseContext';

const Product = () => {
    const { collapse, toggleCollapse } = useContext(CollapseContext);

    return (
        <div className={`${collapse ? "col-11" : "col-9"} text-center`} id="Category">
            <h3 className='text-center mt-4'>مدیریت محصولات</h3>

            {/* search and added buttom */}
            <div className='row justify-content-between align-items-center'>
                <div className='col-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text cursor-pointer" id="product-addon">جستوجو</span>
                        <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید" aria-label="Username" aria-describedby="product-addon" />
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-center'>
                    <i className="bi bi-plus-square-fill text-success fs-2 cursor-pointer" data-bs-toggle="modal"
                        data-bs-target="#ProductModal"></i>
                </div>
            </div>

            {/* table */}
            <ProductTable/>

            {/* pagenaiton */}
            <ProductPagenation/>

            {/* Add Category */}
            <AddProduct/>

        </div>
    );
}

export default Product;

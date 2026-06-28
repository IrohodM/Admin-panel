import React , { useContext } from 'react';
import CategoryTable from './CategoryTable';
import CategoryPagenation from './CategoryPagenation';
import AddCategory from './AddCategory';
import { CollapseContext } from '../../context/CheckCollapseContext';

const Category = () => {
    const { collapse, toggleCollapse } = useContext(CollapseContext);

    return (
        <div className={`${collapse ? "col-11" : "col-9"} text-center`} id="Category">
            <h3 className='text-center mt-4'>مدیریت دسته بندی محصولات</h3>

            {/* search and added buttom */}
            <div className='row justify-content-between align-items-center'>
                <div className='col-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text cursor-pointer" id="basic-addon1">جستوجو</span>
                        <input type="text" className="form-control" placeholder="قسمتی از عنوان را وارد کنید" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-center'>
                    <i className="bi bi-plus-square-fill text-success fs-2 cursor-pointer" data-bs-toggle="modal"
                        data-bs-target="#add_product_category_modal"></i>
                </div>
            </div>

            {/* table */}
            <CategoryTable />

            {/* pagenaiton */}
            {/* <CategoryPagenation /> */}

            {/* Add Category */}
            <AddCategory />

        </div>
    );
}

export default Category;

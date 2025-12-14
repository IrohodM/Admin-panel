import React from 'react';
import CategoryTable from './CategoryTable';
import CategoryPagenation from './CategoryPagenation';

const Category = () => {
    return (
        <div className="col-9 text-center" id="Category">
            <h3 className='text-center mt-4'>مدیریت دسته بندی محصولات</h3>

            {/* search and added buttom */}
            <div className='row justify-content-between align-items-center'>
                <div className='col-6'>
                    <div class="input-group mb-3">
                        <span class="input-group-text cursor-pointer" id="basic-addon1">جستوجو</span>
                        <input type="text" class="form-control" placeholder="قسمتی از عنوان را وارد کنید" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className='col-6 d-flex justify-content-end align-items-center'>
                    <i class="bi bi-plus-square-fill text-success fs-2 cursor-pointer"></i>
                </div>
            </div>

            {/* table */}
            <CategoryTable/>

            {/* pagenaiton */}
            <CategoryPagenation/>

        </div>
    );
}

export default Category;

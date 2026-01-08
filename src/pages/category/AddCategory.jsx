import React from 'react';
import ModalsContainer from '../../component/ModalsContainer';

const AddCategory = () => {
    return (
        <ModalsContainer
            id="add_product_category_modal"
            fullScreen={true}
            title="افزودن دسته محصولات"
        >
            <div className='container'>
                <div className='row justify-content-center'>

                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="input-group flex-nowrap mb-4">
                            <span className="input-group-text w_6rem justify-content-center">
                                دسته والد
                            </span>
                            <select type="text" className="form-control">
                                <option value="1">بدون والد</option>
                                <option value="1">دسته شماره 1</option>
                            </select>
                            {/* <span className="input-group-text w_6rem justify-content-center" id="addon-daste">دسته والد</span>
                                            <input type="text" className="form-control" placeholder="" value="بدون والد" readOnly aria-label="Username" aria-describedby="addon-daste" /> */}
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="input-group flex-nowrap mb-4">
                            <span className="input-group-text w_6rem justify-content-center" id="addon-onvan">عنوان</span>
                            <input type="text" className="form-control" placeholder="عنوان دسته" aria-label="Username" aria-describedby="addon-onvan" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="input-group mb-3">
                            <span className="input-group-text w_6rem justify-content-center">توضیحات</span>
                            <textarea className="form-control" placeholder='توضیحات' aria-label="With textarea"></textarea>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-8">
                        <div className="input-group mb-3">
                            <span className="input-group-text w_6rem justify-content-center" type="button" id="inputGroupFileAddon03">تصویر</span>
                            <input type="file" className="form-control" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                        <div className="form-check form-switch col-5 col-md-2">
                            <input
                                className="form-check-input pointer"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                            />
                            <label
                                className="form-check-label pointer"
                                htmlFor="flexSwitchCheckDefault"
                            >
                                وضعیت فعال
                            </label>
                        </div>
                    </div>

                </div>
            </div>

        </ModalsContainer>
    );
}

export default AddCategory;

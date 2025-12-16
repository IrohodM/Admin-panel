import React from 'react';
import ModalsContainer from '../../component/ModalsContainer';

const AddCategory = () => {
    return (
        <ModalsContainer>
            <div className="modal fade" id="CategoryModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">افزودن دسته بندی جدید</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
                        </div>
                        <div className='modal-body'>
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
                                </div>
                            </div>


                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">بستن</button>
                            <button type="button" className="btn btn-primary">ذخیره تغییرات</button>
                        </div>
                    </div>
                </div>
            </div>

        </ModalsContainer>
    );
}

export default AddCategory;

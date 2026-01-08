import React from 'react';
import ModalsContainer from '../../component/ModalsContainer';

const AddProduct = () => {
    return (
        <div>
            <ModalsContainer
                id="ProductModal"
                fullScreen={true}
                title="افزودن محصول جدید"
            >
                <div className='container'>
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-2">
                                <span className="input-group-text w_6rem justify-content-center">
                                    دسته
                                </span>
                                <select type="text" className="form-control">
                                    <option value="1">انتخاب دسته محصول</option>
                                    <option value="1">دسته شماره 1</option>
                                </select>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8">
                                <span className="chips_elem">
                                    <i className="bi bi-x text-danger"></i>
                                    دسته فلان
                                </span>
                                <span className="chips_elem">
                                    <i className="bi bi-x text-danger"></i>
                                    دسته فلان
                                </span>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    عنوان
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="عنوان محصول"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    قیمت
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="قیمت محصول"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    وزن
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="وزن محصول (کیلوگرم)"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    برند
                                </span>
                                <span className="input-group-text justify-content-center">
                                    <i className="bi bi-plus text-success hoverable_text pointer"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="قسمتی از نام برند را وارد کنید"
                                    list="brandLists"
                                />
                                <datalist id="brandLists">
                                    <option value="سامسونگ" />
                                    <option value="سونی" />
                                    <option value="اپل" />
                                </datalist>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-2">
                                <span className="input-group-text w_6rem justify-content-center">
                                    رنگ
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="قسمتی از نام رنگ را وارد کنید"
                                    list="colorList"
                                />
                                <datalist id="colorList">
                                    <option value="مشکی" />
                                    <option value="سفید" />
                                    <option value="قرمز" />
                                </datalist>
                            </div>

                            <div className="col-12 col-md-6 col-lg-8 mb-3 d-flex">
                                <span
                                    className="color_tag chips_elem d-flex justify-content-center align-items-center pb-2 bg-black"
                                >
                                    <i className="bi bi-x text-danger hoverable_text"></i>
                                </span>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-2">
                                <span className="input-group-text w_6rem justify-content-center">
                                    گارانتی
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="قسمتی از نام گارانتی را وارد کنید"
                                    list="guarantiList"
                                />
                                <datalist id="guarantiList">
                                    <option value="گارانتی فلان 1" />
                                    <option value="گارانتی فلان 2" />
                                    <option value="گارانتی فلان 3" />
                                </datalist>
                            </div>

                            <div className="col-12 col-md-6 col-lg-8 mb-3">
                                <span className="chips_elem">
                                    <i className="bi bi-x text-danger"></i>
                                    گارانتی فلان
                                </span>
                                <span className="chips_elem">
                                    <i className="bi bi-x text-danger"></i>
                                    گارانتی فلان
                                </span>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    توضیحات
                                </span>
                                <textarea
                                    type="text"
                                    className="form-control"
                                    placeholder="توضیحات"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    تصویر
                                </span>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder="تصویر"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    توضیح تصویر
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="یک کلمه در مورد تصویر"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    تگ ها
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="با - از هم جدا شوند"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    موجودی
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="فقط عدد"
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3">
                                <span className="input-group-text w_6rem justify-content-center">
                                    درصد تخفیف
                                </span>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="فقط عدد "
                                />
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

                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>

            </ModalsContainer>
        </div>
    );
}

export default AddProduct;



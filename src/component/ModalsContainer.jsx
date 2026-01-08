import React from 'react';
import { createPortal } from 'react-dom';

const ModalsContainer = ({ children ,id , fullScreen , title }) => {
    return createPortal(
        // <>
        //     {children}
        // </>,
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className={`modal-dialog ${fullScreen ? "modal-fullscreen" : ""}`}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="بستن"></button>
                    </div>
                    <div className='modal-body'>
                        {children}
                    </div>

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                        {/* <button type="button" className="btn btn-primary">ذخیره تغییرات</button> */}
                    </div>
                </div>
            </div>
        </div>
        ,
        document.getElementById('modals-root')
    );
}

export default ModalsContainer;

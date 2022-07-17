import React from 'react';
import cl from './ModalSuccess.module.css'
const ModalSuccess = ({children,success,setSuccess}) => {

    const rootClasses = [cl.myModal]

    if (success) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setSuccess(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalSuccess;
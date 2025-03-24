import React from "react";

const Input = ({Dato}) => {
    return(
        <div className='inputs'>
            <label htmlFor="">{Dato}</label>
            <input type="text" />
        </div>
    );
}

export default Input;
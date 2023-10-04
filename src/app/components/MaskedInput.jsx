import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInput = ({ mask, placeholder, value, onChange }) => {
    return (
      <InputMask mask={mask} value={value} onChange={onChange} className="border ">
        {(inputProps) => <input {...inputProps} placeholder={placeholder}  className=" border p-1"/>}
      </InputMask>
    );
  };
  
  export default MaskedInput;
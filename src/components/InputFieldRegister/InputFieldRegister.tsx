import React from "react";


type IProps = {
  title: string;
  idField: string;
  placeholder: string;
  type: string;
  className: string;
};

function InputFieldRegister(props: IProps) {
  const { title, idField, placeholder, type, className } = props;

  return (
    <div className={className}>
      <label htmlFor={idField} className="mb-2 block text-sm font-medium text-gray-500">
        {title}
      </label>
      <input
        type={type}
        id={idField}
        className="block w-full rounded-lg border border-[#2196f3] bg-white p-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-[#133c55] focus:ring-[#133c55]"
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputFieldRegister;
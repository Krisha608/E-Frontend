// import React from "react";

// const CustomInput = (props) => {
//   const { type, name, placeholder, classname } = props;
//   return (
//     <div>
//       <input
//         type={type}
//         name={name}
//         placeholder={placeholder}
//         className={`form-control ${classname}`}
//       />
//     </div>
//   );
// };

// export default CustomInput;
import React from "react";

const CustomInput = (props) => {
  //const { type, name, placeholder, className, value, onChange, onBlur } = props;
  const {
    type,
    name,
    placeholder,
    className,
    value,
    onChange,
    onBlur,
    disabled,
  } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        className={`form-control ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default CustomInput;
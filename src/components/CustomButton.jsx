import React from 'react';

const CustomButton = ({ label, icon, variant, type = "button", onClick }) => {
  // Las clases se definen según la "variant" (primary, success, reset)
  const buttonClass = `btn-${variant}`;

  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      <i className={`fas fa-${icon}`}></i> {label}
    </button>
  );
};

export default CustomButton;
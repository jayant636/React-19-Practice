import React from "react";

const InputForm = ({
  id,
  value,
  onChange,
  options,
  name,
  placeholder,
  type,
  label,
}) => {
  const RadioComponent = type === "radio" && (
    <div>
      {options.map((option) => {
        return (
          <label key={option.value}>
            <input
              type={type}
              name={name}
              onChange={onChange}
              value={option.value}
              checked={value === option.value}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );

  const Selectcomponent = type === "select" && (
    <select id={id} name={name} onChange={onChange}>
      {options.map((item) => {
        return (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        );
      })}
    </select>
  );

  function handleCheckbox(e) {
    const newValue = e.target.checked
      ? [...value, e.target.value]
      : value.filter((item) => item !== e.target.value);
    onChange({ target: { name, value: newValue } });
  }

  const CheckBoxComponent = type === "checkbox" && (
    <>
      {options.map((option) => {
        return (
          <label key={option.value}>
            <input
              type="checkbox"
              onChange={handleCheckbox}
              name={name}
              value={option.value}
              checked={value.includes(option.value)}
            />
            {option.label}
          </label>
        );
      })}
    </>
  );

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {type === "radio" ? (
        RadioComponent
      ) : type === "select" ? (
        Selectcomponent
      ) : type === "checkbox" ? (
        CheckBoxComponent
      ) : (
        <input
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default InputForm;

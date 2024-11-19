import React, { ChangeEvent, InputHTMLAttributes, useState } from "react";

function InputDebounced({
  onChange: handleOnChange,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const [val, setVal] = useState<string>("");
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setVal(text);

    const newTimer = setTimeout(() => {
      handleOnChange(e);
    }, 500);
    clearTimeout(timer);
    setTimer(newTimer);
  };

  return <input value={val} onChange={handleChange} {...props} />;
}

export default InputDebounced;

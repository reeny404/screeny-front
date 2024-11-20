import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from "react";

interface InputDebouncedProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function InputDebounced({
  onChange: handleOnChange,
  value,
  setValue,
  ...props
}: InputDebouncedProps) {
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);

    const newTimer = setTimeout(() => {
      handleOnChange(e);
    }, 800);
    clearTimeout(timer);
    setTimer(newTimer);
  };

  return <input value={value} onChange={handleChange} {...props} />;
}

export default InputDebounced;

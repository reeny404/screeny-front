import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface ButtonProps {
  isPressed?: boolean;
  onClick?: () => void;
  className?: string;
}

function RoundButton({
  children,
  isPressed,
  onClick,
  className,
}: ButtonProps & PropsWithChildren) {
  return (
    <button
      className={clsx(
        "text-nowrap rounded-full border border-gray-600 px-3 py-2 font-semibold",
        isPressed && "bg-white text-navy",
        !onClick && "cursor-default",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default RoundButton;

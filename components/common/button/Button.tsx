import React, { FC, HTMLAttributes } from "react";
import clsx from "clsx";

const Button: FC<
  {
    base?: string;
    hover?: string;
    active?: string;
    focusRing?: string;
    textColor?: string;
    radius?: string;
    px?: string;
    py?: string;
    outline?: boolean;
  } & HTMLAttributes<HTMLButtonElement>
> = ({ children, radius, px, py, className, style, outline, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={clsx(
        className,
        "focus:outline-none focus:ring",
        {
          "border border-primary-500 text-black bg-transparent hover:text-white":
            outline,
          "bg-primaryDark-500": !outline,
          "text-white": !outline,
        },
        `hover:bg-primaryDark-400`,
        `active:bg-primaryDark-600`,
        `focus:ring-primaryDark-200`,
        radius,
        px,
        py
      )}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  radius: "rounded-full",
  px: "px-6",
  py: "py-3",
  className: "",
  outline: false,
};

export default Button;

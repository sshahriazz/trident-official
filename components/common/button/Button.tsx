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
  } & HTMLAttributes<HTMLButtonElement>
> = ({
  children,
  base,
  hover,
  active,
  focusRing,
  textColor,
  radius,
  px,
  py,
  className,
  style,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={clsx(
        className,
        "focus:outline-none focus:ring",
        base,
        textColor,
        `hover:${hover}`,
        `active:${active}`,
        `focus:${focusRing}`,
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
  base: "bg-primaryDark-500",
  hover: "bg-primaryDark-400",
  active: "bg-primaryDark-600",
  focusRing: "ring-primaryDark-200",
  textColor: "text-white",
  radius: "rounded-full",
  px: "px-6",
  py: "py-3",
  className: "",
};

export default Button;

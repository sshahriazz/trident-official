import React from "react";

export const BorderLineButton = ({
  onClick,
  children,
  className = "py-2 px-6 border border-primaryDark-500 rounded-full transition ease-in-out delay-150 hover:border-white active:bg-primary-500   bg-white hover:bg-primary-500 text-primaryDark-500 hover:text-white",
}: {
  onClick: any;
  children: any;
  className?: string;
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
// const BorderLineButton = ({ onClick, children, className = "py-2 px-6 border border-primaryDark-500 rounded-full transition ease-in-out delay-150 hover:border-white active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300", color = "bg-white", hoverColor = "bg-primary", textColor = "text-primaryDark-500", hoverTextColor = "text-white" }: { onClick: any, children: any, className?: string, color?: string, hoverColor?: string, textColor?: string, hoverTextColor?: string }) => {
//     return (
//         <button className={`${className} ${color} ${textColor} hover:${hoverColor} hover:${hoverTextColor}`} onClick={onClick}>
//             {children}
//         </button>
//     )
// }

export default BorderLineButton;

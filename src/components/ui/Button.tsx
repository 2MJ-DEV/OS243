import React, { CSSProperties } from "react";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  style?: CSSProperties;
  variant?: "primary" | "secondary" | "danger" | "outline";
};

const Button: React.FC<ButtonProps> = ({ label, onClick, style, variant = "primary" }) => {
  const baseClasses =
    "cursor-pointer py-2 px-6 duration-300 active:scale-90 rounded-lg font-light text-xs lg:text-sm";

  const variants: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 border-zinc-950/5",
    secondary: "bg-zinc-200 text-zinc-800 hover:bg-zinc-300 active:bg-zinc-400 border-zinc-300",
    danger: "bg-red-600 text-white hover:bg-red-500 active:bg-red-800 border-red-700",
    outline:
      "bg-transparent text-zinc-800 hover:bg-zinc-100 border border-zinc-950/5 hover:border-zinc-300 active:bg-zinc-200",
  };

  return (
    <button onClick={onClick} style={style} className={`${baseClasses} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
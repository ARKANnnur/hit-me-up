import React from "react";

export default function Button({
  children,
  custom,
  onClick,
  active = false,
  disabled,
}: {
  children: React.ReactNode;
  custom?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      className={`${custom} ${active ? "border-in" : "border-out"} hover:border-in h-auto bg-dark-300 px-5 py-2 text-sm transition-all duration-200`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

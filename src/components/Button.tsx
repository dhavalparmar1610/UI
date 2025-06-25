import classNames from 'classnames';
import React from 'react'

type Props = {
  label: string;
  onClick?: () => void;
  variant?: "default" | "primary" | "secondary" | "link";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  Icon?: React.ElementType | null;
  fullWidth?: boolean;
  className?: string;
  iconClassName?: string;
};


export const Button = ({ label, onClick, className, variant = "default", size = "md", fullWidth = false, isLoading, Icon, disabled, iconClassName }: Props) => {
  let btnStyles = "inline-flex items-center justify-center rounded-xl";

  if (size === "sm") btnStyles += " px-3 py-1.5 text-sm";
  else if (size === "md") btnStyles += " px-4 py-2 text-base";
  else if (size === "lg") btnStyles += " px-5 py-3 text-lg";

  if (variant === "default") btnStyles += " bg-gray-200 text-gray-800 hover:bg-gray-300";
  else if (variant === "primary") btnStyles += " bg-blue-600 text-white hover:bg-blue-700";
  else if (variant === "secondary") btnStyles += " bg-gray-500 text-white hover:bg-gray-600";
  else if (variant === "link") btnStyles += " text-blue-600 hover:underline";

  return (
    <button
      onClick={onClick}
      className={classNames(btnStyles, className, { "w-full": fullWidth })}
      disabled={disabled || isLoading}
      type="button"
      aria-busy={isLoading}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <>
          {Icon && <Icon className={classNames("mr-2", iconClassName)} />}
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

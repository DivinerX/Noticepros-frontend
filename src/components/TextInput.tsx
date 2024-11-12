import React, { FC, InputHTMLAttributes } from "react";

type InputSize = "small" | "medium" | "large";
type InputVariant = "outline" | "filled" | "underlined";
type InputColor = "primary" | "secondary" | "warning" | "success" | "danger"; // Define your color types

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputSize?: InputSize;
  variant?: InputVariant;
  color?: InputColor; // Add color prop
  placeholder?: string;
  label?: string; // Add label prop
  description?: string; // Add description prop
}

const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  inputSize = "medium",
  variant = "outline",
  color = "primary", // Default color
  placeholder = "",
  label,
  description,
  className = "",
  ...props
}) => {
  // Determine Tailwind classes based on inputSize, variant, and color
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-3",
    large: "py-3 px-4 text-lg",
  };

  const colorClasses = {
    primary: "border-blue-500 focus:border-blue-700 focus:ring-blue-200",
    secondary: "border-gray-400 focus:border-gray-600 focus:ring-gray-300",
    warning: "border-yellow-500 focus:border-yellow-700 focus:ring-yellow-200",
    success: "border-green-500 focus:border-green-700 focus:ring-green-200",
    danger: "border-red-500 focus:border-red-700 focus:ring-red-200",
  };

  const variantClasses = {
    outline: `border ${colorClasses[color]} bg-white focus:outline-none focus:shadow-outline rounded-md`,
    filled: `border ${colorClasses[color]} bg-gray-200 focus:outline-none focus:shadow-outline rounded-md`,
    underlined: `border-b ${colorClasses[color]} bg-transparent focus:outline-none focus:shadow-outline`,
  };

  const inputClasses = `${sizeClasses[inputSize]} ${variantClasses[variant]} transition duration-150 ease-in-out ${className}`;

  return (
    <div className="flex flex-col my-1">
      {label && <label className="mb-0 text-gray-700">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
        {...props}
      />
      {description && <p className="mt-0 text-red-500 text-sm">{description}</p>}
    </div>
  );
};

export default TextInput;

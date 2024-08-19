import { forwardRef, ComponentProps } from "react";
import { cn } from "../../utils/stringUtils";

const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "w-full sm:w-auto flex-none bg-blue-600 hover:bg-blue-700 text-white text-lg leading-6 font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200",
          className
        )}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

export default Button;

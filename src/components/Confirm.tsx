import React, { useState, useEffect } from "react";
import { Send, X, CheckCircle } from "lucide-react";

interface ConfirmProps {
  message?: string;
  duration?: number;
  show: boolean;
  onClose?: () => void;
  variant?: "success" | "warning" | "info";
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const Confirm: React.FC<ConfirmProps> = ({
  message = "Your email has been sent successfully!",
  duration = 3000,
  variant = "success",
  show
}) => {
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    if (show) {
      setAnimateProgress(true);
      const timeout = setTimeout(() => {
        setAnimateProgress(false);
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  // Define variant-specific styles
  const variantStyles: Record<
    string,
    { borderColor: string; bgColor: string; textColor: string }
  > = {
    success: {
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-500",
    },
    warning: {
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-500",
    },
    info: {
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-500",
    },
  };


  const { borderColor, bgColor, textColor } = variantStyles[variant];

  return (
    <div>
      <div
        className={`border-l-4 ${borderColor} shadow-lg rounded-lg 
        transition-all duration-300 ease-in-out bg-white w-[350px]
        ${isExiting ? 'opacity-0 translate-x-5' : 'opacity-100'}
        hover:shadow-xl `}
      >
        <div className="flex items-center px-5 py-4 ssm:px-4 gap-4">
          <div className={`${bgColor} p-2 rounded-full`}>
            <CheckCircle size={28} className={textColor} />
          </div>

          <div className="flex-1">
            {variant === "warning" ? (
              <h2 className="font-bold text-lg ssm:text-base text-gray-800">
                Email Not Sent
              </h2>
            ) : (
              <h2 className="font-bold text-lg ssm:text-base text-gray-800">
                Email Sent
              </h2>
            )}
            <p className="text-sm ssm:text-xs text-gray-600 mt-1">{message}</p>
          </div>

        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 h-1 overflow-hidden rounded-b-lg">
          <div
            className={`${borderColor.replace("border", "bg")} h-full`}
            style={{
                animation: animateProgress
                  ? `shrink ${duration / 1000}s linear forwards`
                  : "none",
              }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

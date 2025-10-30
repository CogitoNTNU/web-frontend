"use client";

interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

export default function Spinner({
  size = "md",
  color = "white",
}: SpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    md: "w-12 h-12 border-4",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizeClasses[size]} border-${color} border-t-transparent rounded-full animate-spin`}
        style={{
          borderColor: color === "white" ? "white" : color,
          borderTopColor: "transparent",
        }}
      />
    </div>
  );
}

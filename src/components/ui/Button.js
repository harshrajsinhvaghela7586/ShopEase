export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  icon: Icon,
  className = "",
  disabled = false,
}) {
  const baseStyle =
    "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#111111] hover:bg-[#8C6D58] text-white shadow-md shadow-black/5",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200",
    outline: "border-2 border-[#8C6D58] text-[#8C6D58] hover:bg-[#8C6D58]/10",
    danger: "bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 shadow-md",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
    >
      {Icon && <Icon className="text-base" />}
      {children}
    </button>
  );
}
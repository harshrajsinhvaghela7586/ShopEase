export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  required = false,
  icon: Icon,
  error,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
          {label} {required && <span className="text-pink-600">*</span>}
        </label>
      )}
      <div className="relative flex items-center">
        {Icon && (
          <div className="absolute left-3.5 text-gray-400 text-lg pointer-events-none">
            <Icon />
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full py-2.5 ${
            Icon ? "pl-10" : "pl-4"
          } pr-4 bg-gray-50/50 border ${
            error ? "border-red-400 focus:ring-red-200" : "border-gray-200 focus:ring-pink-100 focus:border-pink-500"
          } rounded-xl text-sm text-gray-900 outline-none focus:ring-4 transition duration-200`}
        />
      </div>
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
    </div>
  );
}
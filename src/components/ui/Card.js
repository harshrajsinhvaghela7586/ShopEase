export default function Card({ title, description, icon: Icon, children }) {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {Icon && (
          <div className="w-12 h-12 mb-4 rounded-lg bg-pink-50 flex items-center justify-center text-pink-600 text-2xl">
            <Icon />
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      </div>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
}
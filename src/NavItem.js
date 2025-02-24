
export default function NavItem({ icon, text, showText }) {
    return (
      <div className="flex items-center gap-4 text-gray-300 hover:text-white cursor-pointer p-3 rounded-lg transition-all">
        {icon}
        {showText && <span className="text-lg">{text}</span>}
      </div>
    );
  }
  
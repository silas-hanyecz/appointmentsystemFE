function NavButton({ icon: Icon, label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-colors ${
                active ? "bg-amber-400 text-emerald-950 font-medium" : "text-stone-300 hover:bg-emerald-900"
            }`}
        >
            <Icon size={17} />
            {label}
        </button>
    );
}
export default NavButton;
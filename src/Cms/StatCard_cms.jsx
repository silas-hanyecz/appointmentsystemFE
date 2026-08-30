function StatCard({ label, value, sub }) {
    return (
        <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-stone-400 mb-2">{label}</div>
            <div className="text-3xl font-light text-stone-50" style={{ fontFamily: "'Fraunces', serif" }}>
                {value}
            </div>
            {sub && <div className="text-xs text-stone-500 mt-1">{sub}</div>}
        </div>
    );
}
export default StatCard;
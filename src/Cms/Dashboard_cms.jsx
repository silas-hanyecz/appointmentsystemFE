import StatCard_cms from "./StatCard_cms.jsx";

function Dashboard({ appointments, services }) {
    const today = appointments.filter((a) => a.date === "02.09.2026" && a.status !== "storniert").length;
    const open = appointments.filter((a) => a.status === "offen").length;
    const revenue = appointments
        .filter((a) => a.status !== "storniert")
        .reduce((sum, a) => {
            const s = services.find((s) => s.name === a.service);
            return sum + (s ? s.price : 0);
        }, 0);

    return (
        <div>
            <h1 className="text-2xl font-light text-stone-50 mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                Übersicht
            </h1>
            <p className="text-sm text-stone-400 mb-6">Ein kurzer Blick auf die Woche.</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <StatCard_cms label="Termine heute" value={today} sub="Praxis Kreis 4" />
                <StatCard_cms label="Noch offen" value={open} sub="warten auf Bestätigung" />
                <StatCard_cms label="Umsatz (Woche)" value={`CHF ${revenue}`} sub="bestätigte & offene Termine" />
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-5">
                <div className="text-sm text-stone-300 mb-3 font-medium">Nächste Termine</div>
                <div className="space-y-2">
                    {appointments.slice(0, 4).map((a) => (
                        <div key={a.id} className="flex items-center justify-between text-sm py-2 border-b border-emerald-800/60 last:border-0">
                            <span className="text-stone-200">{a.client}</span>
                            <span className="text-stone-400">{a.service}</span>
                            <span className="text-stone-400 font-mono text-xs">{a.date} · {a.time}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyles[a.status]}`}>{statusLabel[a.status]}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;
function Termine({ appointments, setAppointments }) {
    const [query, setQuery] = useState("");
    const filtered = appointments.filter(
        (a) => a.client.toLowerCase().includes(query.toLowerCase()) || a.service.toLowerCase().includes(query.toLowerCase())
    );

    function setStatus(id, status) {
        setAppointments((prev) => prev.map((a) => (a.id === id ? { ...a, status } : a)));
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-light text-stone-50 mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                        Termine
                    </h1>
                    <p className="text-sm text-stone-400">Alle Buchungen im Überblick.</p>
                </div>
                <div className="relative">
                    <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Suchen..."
                        className="bg-emerald-900/40 border border-emerald-800 rounded-xl pl-9 pr-3 py-2 text-sm text-stone-100 placeholder-stone-500 outline-none focus:border-amber-400"
                    />
                </div>
            </div>

            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                    <tr className="text-left text-xs uppercase tracking-wider text-stone-500 border-b border-emerald-800">
                        <th className="px-5 py-3 font-normal">Kunde</th>
                        <th className="px-5 py-3 font-normal">Leistung</th>
                        <th className="px-5 py-3 font-normal">Datum</th>
                        <th className="px-5 py-3 font-normal">Zeit</th>
                        <th className="px-5 py-3 font-normal">Status</th>
                        <th className="px-5 py-3 font-normal text-right">Aktionen</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filtered.map((a) => (
                        <tr key={a.id} className="border-b border-emerald-800/60 last:border-0">
                            <td className="px-5 py-3 text-stone-100">{a.client}</td>
                            <td className="px-5 py-3 text-stone-300">{a.service}</td>
                            <td className="px-5 py-3 text-stone-400 font-mono text-xs">{a.date}</td>
                            <td className="px-5 py-3 text-stone-400 font-mono text-xs">{a.time}</td>
                            <td className="px-5 py-3">
                                <span className={`text-xs px-2 py-0.5 rounded-full border ${statusStyles[a.status]}`}>{statusLabel[a.status]}</span>
                            </td>
                            <td className="px-5 py-3">
                                <div className="flex justify-end gap-2">
                                    <button
                                        onClick={() => setStatus(a.id, "bestaetigt")}
                                        title="Bestätigen"
                                        className="p-1.5 rounded-lg border border-emerald-800 text-emerald-400 hover:bg-emerald-800/50"
                                    >
                                        <Check size={14} />
                                    </button>
                                    <button
                                        onClick={() => setStatus(a.id, "storniert")}
                                        title="Stornieren"
                                        className="p-1.5 rounded-lg border border-emerald-800 text-stone-400 hover:bg-emerald-800/50"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan={6} className="px-5 py-8 text-center text-stone-500 text-sm">
                                Keine Termine gefunden.
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Termine;
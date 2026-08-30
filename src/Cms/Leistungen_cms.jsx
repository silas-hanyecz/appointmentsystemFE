function Leistungen({ services, setServices }) {
    const [editingId, setEditingId] = useState(null);
    const [adding, setAdding] = useState(false);

    function save(service) {
        setServices((prev) => {
            const exists = prev.some((s) => s.id === service.id);
            return exists ? prev.map((s) => (s.id === service.id ? service : s)) : [...prev, service];
        });
        setEditingId(null);
        setAdding(false);
    }

    function remove(id) {
        setServices((prev) => prev.filter((s) => s.id !== id));
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-light text-stone-50 mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                        Leistungen
                    </h1>
                    <p className="text-sm text-stone-400">Angebot, Dauer und Preise pflegen.</p>
                </div>
                {!adding && (
                    <button
                        onClick={() => setAdding(true)}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-amber-400 text-emerald-950"
                    >
                        <Plus size={15} /> Neue Leistung
                    </button>
                )}
            </div>

            <div className="space-y-3">
                {adding && <ServiceForm onSave={save} onCancel={() => setAdding(false)} />}

                {services.map((s) =>
                    editingId === s.id ? (
                        <ServiceForm key={s.id} initial={s} onSave={save} onCancel={() => setEditingId(null)} />
                    ) : (
                        <div
                            key={s.id}
                            className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-5 flex items-center justify-between"
                        >
                            <div>
                                <div className="flex items-baseline gap-3">
                                    <h3 className="text-stone-50 font-medium" style={{ fontFamily: "'Fraunces', serif", fontSize: "17px" }}>
                                        {s.name}
                                    </h3>
                                    <span className="text-amber-400 text-sm font-mono">CHF {s.price}</span>
                                    <span className="text-stone-500 text-xs font-mono">{s.duration} Min.</span>
                                </div>
                                <p className="text-sm text-stone-400 mt-1 max-w-xl">{s.desc}</p>
                            </div>
                            <div className="flex gap-2 shrink-0">
                                <button
                                    onClick={() => setEditingId(s.id)}
                                    className="p-2 rounded-lg border border-emerald-800 text-stone-300 hover:bg-emerald-800/50"
                                >
                                    <Pencil size={14} />
                                </button>
                                <button
                                    onClick={() => remove(s.id)}
                                    className="p-2 rounded-lg border border-emerald-800 text-stone-400 hover:bg-emerald-800/50"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
export default Leistungen;
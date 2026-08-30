function ServiceForm({ initial, onSave, onCancel }) {
    const [form, setForm] = useState(
        initial || { name: "", duration: "", price: "", desc: "" }
    );
    return (
        <div className="bg-emerald-900/60 border border-amber-400/40 rounded-xl p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className="block text-xs text-stone-400 mb-1">Name</label>
                    <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs text-stone-400 mb-1">Dauer (Min.)</label>
                        <input
                            type="number"
                            value={form.duration}
                            onChange={(e) => setForm({ ...form, duration: e.target.value })}
                            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-stone-400 mb-1">Preis (CHF)</label>
                        <input
                            type="number"
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                        />
                    </div>
                </div>
            </div>
            <div>
                <label className="block text-xs text-stone-400 mb-1">Beschreibung</label>
                <textarea
                    rows={2}
                    value={form.desc}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                />
            </div>
            <div className="flex justify-end gap-2">
                <button onClick={onCancel} className="px-3 py-1.5 rounded-lg text-sm text-stone-400 hover:text-stone-200">
                    Abbrechen
                </button>
                <button
                    onClick={() =>
                        onSave({
                            ...form,
                            duration: Number(form.duration) || 0,
                            price: Number(form.price) || 0,
                            id: initial?.id || "s" + Date.now(),
                        })
                    }
                    className="px-4 py-1.5 rounded-lg text-sm font-medium bg-amber-400 text-emerald-950"
                >
                    Speichern
                </button>
            </div>
        </div>
    );
}
export default ServiceForm;
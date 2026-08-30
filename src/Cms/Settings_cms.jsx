function Settings_cms() {
    return (
        <div>
            <h1 className="text-2xl font-light text-stone-50 mb-1" style={{ fontFamily: "'Fraunces', serif" }}>
                Einstellungen
            </h1>
            <p className="text-sm text-stone-400 mb-6">Praxisdaten und Öffnungszeiten.</p>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-5 space-y-4 max-w-lg">
                <div>
                    <label className="block text-xs text-stone-400 mb-1">Praxisname</label>
                    <input
                        defaultValue="LICHTUNG"
                        className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                    />
                </div>
                <div>
                    <label className="block text-xs text-stone-400 mb-1">Adresse</label>
                    <input
                        defaultValue="Zeltweg 24, 8032 Zürich"
                        className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label className="block text-xs text-stone-400 mb-1">Öffnung (Mo–Fr)</label>
                        <input
                            defaultValue="08:00"
                            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-stone-400 mb-1">Schliessung (Mo–Fr)</label>
                        <input
                            defaultValue="19:00"
                            className="w-full bg-emerald-950 border border-emerald-800 rounded-lg px-3 py-2 text-sm text-stone-100 outline-none focus:border-amber-400"
                        />
                    </div>
                </div>
                <button className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-400 text-emerald-950">Speichern</button>
            </div>
        </div>
    );
}
export default Settings_cms;
import './CSS/Home.css'
function Home() {
    return (
        <>
            <main>
                <section class="hero">
                    <div class="canopy" aria-hidden="true">
                        <span></span><span></span><span></span><span></span>
                    </div>
                    <div class="wrap hero-grid">
                        <div>
                            <div class="eyebrow">Dein Coiffeur · Solothurn</div>
                            <h1>Raum für Erholung, <em>mitten</em> im Alltag.</h1>
                            <p class="lede">LICHTUNG ist eine kleine Praxis für Massage und Bewegungstherapie im Kreis 4. Wir schaffen kurze, bewusste Lichtungen in vollen Wochen — Zeit, in der sich Verspannungen lösen dürfen.</p>
                            <div class="hero-actions">
                                <a href="#buchen" class="btn btn-primary">Termin buchen</a>
                                <a href="#leistungen" class="btn btn-ghost">Leistungen ansehen</a>
                            </div>
                        </div>
                        <div class="hero-card">
                            <h3>Heute noch frei</h3>
                            <div class="sub">Donnerstag, Praxis Kreis 4</div>
                            <div class="mini-slots">
                                <span class="mini-slot taken">09:00</span>
                                <span class="mini-slot free">10:30</span>
                                <span class="mini-slot taken">12:00</span>
                                <span class="mini-slot free">14:00</span>
                                <span class="mini-slot free">16:30</span>
                                <span class="mini-slot taken">18:00</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default Home

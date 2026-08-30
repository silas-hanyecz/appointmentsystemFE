function Navigation() {

    return (
        <>
            <header>
                <div class="wrap nav">
                    <a href="#" class="logo">
                        <svg class="logo-mark" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="#e8b454" stroke-width="1.4"/>
                            <circle cx="12" cy="12" r="3.5" fill="#e8b454"/>
                        </svg>
                        LICHTUNG
                    </a>
                    <nav class="nav-links">
                        <a href="#leistungen">Leistungen</a>
                        <a href="#ablauf">Ablauf</a>
                        <a href="#ueber-uns">Über mich</a>
                        <a href="#kontakt">Kontakt</a>
                    </nav>
                    <a href="#buchen" class="btn btn-primary">Termin buchen</a>
                </div>
            </header>
        </>
    )
}
export default Navigation
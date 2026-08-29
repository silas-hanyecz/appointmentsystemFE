function Booking(){
    return (
        <section id="buchen">
            <div className="wrap">
                <div className="section-head">
                    <div className="kicker">Termin buchen</div>
                    <h2>Finden Sie Ihre Lichtung</h2>
                    <p>Wählen Sie eine Leistung, einen Tag und ein freies Zeitfenster. Die Buchung ist in unter einer
                        Minute erledigt.</p>
                </div>

                <div className="booking-panel">
                    <div className="booking-progress" id="progress"></div>
                    <div id="step-content"></div>
                </div>
            </div>
        </section>
    )
}
export default Booking;
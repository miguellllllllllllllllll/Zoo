import "../App.css";
import Navbar from "../components/navbar";

function Datenschutz() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="datenschutz-wrapper">
                {/* Hauptüberschrift */}
                <h1>Datenschutz</h1>

                {/* Abschnitt 1: Daten beim Aufruf */}
                <section>
                    <h2>1. Beim Aufruf unserer Webseite</h2>
                    <p>
                        Die IP wird im Logfile der Loadbalancer erfasst. Dies dient der
                        Sicherstellung des Betriebs und dem Schutz vor Angriffen. Die
                        Logfiles werden nach 90 Tagen gelöscht.
                    </p>
                </section>

                {/* Abschnitt 2: Daten aufgrund Ihrer Eingaben */}
                <section>
                    <h2>2. Aufgrund Ihrer Eingaben auf unserer Webseite</h2>
                    <ul>
                        <li>
                            <strong>Kontaktformular und Feedback-Formular:</strong> Ihr Vor-
                            und Nachname und Ihre E-Mail-Adresse
                        </li>
                        <li>
                            <strong>Newsletter-Bestellung:</strong> Ihre E-Mail-Adresse
                        </li>
                    </ul>
                    <p>Weitere Daten erheben wir nicht.</p>
                </section>

                {/* Abschnitt: Erhebung und Zweck */}
                <section>
                    <h3>Auf welche Weise erheben wir Ihre Daten?</h3>
                    <p>
                        Die Daten, die wir bei jedem Zugriff erheben, protokollieren wir
                        automatisiert; ansonsten nur aufgrund Ihrer Eingaben.
                    </p>

                    <h3>Wofür nutzen wir Ihre Daten?</h3>
                    <ul>
                        <li>
                            Ausschließlich zur Bereitstellung, Optimierung und Sicherheit
                            unseres Internetangebots
                        </li>
                        <li>
                            Mit Ihrer Einwilligung zur Entgegenahme Ihrer Mitteilung und zur
                            Abwicklung Ihrer Bestellung
                        </li>
                    </ul>
                    <p>
                        Wir nutzen Ihre Daten <strong>nicht</strong> zur Profilbildung,
                        <strong> nicht</strong> für Werbung und <strong>grundsätzlich
                        nicht</strong> zur Weitergabe an Dritte, außer:
                    </p>
                    <ul>
                        <li>
                            Bei der Bestellung von Bildmaterial teilen wir Ihre Adressdaten
                            dem Versanddienstleister mit
                        </li>
                        <li>
                            Zur Verfolgung rechtlicher Interessen, insbesondere wenn die Daten
                            im Zusammenhang mit einem Angriff auf unsere IT-Strukturen stehen
                        </li>
                    </ul>
                </section>

                {/* Abschnitt: Rechte */}
                <section>
                    <h3>Welche Rechte haben Sie?</h3>
                    <ul>
                        <li>Auskunft</li>
                        <li>Löschung</li>
                        <li>Berichtigung</li>
                        <li>Widerspruch</li>
                    </ul>
                    <p>
                        <strong>Datenschutzbeauftragter:</strong>
                        <br />
                        Presse- und Informationsamt der Bundesregierung<br />
                        11044 Berlin
                        <br />
                        Telefon 030 18 272-0 <br />
                        Fax: 030 18 272-2739 <br />
                        E-Mail: datenschutzbeauftragte@bpa.bund.de
                    </p>
                </section>

                {/* Abschnitt: Matomo */}
                <section>
                    <h2>Analyse-Tool Matomo</h2>
                    <p>
                        Zur statistischen Auswertung setzt das Presse- und Informationsamt
                        der Bundesregierung (BPA) auf dieser Webseite <em>Matomo</em> (früher
                        "PIWIK") ein. Das ist ein Open-Source-Tool zur Web-Analyse. Mit
                        Matomo werden keine Daten an Server übermittelt, die außerhalb der
                        Kontrolle des BPA liegen (siehe Datenschutzerklärung). Matomo ist
                        deaktiviert, wenn Sie unsere Webseite besuchen. Erst wenn Sie aktiv
                        einwilligen, wird Ihr Nutzungsverhalten anonymisiert erfasst.
                    </p>
                    <p>
                        Matomo verwendet sog. Cookies. Das sind Textdateien, die auf Ihrem
                        Computer gespeichert werden und die es dem BPA ermöglichen, die
                        Benutzung seiner Webseite zu analysieren. Dazu werden die durch den
                        Cookie gewonnenen Informationen über die Nutzung an den Server des
                        BPA übertragen und gespeichert, damit das Nutzungsverhalten
                        ausgewertet werden kann. Ihre IP-Adresse wird umgehend anonymisiert;
                        damit bleiben Sie als Nutzer anonym. Die durch den Cookie erzeugten
                        Informationen über Ihre Benutzung dieser Webseite werden nicht an
                        Dritte weitergegeben.
                    </p>
                    <p>
                        Das BPA versteht diese Analyse als Bestandteil seines
                        Internet-Services. Es möchte damit die Webseite weiter verbessern
                        und noch mehr an die Bedürfnisse der Nutzerinnen und Nutzer
                        anpassen.
                    </p>
                    <p>
                        Sie können sich hier entscheiden, ob in Ihrem Browser ein
                        Webanalyse-Cookie abgelegt werden darf, um dem Bundespresseamt die
                        Erfassung und Analyse statistischer Daten zu ermöglichen.
                    </p>
                </section>
            </main>
        </>
    );
}

export default Datenschutz;

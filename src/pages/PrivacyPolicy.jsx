import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE_DATA } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lastUpdate = '09/12/2024'

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="bg-[#111] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm mb-4">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla Home
          </Link>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Privacy Policy</h1>
              <p className="text-white/50 text-sm">Informativa sul trattamento dei dati personali</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-[#111] rounded-xl p-6 md:p-10 border border-white/10">
          <p className="text-white/50 text-sm mb-8">Ultimo aggiornamento: {lastUpdate}</p>

          {/* Sezione 1 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">1. Titolare del Trattamento</h2>
            <p className="text-white/70 mb-4">Il Titolare del trattamento dei dati personali è:</p>
            <div className="bg-white/5 rounded-lg p-5 border-l-4 border-purple-500">
              <p className="font-semibold mb-2">{SITE_DATA.name}</p>
              <p className="text-white/60 text-sm flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {SITE_DATA.address.full}
              </p>
              <p className="text-white/60 text-sm flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_DATA.phone}
              </p>
              <p className="text-white/60 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE_DATA.email}
              </p>
            </div>
          </section>

          {/* Sezione 2 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>

            <h3 className="text-lg font-medium mb-3 text-purple-400">2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="text-white/70 mb-4">Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-6 ml-4">
              <li><strong>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
              <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
            </ul>

            <div className="bg-purple-500/10 rounded-lg p-4 mb-6 border border-purple-500/20">
              <p className="text-purple-300 font-medium mb-2">Finalità: I dati vengono raccolti esclusivamente per:</p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm ml-2">
                <li>Rispondere alle richieste di preventivo</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Organizzare appuntamenti e consulenze</li>
                <li>Gestire la relazione commerciale</li>
              </ul>
            </div>

            <h3 className="text-lg font-medium mb-3 text-purple-400">2.2 Base giuridica del trattamento</h3>
            <p className="text-white/70 mb-4">
              Il trattamento è basato sul <strong>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
            </p>
          </section>

          {/* Sezione 3 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">3. Modalità di Trattamento</h2>
            <p className="text-white/70 mb-4">
              I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
            </p>
            <p className="text-white/70">
              Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
            </p>
          </section>

          {/* Sezione 4 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">4. Conservazione dei Dati</h2>
            <p className="text-white/70 mb-4">
              I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
              <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* Sezione 5 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Comunicazione e Diffusione dei Dati</h2>
            <p className="text-white/70 mb-4">
              I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>

            <div className="bg-red-500/10 rounded-lg p-4 mt-6 border border-red-500/20">
              <p className="text-red-300 font-medium mb-2">I tuoi dati NON verranno MAI:</p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm ml-2">
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* Sezione 6 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">6. Diritti dell'Interessato</h2>
            <p className="text-white/70 mb-4">In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
              <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>

            <div className="bg-purple-500/10 rounded-lg p-4 mt-6 border border-purple-500/20">
              <p className="text-purple-300 font-medium mb-2">Come esercitare i tuoi diritti:</p>
              <p className="text-white/70 text-sm">
                Puoi esercitare i tuoi diritti inviando una richiesta via email a{' '}
                <a href={`mailto:${SITE_DATA.email}`} className="text-purple-400 hover:text-purple-300">{SITE_DATA.email}</a>
                {' '}o tramite raccomandata A/R all'indirizzo: {SITE_DATA.address.full}.
              </p>
              <p className="text-white/70 text-sm mt-2">
                Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
              </p>
            </div>
          </section>

          {/* Sezione 7 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">7. Diritto di Reclamo</h2>
            <p className="text-white/70 mb-4">
              Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
            </p>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="font-medium mb-2">Garante per la protezione dei dati personali:</p>
              <p className="text-white/60 text-sm">Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">www.garanteprivacy.it</a></p>
              <p className="text-white/60 text-sm">Email: garante@gpdp.it</p>
              <p className="text-white/60 text-sm">PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          {/* Sezione 8 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="text-white/70">
              Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra{' '}
              <Link to="/cookie-policy" className="text-purple-400 hover:text-purple-300">Cookie Policy</Link>.
            </p>
          </section>

          {/* Sezione 9 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">9. Modifiche alla Privacy Policy</h2>
            <p className="text-white/70">
              Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
            </p>
          </section>

          {/* Sezione 10 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">10. Contatti</h2>
            <p className="text-white/70 mb-4">Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 bg-purple-500/10 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {SITE_DATA.email}
              </a>
              <a href={`tel:${SITE_DATA.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-purple-400 hover:text-purple-300 bg-purple-500/10 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_DATA.phone}
              </a>
            </div>
          </section>

          <div className="border-t border-white/10 pt-6 mt-10">
            <p className="text-white/50 text-sm text-center">
              Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/" className="px-8 py-3 border border-white/30 text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all text-center rounded-lg">
            Torna alla Home
          </Link>
          <Link to="/cookie-policy" className="px-8 py-3 bg-purple-500 text-white text-sm tracking-widest uppercase font-medium hover:bg-purple-400 transition-all text-center rounded-lg">
            Leggi la Cookie Policy
          </Link>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-[#050505] py-8 border-t border-white/5 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl font-bold tracking-wider mb-4">
            PRO-<span className="text-purple-500">ZAC</span>
          </p>
          <p className="text-white/50 text-sm mb-4">{SITE_DATA.address.full}</p>
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} {SITE_DATA.name}. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}

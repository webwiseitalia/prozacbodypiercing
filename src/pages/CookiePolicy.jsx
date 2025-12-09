import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE_DATA } from '../constants/siteData'

export default function CookiePolicy() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Cookie Policy</h1>
              <p className="text-white/50 text-sm">Informativa sull'utilizzo dei cookie</p>
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
            <h2 className="text-xl font-semibold mb-4">1. Cosa sono i Cookie</h2>
            <p className="text-white/70 mb-4">
              I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo (computer, tablet, smartphone) durante la navigazione. Vengono utilizzati per diverse finalità, come ricordare le tue preferenze, migliorare la tua esperienza di navigazione e raccogliere informazioni anonime sull'utilizzo del sito.
            </p>
            <div className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="text-white/60 text-sm">
                I cookie non contengono virus e non possono accedere ad altri dati sul tuo dispositivo. Sono ampiamente utilizzati per far funzionare i siti web in modo più efficiente.
              </p>
            </div>
          </section>

          {/* Sezione 2 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">2. Tipologie di Cookie Utilizzati</h2>

            <h3 className="text-lg font-medium mb-3 text-purple-400">2.1 Cookie Tecnici (Necessari)</h3>
            <p className="text-white/70 mb-4">
              Questi cookie sono essenziali per il corretto funzionamento del sito web. Non raccolgono informazioni personali e non possono essere disattivati.
            </p>
            <div className="bg-green-500/10 rounded-lg p-4 mb-6 border border-green-500/20">
              <p className="text-green-300 font-medium mb-2">Cookie tecnici utilizzati su questo sito:</p>
              <ul className="list-disc list-inside text-white/70 space-y-1 text-sm ml-2">
                <li><strong>{SITE_DATA.cookieConsentKey}</strong> - Memorizza la tua scelta sui cookie (durata: 1 anno)</li>
              </ul>
            </div>

            <h3 className="text-lg font-medium mb-3 text-purple-400">2.2 Cookie di Terze Parti</h3>
            <p className="text-white/70 mb-4">
              Il nostro sito può includere contenuti e servizi di terze parti che potrebbero installare propri cookie:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mb-4 ml-4">
              <li>
                <strong>Google Maps</strong> - Per mostrare la mappa interattiva della nostra posizione.
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-1">Privacy Policy di Google</a>
              </li>
            </ul>

            <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
              <p className="text-yellow-300 font-medium mb-2">Nota importante:</p>
              <p className="text-white/70 text-sm">
                Non utilizziamo cookie di profilazione o marketing. Non tracciamo il tuo comportamento per scopi pubblicitari.
              </p>
            </div>
          </section>

          {/* Sezione 3 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">3. Base Giuridica</h2>
            <p className="text-white/70 mb-4">
              L'utilizzo dei cookie tecnici è basato sul nostro <strong>legittimo interesse</strong> (Art. 6, par. 1, lett. f del GDPR) a garantire il corretto funzionamento del sito web.
            </p>
            <p className="text-white/70">
              Per i cookie non strettamente necessari, chiediamo il tuo <strong>consenso esplicito</strong> (Art. 6, par. 1, lett. a del GDPR) tramite il banner cookie mostrato al primo accesso.
            </p>
          </section>

          {/* Sezione 4 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">4. Come Gestire i Cookie</h2>

            <h3 className="text-lg font-medium mb-3 text-purple-400">4.1 Tramite il nostro sito</h3>
            <p className="text-white/70 mb-4">
              Puoi modificare le tue preferenze sui cookie in qualsiasi momento cliccando sul link "Gestisci cookie" presente nel footer del sito.
            </p>

            <h3 className="text-lg font-medium mb-3 text-purple-400">4.2 Tramite il browser</h3>
            <p className="text-white/70 mb-4">
              Puoi anche gestire i cookie direttamente dalle impostazioni del tuo browser. Ecco le guide per i principali browser:
            </p>
            <ul className="space-y-2 ml-4">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  <span>•</span> Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  <span>•</span> Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  <span>•</span> Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                  <span>•</span> Microsoft Edge
                </a>
              </li>
            </ul>

            <div className="bg-red-500/10 rounded-lg p-4 mt-6 border border-red-500/20">
              <p className="text-red-300 font-medium mb-2">Attenzione:</p>
              <p className="text-white/70 text-sm">
                La disattivazione di tutti i cookie potrebbe compromettere alcune funzionalità del sito web.
              </p>
            </div>
          </section>

          {/* Sezione 5 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Durata dei Cookie</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-white/80 font-medium">Cookie</th>
                    <th className="text-left py-3 px-4 text-white/80 font-medium">Tipo</th>
                    <th className="text-left py-3 px-4 text-white/80 font-medium">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4 text-white/60">{SITE_DATA.cookieConsentKey}</td>
                    <td className="py-3 px-4 text-white/60">Tecnico</td>
                    <td className="py-3 px-4 text-white/60">1 anno</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Sezione 6 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">6. I Tuoi Diritti</h2>
            <p className="text-white/70 mb-4">
              In relazione ai dati raccolti tramite cookie, hai gli stessi diritti previsti dalla nostra{' '}
              <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300">Privacy Policy</Link>:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
              <li>Diritto di accesso ai tuoi dati</li>
              <li>Diritto di rettifica</li>
              <li>Diritto alla cancellazione</li>
              <li>Diritto di limitazione del trattamento</li>
              <li>Diritto di opposizione</li>
              <li>Diritto di revocare il consenso in qualsiasi momento</li>
            </ul>
          </section>

          {/* Sezione 7 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">7. Modifiche alla Cookie Policy</h2>
            <p className="text-white/70">
              Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti consigliamo di consultare periodicamente questa pagina.
            </p>
          </section>

          {/* Sezione 8 */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">8. Contatti</h2>
            <p className="text-white/70 mb-4">
              Per qualsiasi domanda relativa all'utilizzo dei cookie su questo sito, puoi contattarci:
            </p>
            <div className="bg-white/5 rounded-lg p-5 border-l-4 border-purple-500">
              <p className="font-semibold mb-2">{SITE_DATA.name}</p>
              <p className="text-white/60 text-sm flex items-center gap-2 mb-1">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${SITE_DATA.email}`} className="text-purple-400 hover:text-purple-300">{SITE_DATA.email}</a>
              </p>
              <p className="text-white/60 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {SITE_DATA.phone}
              </p>
            </div>
          </section>

          <div className="border-t border-white/10 pt-6 mt-10">
            <p className="text-white/50 text-sm text-center">
              Questa Cookie Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e alla Direttiva ePrivacy 2002/58/CE
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to="/" className="px-8 py-3 border border-white/30 text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all text-center rounded-lg">
            Torna alla Home
          </Link>
          <Link to="/privacy-policy" className="px-8 py-3 bg-purple-500 text-white text-sm tracking-widest uppercase font-medium hover:bg-purple-400 transition-all text-center rounded-lg">
            Leggi la Privacy Policy
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

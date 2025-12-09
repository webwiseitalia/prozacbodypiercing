import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { SITE_DATA } from '../constants/siteData'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const location = useLocation()

  // Check if we're on a policy page (no blur needed)
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(SITE_DATA.cookieConsentKey)
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(SITE_DATA.cookieConsentKey, 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem(SITE_DATA.cookieConsentKey, 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Blur overlay - only on non-policy pages */}
      {!isPolicyPage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998]" />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-[#111] border border-white/10 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
          {/* Header */}
          <div className="bg-purple-500/10 px-6 py-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Informativa Cookie</h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-white/70 mb-4 leading-relaxed">
              Questo sito utilizza cookie tecnici necessari al funzionamento e cookie di terze parti (Google Maps) per mostrare la mappa interattiva.
              Non utilizziamo cookie di profilazione o marketing.
            </p>

            <p className="text-white/50 text-sm mb-6">
              Per maggiori informazioni, consulta la nostra{' '}
              <Link to="/cookie-policy" className="text-purple-400 hover:text-purple-300 underline">
                Cookie Policy
              </Link>
              {' '}e la{' '}
              <Link to="/privacy-policy" className="text-purple-400 hover:text-purple-300 underline">
                Privacy Policy
              </Link>.
            </p>

            {/* Buttons - Same size and style */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleReject}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-medium tracking-wider uppercase transition-all rounded-lg border border-white/20"
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white text-sm font-medium tracking-wider uppercase transition-all rounded-lg"
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

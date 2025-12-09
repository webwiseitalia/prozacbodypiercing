// Dati centralizzati del sito Pro-Zac Body Piercing

export const SITE_DATA = {
  // Informazioni aziendali
  name: 'Pro-Zac Body Piercing',
  shortName: 'Pro-Zac',
  description: 'Studio professionale di body piercing e tatuaggi a Darfo Boario Terme, Val Camonica. Piercing, tatuaggi, materiali certificati e massima igiene.',
  category: 'Studio di body piercing e tatuaggi',

  // Contatti
  phone: '+39 348 703 4060',
  phoneClean: '393487034060', // Per WhatsApp
  email: 'prozacpiercing@gmail.com',

  // Indirizzo
  address: {
    street: 'Via Aria Libera 108',
    city: 'Darfo Boario Terme',
    province: 'BS',
    cap: '25047',
    country: 'Italia',
    region: 'Val Camonica',
    full: 'Via Aria Libera 108, 25047 Darfo Boario Terme (BS), Italia',
  },

  // Coordinate geografiche (approssimative per Darfo Boario Terme)
  coordinates: {
    latitude: 45.8833,
    longitude: 10.1833,
  },

  // Social media
  social: {
    instagram: 'https://www.instagram.com/prozacbodypiercing/',
    instagramHandle: '@prozacbodypiercing',
    facebook: 'https://www.facebook.com/prozacbodypiercing/',
  },

  // Orari di apertura
  hours: {
    monday: { open: '10:00', close: '12:00', afternoonOpen: '14:00', afternoonClose: '18:00' },
    tuesday: null, // Chiuso
    wednesday: { open: '10:00', close: '12:00', afternoonOpen: '14:00', afternoonClose: '18:00' },
    thursday: { open: '10:00', close: '12:00', afternoonOpen: '14:00', afternoonClose: '18:00' },
    friday: { open: '10:00', close: '12:00', afternoonOpen: '14:00', afternoonClose: '18:00' },
    saturday: { open: '10:00', close: '12:00', afternoonOpen: '14:00', afternoonClose: '18:00' },
    sunday: null, // Chiuso
  },
  hoursText: {
    open: 'Lun, Mer-Sab: 10:00-12:00 / 14:00-18:00',
    closed: 'Mar e Dom: Chiuso',
  },

  // Servizi offerti
  services: [
    'Body piercing professionali',
    'Piercing orecchie',
    'Tatuaggi',
    'Consulenza personalizzata',
  ],

  // SEO e metadata
  seo: {
    title: 'Pro-Zac Body Piercing | Piercing e Tatuaggi a Darfo Boario Terme',
    keywords: 'body piercing, tatuaggi, piercing orecchie, Darfo Boario Terme, Val Camonica, Brescia, Pro-Zac',
  },

  // URL del sito (da aggiornare con il dominio finale)
  url: 'https://prozacbodypiercing.it',

  // Anno di fondazione (opzionale)
  foundedYear: null,

  // Cookie consent key
  cookieConsentKey: 'prozacbodypiercing-cookie-consent',
}

// Link WhatsApp
export const getWhatsAppLink = (message = '') => {
  const baseUrl = `https://wa.me/${SITE_DATA.phoneClean}`
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl
}

// Link Google Maps direzioni
export const getDirectionsLink = () => {
  return `https://www.google.com/maps/dir//${encodeURIComponent(SITE_DATA.address.full)}`
}

// Controlla se attualmente aperto
export const isCurrentlyOpen = () => {
  const now = new Date()
  const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const currentTime = hours + minutes / 60

  // Chiuso Martedì (2) e Domenica (0)
  if (day === 0 || day === 2) return false

  // Orari: 10:00-12:00 e 14:00-18:00
  const morningOpen = currentTime >= 10 && currentTime < 12
  const afternoonOpen = currentTime >= 14 && currentTime < 18

  return morningOpen || afternoonOpen
}

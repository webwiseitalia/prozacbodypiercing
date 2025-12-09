import { useState, useEffect } from 'react'

// Import all images
import img1 from './assets/foto/472409993_3828602000787197_6543429588673876213_n..jpg'
import img2 from './assets/foto/472532752_1295791768236240_2670045543928840755_n..jpg'
import img3 from './assets/foto/472827915_18372098653189812_9019302285799272199_n..jpg'
import img4 from './assets/foto/472943505_2106507746479741_119378184547957434_n..jpg'
import img5 from './assets/foto/473520012_2178907849208213_7242999598690016894_n..jpg'
import img6 from './assets/foto/476964832_18374700790189812_6359006392909664280_n..jpg'
import img7 from './assets/foto/482213317_18377219086189812_3773395600271168320_n..jpg'
import img8 from './assets/foto/490902054_18382787863189812_8092809656813392198_n..jpg'
import img9 from './assets/foto/515481793_18393119983189812_4342434077910375336_n..jpg'
import img10 from './assets/foto/524200635_18395857531189812_5299125401848512760_n..jpg'
import img11 from './assets/foto/534558503_18398651653189812_4953005752891783561_n..jpg'
import img12 from './assets/foto/542271108_18400982971189812_2487581834979793712_n..jpg'
import img13 from './assets/foto/549392380_18402643384189812_6602701420485633281_n..jpg'
import img14 from './assets/foto/554739299_18403639519189812_3749369190348282011_n..jpg'
import img15 from './assets/foto/556817472_18404456614189812_5973465743111627182_n..jpg'
import img16 from './assets/foto/562518414_18406844059189812_2696448280435201931_n..jpg'
import img17 from './assets/foto/574243247_18411886132189812_1588385203297911649_n..jpg'
import img18 from './assets/foto/574465678_18411885925189812_8658227908941286592_n..jpg'
import img19 from './assets/foto/575115841_18411886165189812_8756569930334108957_n..jpg'
import img20 from './assets/foto/575203455_18411886120189812_1504991747317346369_n..jpg'
import img21 from './assets/foto/581807071_18412874197189812_5838966178605674222_n..jpg'
import img22 from './assets/foto/581859002_18412874206189812_17772786302821974_n..jpg'
import img23 from './assets/foto/587704125_18414415300189812_8652187560974993843_n..jpg'
import img24 from './assets/foto/588796022_18414415291189812_3632668630135732618_n..jpg'
import img25 from './assets/foto/588968036_18414790105189812_142411007380145897_n..jpg'
import img26 from './assets/foto/588995359_18414790090189812_4472822877384325363_n..jpg'
import logoAntonelli from './assets/logo-antonelli.png'

// Categorize images - collage fisso
const heroImages = [img16, img13, img5, img19] // brindisi cocktail, tartare, cocktail singolo, french toast
const aboutImages = [img19, img17, img8] // french toast, sandwich, panini
const menuImages = [img22, img15, img10, img21] // tapas spritz, taco, bruschette, tapas carne
const cocktailImages = [img5, img6, img11, img14, img16] // cocktails
const galleryImages = [img1, img2, img3, img4, img12, img20, img23, img24, img25, img26, img7, img18]

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])


  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <img
              src={logoAntonelli}
              alt="Caffetteria Antonelli"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <span className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase hidden sm:block">
              Antonelli
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-12 text-sm tracking-widest uppercase absolute left-1/2 transform -translate-x-1/2">
            <a href="#chi-siamo" className="hover:text-amber-400 transition-colors">Chi Siamo</a>
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menù</a>
            <a href="#galleria" className="hover:text-amber-400 transition-colors">Galleria</a>
            <a href="#dove-siamo" className="hover:text-amber-400 transition-colors">Dove Siamo</a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/caffetteriaantonelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/70 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/CaffetteriaAntonelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/70 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <a
              href="https://share-me.it/liste-menu/antonelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-3 bg-amber-500 text-black text-xs md:text-sm font-medium tracking-wider uppercase hover:bg-amber-400 transition-all"
            >
              Menù
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Artistic Photo Collage */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-28 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[85vh]">

            {/* Left side - Text content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Location badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full" />
                <span className="text-amber-400 tracking-[0.2em] uppercase text-xs font-medium">Piazza Vittorio Veneto, Torino</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] mb-6">
                Caffetteria
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 font-medium">
                  Antonelli
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 font-light max-w-md mb-10 leading-relaxed">
                Dal caffè della mattina all'ultimo cocktail della notte.
                <span className="text-white/80"> Un'esperienza unica</span> nel cuore di Torino.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <a
                  href="https://share-me.it/liste-menu/antonelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xs sm:text-sm tracking-widest uppercase font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all inline-flex items-center justify-center gap-2 sm:gap-3"
                >
                  Scopri il Menù
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#dove-siamo"
                  className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-xs sm:text-sm tracking-widest uppercase font-medium hover:bg-white/5 hover:border-amber-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Dove siamo
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-white/60 text-sm">Aperto ora</span>
                </div>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-sm">07:00 - 03:00</span>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-sm">7/7</span>
              </div>
            </div>

            {/* Right side - Artistic Photo Collage */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              {/* Mobile: Simple 2x2 grid */}
              <div className="grid grid-cols-2 gap-3 lg:hidden">
                {heroImages.map((img, index) => (
                  <div key={index} className="aspect-square relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={img}
                      alt={`Antonelli ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Desktop: Artistic collage */}
              <div className="hidden lg:block relative h-[700px]">
                {/* Photo 1 - Large main (brindisi cocktail) */}
                <div className="absolute top-0 right-0 w-[55%] h-[65%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[0]}
                      alt="Cocktail brindisi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  {/* Decorative border */}
                  <div className="absolute -top-3 -right-3 w-full h-full border-2 border-amber-500/30 rounded-2xl -z-10" />
                </div>

                {/* Photo 2 - Medium left (tartare) */}
                <div className="absolute top-[15%] left-0 w-[45%] h-[45%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[1]}
                      alt="Tartare gourmet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Photo 3 - Small bottom left (cocktail singolo) */}
                <div className="absolute bottom-[5%] left-[5%] w-[35%] h-[35%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[2]}
                      alt="Signature cocktail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Photo 4 - Bottom right (french toast) */}
                <div className="absolute bottom-0 right-[10%] w-[40%] h-[30%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[3]}
                      alt="French toast"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating badge - TripAdvisor */}
                <div className="absolute bottom-[38%] left-[38%] bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 px-4 py-3 rounded-lg shadow-xl z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 text-xl">★</span>
                    <div>
                      <p className="text-white font-medium text-sm">4.5</p>
                      <p className="text-white/40 text-xs">TripAdvisor</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-[60%] right-[55%] w-20 h-20 border border-amber-500/20 rounded-full" />
                <div className="absolute top-[10%] left-[40%] w-3 h-3 bg-amber-500/60 rounded-full" />
                <div className="absolute bottom-[25%] right-[5%] w-2 h-2 bg-amber-400/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">Scorri</span>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-amber-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Chi Siamo Section - FOTO A SINISTRA, TESTO A DESTRA */}
      <section id="chi-siamo" className="py-16 md:py-32 relative">
        {/* Background accent on the LEFT this time */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-amber-500/5 hidden lg:block" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label - aligned left */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-amber-500" />
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Chi Siamo</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Image Grid - NOW ON THE LEFT */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Stacked images */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                  <div className="h-[240px] relative overflow-hidden group">
                    <img
                      src={aboutImages[1]}
                      alt="Pranzo"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Pranzo</span>
                  </div>
                  <div className="h-[240px] relative overflow-hidden group">
                    <img
                      src={aboutImages[2]}
                      alt="Brunch"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Brunch</span>
                  </div>
                </div>

                {/* Large image */}
                <div className="col-span-2 md:col-span-1 h-[400px] md:h-[500px] relative overflow-hidden group">
                  <img
                    src={aboutImages[0]}
                    alt="Colazione"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Colazione</span>
                </div>
              </div>

              {/* Floating accent - on the right now */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-amber-500/30 hidden lg:block" />
            </div>

            {/* Text Content - NOW ON THE RIGHT */}
            <div className="lg:col-span-5 lg:pl-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 md:mb-8">
                Un angolo di
                <br />
                <span className="text-amber-400 font-normal">vita torinese</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  Affacciati sulla maestosa Piazza Vittorio Veneto, siamo il punto di ritrovo
                  preferito di chi cerca qualità e atmosfera. Dalle prime luci dell'alba fino
                  a notte fonda, Caffetteria Antonelli è il cuore pulsante della movida torinese.
                </p>
                <p>
                  I nostri interni in stile loft, con mattoni a vista e divani in pelle bordeaux,
                  creano l'ambiente perfetto per ogni momento: la colazione di corsa, il pranzo
                  rilassato, l'aperitivo con gli amici o il dopocena romantico.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-400">7</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Giorni su 7</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-400">20+</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Ore al giorno</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-amber-400">∞</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Emozioni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Full Width Asymmetric */}
      <section id="menu" className="py-16 md:py-32 relative bg-[#0d0d0d]">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 hidden md:block" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-amber-500" />
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Il Nostro Menù</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 md:mb-8">
                Tapas creative e
                <br />
                <span className="text-amber-400 font-normal">cocktail d'autore</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-lg">
                Il nostro menù racconta la passione per la cucina italiana rivisitata in chiave moderna.
                Dalle colazioni energiche agli aperitivi gourmet, ogni piatto è un'esperienza.
                I nostri cocktail, preparati con cura artigianale, sono il complemento perfetto
                per le nostre tapas creative.
              </p>

              {/* Menu Categories */}
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {[
                  { name: 'Colazioni & Brunch', desc: 'Pancakes, eggs benedict, french toast' },
                  { name: 'Aperitivo & Tapas', desc: 'Tartare, tacos gourmet, crocchette' },
                  { name: 'Cocktail Bar', desc: 'Signature cocktails, vini pregiati' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-2 h-2 bg-amber-500 mt-2 md:mt-3 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div>
                      <h4 className="text-lg md:text-xl font-medium mb-1">{item.name}</h4>
                      <p className="text-white/50 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://share-me.it/liste-menu/antonelli/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 md:gap-4 px-6 py-4 md:px-10 md:py-5 bg-amber-500 text-black text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-amber-400 transition-all w-full sm:w-auto"
              >
                Esplora il Menù Completo
                <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 overflow-hidden">
                    <img src={menuImages[0]} alt="Tapas" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img src={menuImages[1]} alt="Tartare" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 overflow-hidden">
                    <img src={menuImages[2]} alt="Taco" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-64 overflow-hidden">
                    <img src={menuImages[3]} alt="Bruschette" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Overlay text */}
              <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] p-8 hidden lg:block">
                <p className="text-5xl font-light text-amber-400">+50</p>
                <p className="text-sm text-white/50 tracking-wider uppercase mt-2">Piatti unici</p>
              </div>
            </div>
          </div>

          {/* Cocktail showcase */}
          <div className="mt-32">
            <h3 className="text-2xl font-light mb-12 tracking-wider">I Nostri Signature Cocktails</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {cocktailImages.map((img, i) => (
                <div key={i} className={`aspect-[3/4] overflow-hidden relative group ${i === 4 ? 'hidden sm:block' : ''}`}>
                  <img
                    src={img}
                    alt={`Cocktail ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-32 relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-[20vw] font-extralight text-white/[0.02] whitespace-nowrap pointer-events-none hidden md:block">
          ANTONELLI
        </div>

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-amber-500" />
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Recensioni</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 md:mb-8">
                Cosa dicono
                <br />
                <span className="text-amber-400 font-normal">di noi</span>
              </h2>

              {/* TripAdvisor badge */}
              <div className="inline-flex items-center gap-3 md:gap-4 bg-white/5 p-4 md:p-6 border border-white/10">
                <div className="text-3xl md:text-4xl">🏆</div>
                <div>
                  <p className="font-medium text-sm md:text-base">Travellers' Choice</p>
                  <p className="text-white/50 text-xs md:text-sm">TripAdvisor 2024</p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  text: "Atmosfera incredibile, tapas eccezionali e cocktail perfetti. Il posto ideale per un aperitivo vista piazza. Consigliato!",
                  author: "Marco R.",
                  rating: 5
                },
                {
                  text: "Colazione top! Pancakes buonissimi e caffè ottimo. Il locale è bellissimo con i suoi divani in pelle. Torneremo sicuramente.",
                  author: "Giulia M.",
                  rating: 5
                },
                {
                  text: "Aperitivo perfetto su Piazza Vittorio. Le tapas sono creative e il servizio impeccabile. Un must di Torino!",
                  author: "Alessandro P.",
                  rating: 5
                }
              ].map((review, i) => (
                <div key={i} className="border-l-2 border-amber-500 pl-4 md:pl-8 py-3 md:py-4">
                  <div className="flex gap-1 mb-2 md:mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <span key={j} className="text-amber-400 text-sm md:text-base">★</span>
                    ))}
                  </div>
                  <p className="text-base md:text-lg text-white/80 italic mb-3 md:mb-4">"{review.text}"</p>
                  <p className="text-xs md:text-sm text-white/50 tracking-wider uppercase">{review.author}</p>
                </div>
              ))}

              <a
                href="https://www.tripadvisor.it/Restaurant_Review-g187855-d5854755-Reviews-Caffetteria_Antonelli-Turin_Province_of_Turin_Piedmont.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mt-4 text-sm md:text-base"
              >
                Leggi tutte le recensioni su TripAdvisor
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - True Mosaic Layout */}
      <section id="galleria" className="py-16 md:py-32 relative bg-[#0d0d0d]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 md:mb-20">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 md:w-24 h-px bg-amber-500" />
              <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Galleria</span>
            </div>
            <a
              href="https://www.instagram.com/caffetteriaantonelli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-amber-400 transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @caffetteriaantonelli
            </a>
          </div>

          {/* Simple Grid Gallery - 4 columns, 3 rows, no gaps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-square relative overflow-hidden group">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="dove-siamo" className="py-16 md:py-32 relative">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-amber-500" />
            <span className="text-amber-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Dove Siamo</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            {/* Map */}
            <div className="h-[300px] md:h-[500px] relative overflow-hidden bg-[#1a1a1a]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.0857461716897!2d7.693899776889657!3d45.06394697107026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d6faa07b2e3%3A0x1d9f3e7d43f5c8a9!2sPiazza%20Vittorio%20Veneto%2C%201%2C%2010124%20Torino%20TO%2C%20Italy!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Caffetteria Antonelli"
              />
              {/* Overlay pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center animate-bounce">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-8 md:mb-12 text-center lg:text-left">
                Vieni a
                <br />
                <span className="text-amber-400 font-normal">trovarci</span>
              </h2>

              <div className="space-y-6 md:space-y-8">
                {/* Address */}
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Indirizzo</h4>
                    <p className="text-white/60 text-sm md:text-base">Piazza Vittorio Veneto 1</p>
                    <p className="text-white/60 text-sm md:text-base">10124 Torino (TO) – Italia</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Orari</h4>
                    <div className="text-white/60 space-y-1 text-sm md:text-base">
                      <p>Lun - Gio: 07:00 – 02:30</p>
                      <p>Ven - Dom: 07:00 – 03:00</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 md:mb-2 text-sm md:text-base">Telefono</h4>
                    <a href="tel:+390118172544" className="text-white/60 hover:text-amber-400 transition-colors text-sm md:text-base">
                      +39 011 817 2544
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  href="https://www.google.com/maps/dir//Piazza+Vittorio+Veneto+1+10124+Torino+TO+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 md:px-8 md:py-4 bg-amber-500 text-black text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-amber-400 transition-all text-center"
                >
                  Indicazioni stradali
                </a>
                <a
                  href="tel:+390118172544"
                  className="px-6 py-3 md:px-8 md:py-4 border border-white/30 text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all text-center"
                >
                  Chiamaci
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-12 md:py-20 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 md:mb-6">Antonelli</h3>
              <p className="text-white/50 max-w-md leading-relaxed mb-6 md:mb-8 text-sm md:text-base mx-auto sm:mx-0">
                Un caffè storico nel cuore di Torino, dove tradizione e innovazione
                si incontrano per creare momenti indimenticabili.
              </p>
              {/* Social */}
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/caffetteriaantonelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-amber-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/CaffetteriaAntonelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-amber-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.tripadvisor.it/Restaurant_Review-g187855-d5854755-Reviews-Caffetteria_Antonelli-Turin_Province_of_Turin_Piedmont.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-amber-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 004.072 1.598 6 6 0 004.041-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.003 17.209a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.217a1.998 1.998 0 100 3.996 1.998 1.998 0 000-3.996zm11.994 0a1.998 1.998 0 100 3.996 1.998 1.998 0 000-3.996zm-5.99-5.922c2.164 0 4.163.601 5.879 1.61a8.02 8.02 0 00-5.879-1.61 8.02 8.02 0 00-5.879 1.61 11.58 11.58 0 015.879-1.61z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-white/30 mb-4 md:mb-6">Link Rapidi</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><a href="#chi-siamo" className="text-white/60 hover:text-amber-400 transition-colors text-sm md:text-base">Chi Siamo</a></li>
                <li><a href="https://share-me.it/liste-menu/antonelli/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-amber-400 transition-colors text-sm md:text-base">Menù</a></li>
                <li><a href="#galleria" className="text-white/60 hover:text-amber-400 transition-colors text-sm md:text-base">Galleria</a></li>
                <li><a href="#dove-siamo" className="text-white/60 hover:text-amber-400 transition-colors text-sm md:text-base">Dove Siamo</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-white/30 mb-4 md:mb-6">Contatti</h4>
              <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
                <li>Piazza Vittorio Veneto 1</li>
                <li>10124 Torino (TO)</li>
                <li>
                  <a href="tel:+390118172544" className="hover:text-amber-400 transition-colors">
                    +39 011 817 2544
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/30 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Caffetteria Antonelli. Tutti i diritti riservati.
            </p>
            <p className="text-white/30 text-xs md:text-sm">
              Piazza Vittorio Veneto 1, Torino
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

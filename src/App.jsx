import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Import piercing images
import piercing1 from './assets/fotopiercing/fotopiercing-1.webp'
import piercing2 from './assets/fotopiercing/fotopiercing-2.webp'
import piercing3 from './assets/fotopiercing/fotopiercing-3.webp'
import piercing4 from './assets/fotopiercing/fotopiercing-4.webp'
import piercing5 from './assets/fotopiercing/fotopiercing-5.webp'
import piercing6 from './assets/fotopiercing/fotopiercing-6.webp'

// Import tattoo images
import tattoo1 from './assets/fototatoo/fototatoo-1.webp'
import tattoo2 from './assets/fototatoo/fototatoo-2.webp'
import tattoo3 from './assets/fototatoo/fototatoo-3.webp'
import tattoo4 from './assets/fototatoo/fototatoo-4.webp'
import tattoo5 from './assets/fototatoo/fototatoo-5.webp'
import tattoo6 from './assets/fototatoo/fototatoo-6.webp'
import tattoo7 from './assets/fototatoo/fototatoo-7.webp'
import tattoo8 from './assets/fototatoo/fototatoo-8.webp'

// Categorize images for different sections
const heroImages = [piercing1, tattoo1, piercing2, tattoo2]
const aboutImages = [piercing3, tattoo3, piercing4]
const serviceImages = [piercing5, tattoo4, tattoo5, piercing6]
const galleryImages = [piercing1, tattoo1, piercing2, tattoo2, piercing3, tattoo3, piercing4, tattoo4, piercing5, tattoo5, piercing6, tattoo6, tattoo7, tattoo8]

// Slider images - 6 images that repeat
const sliderImages1 = [piercing1, tattoo1, piercing2, tattoo2, piercing3, tattoo3]
const sliderImages2 = [piercing4, tattoo4, piercing5, tattoo5, piercing6, tattoo6]

// Infinite Slider Component
function InfiniteSlider({ images, direction = 'left' }) {
  // Duplicate images to create seamless loop
  const duplicatedImages = [...images, ...images]

  return (
    <div className="slider-container w-full overflow-hidden py-6 bg-[#080808]">
      <div className={`flex gap-4 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`} style={{ width: 'max-content' }}>
        {duplicatedImages.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 relative overflow-hidden group">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  )
}

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

  // Check if currently open based on business hours
  const isCurrentlyOpen = () => {
    const now = new Date()
    const day = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const currentTime = hours + minutes / 60

    // Closed on Tuesday (2) and Sunday (0)
    if (day === 0 || day === 2) return false

    // Open hours: 10:00-12:00 and 14:00-18:00
    const morningOpen = currentTime >= 10 && currentTime < 12
    const afternoonOpen = currentTime >= 14 && currentTime < 18

    return morningOpen || afternoonOpen
  }

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              PRO-<span className="text-purple-500">ZAC</span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-12 text-sm tracking-widest uppercase absolute left-1/2 transform -translate-x-1/2">
            <a href="#chi-siamo" className="hover:text-purple-400 transition-colors">Chi Siamo</a>
            <a href="#servizi" className="hover:text-purple-400 transition-colors">Servizi</a>
            <a href="#galleria" className="hover:text-purple-400 transition-colors">Galleria</a>
            <a href="#dove-siamo" className="hover:text-purple-400 transition-colors">Dove Siamo</a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/prozacbodypiercing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 bg-white/10 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/prozacbodypiercing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-9 md:h-9 bg-white/10 hover:bg-purple-500 rounded-full flex items-center justify-center transition-colors group"
              >
                <svg className="w-4 h-4 md:w-[18px] md:h-[18px] text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/393487034060"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 md:px-6 md:py-3 bg-purple-500 text-white text-xs md:text-sm font-medium tracking-wider uppercase hover:bg-purple-400 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Prenota
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0a]" />

        {/* Subtle ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-3xl" />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 md:px-12 pt-28 pb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-center min-h-[85vh]">

            {/* Left side - Text content */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              {/* Location badge */}
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span className="text-purple-400 tracking-[0.2em] uppercase text-xs font-medium">Darfo Boario Terme, Val Camonica</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight leading-[0.9] mb-6">
                Pro-Zac
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 font-bold">
                  Body Piercing
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/60 font-light max-w-md mb-10 leading-relaxed">
                Professionalità, igiene e stile.
                <span className="text-white/80"> Il tuo studio di fiducia</span> per piercing e tatuaggi in Val Camonica.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
                <a
                  href="https://wa.me/393487034060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs sm:text-sm tracking-widest uppercase font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-flex items-center justify-center gap-2 sm:gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Prenota ora su WhatsApp
                </a>
                <a
                  href="#dove-siamo"
                  className="px-6 py-3 sm:px-8 sm:py-4 border border-white/20 text-xs sm:text-sm tracking-widest uppercase font-medium hover:bg-white/5 hover:border-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Dove siamo
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${isCurrentlyOpen() ? 'bg-green-500 animate-pulse' : 'bg-red-500'} rounded-full`} />
                  <span className="text-white/60 text-sm">{isCurrentlyOpen() ? 'Aperto ora' : 'Chiuso'}</span>
                </div>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-sm">Lun-Sab: 10-12 / 14-18</span>
                <span className="text-white/20">•</span>
                <span className="text-white/60 text-sm">Mar e Dom chiuso</span>
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
                      alt={`Pro-Zac piercing ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                ))}
              </div>

              {/* Desktop: Artistic collage */}
              <div className="hidden lg:block relative h-[700px]">
                {/* Photo 1 - Large main */}
                <div className="absolute top-0 right-0 w-[55%] h-[65%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[0]}
                      alt="Piercing professionale"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                  {/* Decorative border */}
                  <div className="absolute -top-3 -right-3 w-full h-full border-2 border-purple-500/30 rounded-2xl -z-10" />
                </div>

                {/* Photo 2 - Medium left */}
                <div className="absolute top-[15%] left-0 w-[45%] h-[45%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[1]}
                      alt="Body piercing"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Photo 3 - Small bottom left */}
                <div className="absolute bottom-[5%] left-[5%] w-[35%] h-[35%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[2]}
                      alt="Tatuaggi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Photo 4 - Bottom right */}
                <div className="absolute bottom-0 right-[10%] w-[40%] h-[30%] group">
                  <div className="relative w-full h-full overflow-hidden rounded-xl shadow-2xl shadow-black/50 transform hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={heroImages[3]}
                      alt="Piercing orecchie"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                {/* Floating badge - Sicurezza */}
                <div className="absolute bottom-[38%] left-[38%] bg-[#0a0a0a]/95 backdrop-blur-md border border-white/10 px-4 py-3 rounded-lg shadow-xl z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-purple-400 text-xl">✓</span>
                    <div>
                      <p className="text-white font-medium text-sm">100%</p>
                      <p className="text-white/40 text-xs">Igiene e Sicurezza</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-[60%] right-[55%] w-20 h-20 border border-purple-500/20 rounded-full" />
                <div className="absolute top-[10%] left-[40%] w-3 h-3 bg-purple-500/60 rounded-full" />
                <div className="absolute bottom-[25%] right-[5%] w-2 h-2 bg-purple-400/40 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 hidden md:flex">
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">Scorri</span>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-purple-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Infinite Slider 1 - After Hero */}
      <InfiniteSlider images={sliderImages1} direction="left" />

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-16 md:py-32 relative">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-purple-500/5 hidden lg:block" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-purple-500" />
            <span className="text-purple-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Chi Siamo</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Image Grid */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {/* Stacked images */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                  <div className="h-[240px] relative overflow-hidden group">
                    <img
                      src={aboutImages[1]}
                      alt="Piercing"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Piercing</span>
                  </div>
                  <div className="h-[240px] relative overflow-hidden group">
                    <img
                      src={aboutImages[2]}
                      alt="Tatuaggi"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                    <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Tatuaggi</span>
                  </div>
                </div>

                {/* Large image */}
                <div className="col-span-2 md:col-span-1 h-[400px] md:h-[500px] relative overflow-hidden group">
                  <img
                    src={aboutImages[0]}
                    alt="Studio"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
                  <span className="absolute bottom-6 left-6 text-sm tracking-widest uppercase text-white/80">Il nostro studio</span>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-purple-500/30 hidden lg:block" />
            </div>

            {/* Text Content */}
            <div className="lg:col-span-5 lg:pl-8 order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 md:mb-8">
                Passione per
                <br />
                <span className="text-purple-400 font-normal">l'arte del body</span>
              </h2>
              <div className="space-y-4 md:space-y-6 text-white/70 text-base md:text-lg leading-relaxed">
                <p>
                  Pro-Zac Body Piercing è uno studio di body piercing e tatuaggi situato a Darfo Boario Terme,
                  in provincia di Brescia. L'attività si distingue per professionalità, cura dei dettagli e
                  grande attenzione all'igiene e alla sicurezza.
                </p>
                <p>
                  Offriamo un ambiente accogliente e affidabile per chi desidera un piercing o un tatuaggio
                  realizzato con competenza. Accompagniamo il cliente in ogni fase: dalla consulenza iniziale
                  alla realizzazione finale.
                </p>
                <p>
                  Pro-Zac è un punto di riferimento in Val Camonica per chi cerca uno stile personale,
                  materiali di qualità e un approccio serio e professionale.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-white/10">
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-400">✓</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Materiali certificati</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-400">♦</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Igiene garantita</p>
                </div>
                <div className="text-center sm:text-left">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-light text-purple-400">★</span>
                  <p className="text-xs sm:text-sm text-white/50 mt-1 sm:mt-2 tracking-wider uppercase">Professionalità</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Slider 2 - After Chi Siamo */}
      <InfiniteSlider images={sliderImages2} direction="right" />

      {/* Servizi Section */}
      <section id="servizi" className="py-16 md:py-32 relative bg-[#0d0d0d]">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-purple-500/5 hidden md:block" />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-20">
            <div className="w-12 md:w-24 h-px bg-purple-500" />
            <span className="text-purple-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">I Nostri Servizi</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight mb-6 md:mb-8">
                Piercing e tatuaggi
                <br />
                <span className="text-purple-400 font-normal">professionali</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 md:mb-12 max-w-lg">
                Dalla consulenza personalizzata alla realizzazione, ti accompagniamo in ogni fase del percorso.
                Utilizziamo solo materiali certificati e strumenti sterili per garantire la massima sicurezza.
              </p>

              {/* Services */}
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                {[
                  { name: 'Body Piercing Professionali', desc: 'Piercing su tutto il corpo con materiali di alta qualità' },
                  { name: 'Piercing Orecchie', desc: 'Lobi, cartilagine, helix, tragus e molto altro' },
                  { name: 'Tatuaggi', desc: 'Disegni personalizzati e stili diversi' },
                  { name: 'Consulenza Personalizzata', desc: 'Ti aiutiamo a scegliere il piercing o tatuaggio giusto per te' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 md:gap-4 group">
                    <div className="w-2 h-2 bg-purple-500 mt-2 md:mt-3 group-hover:scale-150 transition-transform flex-shrink-0" />
                    <div>
                      <h4 className="text-lg md:text-xl font-medium mb-1">{item.name}</h4>
                      <p className="text-white/50 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/393487034060"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 md:gap-4 px-6 py-4 md:px-10 md:py-5 bg-purple-500 text-white text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-purple-400 transition-all w-full sm:w-auto"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Prenota ora su WhatsApp
              </a>
            </div>

            {/* Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 overflow-hidden">
                    <img src={serviceImages[0]} alt="Piercing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-48 overflow-hidden">
                    <img src={serviceImages[1]} alt="Tatuaggi" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-48 overflow-hidden">
                    <img src={serviceImages[2]} alt="Studio" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="h-64 overflow-hidden">
                    <img src={serviceImages[3]} alt="Consulenza" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                </div>
              </div>

              {/* Overlay text */}
              <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] p-8 hidden lg:block">
                <p className="text-5xl font-light text-purple-400">★</p>
                <p className="text-sm text-white/50 tracking-wider uppercase mt-2">Qualità garantita</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Slider 3 - After Servizi */}
      <InfiniteSlider images={sliderImages1} direction="left" />

      {/* Gallery Section */}
      <section id="galleria" className="py-16 md:py-32 relative bg-[#0d0d0d]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 md:mb-20">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 md:w-24 h-px bg-purple-500" />
              <span className="text-purple-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Galleria</span>
            </div>
            <a
              href="https://www.instagram.com/prozacbodypiercing/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-purple-400 transition-colors flex items-center gap-2 text-sm md:text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @prozacbodypiercing
            </a>
          </div>

          {/* Gallery Grid - Asymmetric Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
            {/* Immagine 1 - Grande, occupa 2 righe */}
            <div className="row-span-2 relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[0]}
                alt="Gallery 1"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 2 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[1]}
                alt="Gallery 2"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 3 - Grande su desktop, occupa 2 colonne */}
            <div className="col-span-2 relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[2]}
                alt="Gallery 3"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 4 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[3]}
                alt="Gallery 4"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 5 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[4]}
                alt="Gallery 5"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 6 - Grande, occupa 2 righe */}
            <div className="row-span-2 relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[5]}
                alt="Gallery 6"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 7 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[6]}
                alt="Gallery 7"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 8 - Grande, occupa 2 colonne */}
            <div className="col-span-2 relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[7]}
                alt="Gallery 8"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 9 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[8]}
                alt="Gallery 9"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 10 - Grande, occupa 2 righe */}
            <div className="row-span-2 relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[9]}
                alt="Gallery 10"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 11 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[10]}
                alt="Gallery 11"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 12 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[11]}
                alt="Gallery 12"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 13 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[12]}
                alt="Gallery 13"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 14 - Normale */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[13]}
                alt="Gallery 14"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Immagine 15 - Riempie lo spazio in basso a destra */}
            <div className="relative overflow-hidden group rounded-lg">
              <img
                src={galleryImages[0]}
                alt="Gallery 15"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/prozacbodypiercing/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span className="tracking-wider uppercase text-sm">Seguici su Instagram per vedere altri lavori</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="dove-siamo" className="py-16 md:py-32 relative">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
            <div className="w-12 md:w-24 h-px bg-purple-500" />
            <span className="text-purple-400 tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">Dove Siamo</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Map - più alta */}
            <div className="h-[400px] md:h-[600px] relative overflow-hidden bg-[#1a1a1a] rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.123!2d10.178!3d45.865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47818e5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sVia%20Aria%20Libera%2C%20108%2C%2025047%20Darfo%20Boario%20Terme%20BS%2C%20Italia!5e0!3m2!1sit!2sit!4v1702137600000!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Pro-Zac Body Piercing"
                className="rounded-lg"
              />
            </div>

            {/* Info - più compatta */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight mb-6 md:mb-8 text-center lg:text-left">
                Vieni a <span className="text-purple-400 font-normal">trovarci</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {/* Indirizzo */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <h4 className="font-medium text-sm">Indirizzo</h4>
                  </div>
                  <p className="text-white/60 text-sm">Via Aria Libera 108</p>
                  <p className="text-white/60 text-sm">25047 Darfo Boario Terme (BS)</p>
                </div>

                {/* Telefono */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <h4 className="font-medium text-sm">Telefono / WhatsApp</h4>
                  </div>
                  <a href="tel:+393487034060" className="text-white/60 hover:text-purple-400 transition-colors text-sm">
                    +39 348 703 4060
                  </a>
                </div>

                {/* Email */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h4 className="font-medium text-sm">Email</h4>
                  </div>
                  <a href="mailto:prozacpiercing@gmail.com" className="text-white/60 hover:text-purple-400 transition-colors text-sm">
                    prozacpiercing@gmail.com
                  </a>
                </div>

                {/* Orari - compatti */}
                <div className="bg-white/5 p-4 md:p-5 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-medium text-sm">Orari</h4>
                  </div>
                  <p className="text-white/60 text-sm">Lun, Mer-Sab: 10-12 / 14-18</p>
                  <p className="text-red-400/80 text-sm">Mar e Dom: Chiuso</p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/393487034060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 md:py-4 bg-purple-500 text-white text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-purple-400 transition-all text-center flex items-center justify-center gap-2 rounded-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Prenota su WhatsApp
                </a>
                <a
                  href="https://www.google.com/maps/dir//Via+Aria+Libera+108+25047+Darfo+Boario+Terme+BS+Italia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 md:py-4 border border-white/30 text-xs md:text-sm tracking-widest uppercase font-medium hover:bg-white/10 transition-all text-center rounded-lg"
                >
                  Indicazioni stradali
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050505] py-12 md:py-20 border-t border-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand */}
            <div className="sm:col-span-2 text-center sm:text-left">
              <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-4 md:mb-6">
                PRO-<span className="text-purple-500">ZAC</span>
              </h3>
              <p className="text-white/50 max-w-md leading-relaxed mb-6 md:mb-8 text-sm md:text-base mx-auto sm:mx-0">
                Studio di body piercing e tatuaggi a Darfo Boario Terme.
                Professionalità, igiene e stile per esprimere la tua personalità.
                Il tuo punto di riferimento in Val Camonica.
              </p>
              {/* Social */}
              <div className="flex gap-4 justify-center sm:justify-start">
                <a
                  href="https://www.instagram.com/prozacbodypiercing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-purple-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/prozacbodypiercing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-purple-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/393487034060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 hover:bg-purple-500 transition-colors flex items-center justify-center group"
                >
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-white/30 mb-4 md:mb-6">Link Rapidi</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><a href="#chi-siamo" className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Chi Siamo</a></li>
                <li><a href="#servizi" className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Servizi</a></li>
                <li><a href="#galleria" className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Galleria</a></li>
                <li><a href="#dove-siamo" className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Dove Siamo</a></li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-white/30 mb-4 md:mb-6">Informazioni Legali</h4>
              <ul className="space-y-3 md:space-y-4">
                <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Privacy Policy</Link></li>
                <li><Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-white/60 hover:text-purple-400 transition-colors text-sm md:text-base">Cookie Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h4 className="text-xs md:text-sm tracking-widest uppercase text-white/30 mb-4 md:mb-6">Contatti</h4>
              <ul className="space-y-3 md:space-y-4 text-white/60 text-sm md:text-base">
                <li>Via Aria Libera 108</li>
                <li>25047 Darfo Boario Terme (BS)</li>
                <li>
                  <a href="tel:+393487034060" className="hover:text-purple-400 transition-colors">
                    +39 348 703 4060
                  </a>
                </li>
                <li>
                  <a href="mailto:prozacpiercing@gmail.com" className="hover:text-purple-400 transition-colors">
                    prozacpiercing@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
            <p className="text-white/30 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} Pro-Zac Body Piercing. Tutti i diritti riservati.
            </p>
            <p className="text-white/30 text-xs md:text-sm">
              Darfo Boario Terme - Val Camonica (BS)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

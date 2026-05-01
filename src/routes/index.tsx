import { createFileRoute } from '@tanstack/react-router'
import React, { useEffect, useRef } from 'react'

export const Route = createFileRoute('/')({ component: App })

function useScroll(dir = 'up') {
  const r = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const o = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('scroll-hidden','scroll-hidden-left','scroll-hidden-right','scroll-hidden-slow','scroll-hidden-scale')
          const c = dir==='left'?'scroll-visible-left':dir==='right'?'scroll-visible-right':dir==='slow'?'scroll-visible-slow':dir==='scale'?'scroll-visible-scale':'scroll-visible'
          entry.target.classList.add(c)
        }
      })
    }, { threshold: 0.12 })
    if (r.current) o.observe(r.current)
    return () => { if (r.current) o.unobserve(r.current) }
  }, [])
  return r
}

function Anim({ children, className = '', dir = 'up' }: { children: React.ReactNode; className?: string; dir?: string }) {
  const r = useScroll(dir)
  const cls = dir==='left'?'scroll-hidden-left':dir==='right'?'scroll-hidden-right':dir==='slow'?'scroll-hidden-slow':dir==='scale'?'scroll-hidden-scale':'scroll-hidden'
  return <div ref={r} className={`${cls} ${className}`}>{children}</div>
}

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfcf8', color: '#2c3d23' }}>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <Hero />
      <Gallery />
      <Prevention />
      <Services />
      <MapSection />
      <About />
      <ProductsPlaceholder />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppBtn />
    </div>
  )
}

function WhatsAppBtn() {
  return (
    <a href="https://wa.me/5212313874845?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20Pies%20Sanos." target="_blank" rel="noopener noreferrer" className="whatsapp-float">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      Agendar Cita
    </a>
  )
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5" style={{ backgroundColor: 'rgba(253,252,248,0.88)', backdropFilter: 'blur(12px)' }}>
      <a href="#inicio" className="font-display text-xl font-medium tracking-wide" style={{ color: '#3e5931', textDecoration: 'none' }}>Pies Sanos</a>
      <nav className="hidden md:flex items-center gap-10">
        {[{href:'#servicios',label:'Servicios'},{href:'#ubicacion',label:'Ubicación'},{href:'#nosotros',label:'Nosotros'},{href:'#testimonios',label:'Testimonios'}].map(({href,label})=>(
          <a key={href} href={href} className="text-sm font-light tracking-widest uppercase transition-opacity hover:opacity-60" style={{color:'#3e5931',textDecoration:'none',letterSpacing:'0.12em'}}>{label}</a>
        ))}
      </nav>
      <a href="#contacto" className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-light tracking-widest uppercase transition-all hover:opacity-80" style={{border:'1px solid #4d6e3d',color:'#4d6e3d',textDecoration:'none',letterSpacing:'0.1em'}}>Reservar cita</a>
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 animate-smooth-zoom">
        <img src="/img/tratamiento-profesional.png" alt="Tratamiento profesional" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-0" style={{background:'linear-gradient(135deg, rgba(230,237,224,0.93) 0%, rgba(253,252,248,0.88) 50%, rgba(243,237,224,0.92) 100%)'}} />
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 md:pt-0">
        <p className="line-decoration text-xs tracking-widest uppercase mb-4 animate-fade-up delay-100" style={{color:'#638a50',letterSpacing:'0.2em'}}>Podología Integral · Teziutlán</p>
        <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8 animate-fade-up delay-200" style={{color:'#2c3d23'}}>Pies Sanos.<br/>El cuidado<br/><em style={{color:'#638a50'}}>que merecen.</em></h1>
        <p className="text-base font-light leading-relaxed mb-10 max-w-md animate-fade-up delay-300" style={{color:'#4d6e3d',opacity:0.8}}>Diagnóstico preciso, tratamientos personalizados y acompañamiento continuo para tu salud podológica y bienestar general.</p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
          <a href="https://wa.me/5212313874845?text=Hola%2C%20quiero%20agendar%20una%20cita." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase font-medium transition-all hover:opacity-90" style={{backgroundColor:'#4d6e3d',color:'#fdfcf8',textDecoration:'none',letterSpacing:'0.12em'}}>Solicitar cita</a>
          <a href="#servicios" className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-widest uppercase font-light transition-all hover:opacity-60" style={{border:'1px solid #a9c294',color:'#4d6e3d',textDecoration:'none',letterSpacing:'0.12em'}}>Ver servicios</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-800 flex flex-col items-center gap-2 z-10">
        <span className="text-xs font-light tracking-widest uppercase" style={{color:'#638a50',opacity:0.6,letterSpacing:'0.2em'}}>Scroll</span>
        <div className="w-px h-12" style={{background:'linear-gradient(to bottom, #638a50, transparent)'}} />
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section className="py-20 px-8" style={{backgroundColor:'#f4f7f0'}}>
      <div className="max-w-7xl mx-auto">
        <Anim><p className="line-decoration text-xs tracking-widest uppercase mb-4 text-center" style={{color:'#638a50',letterSpacing:'0.2em'}}>Nuestro trabajo</p></Anim>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[{src:'/img/tratamiento-unas.png',alt:'Tratamiento de uñas',cap:'Onicocriptosis — Tratamiento profesional'},{src:'/img/tratamiento-profesional.png',alt:'Tratamiento con equipo',cap:'Quiropodia — Equipo especializado'},{src:'/img/cuidado-pies.png',alt:'Cuidado de pies',cap:'Cuidado integral — Bienestar del pie'}].map((img,i)=>(
            <Anim key={i} className={`stagger-${i+1}`} dir="scale">
              <div className="gallery-image" style={{aspectRatio:'3/4'}}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-light tracking-wide mt-3 text-center" style={{color:'#638a50'}}>{img.cap}</p>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  )
}

function Prevention() {
  return (
    <section className="py-40 px-8 relative overflow-hidden" style={{backgroundColor:'#151f10'}}>
      <div className="parallax-bg absolute inset-0 opacity-25" style={{backgroundImage:'url(/img/cuidado-pies.png)'}} />
      <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, #151f10, rgba(21,31,16,0.6), #151f10)'}} />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Anim dir="slow">
          <p className="text-xs tracking-widest uppercase mb-8" style={{color:'#a9c294',letterSpacing:'0.3em'}}>Protocolos de Prevención</p>
          <h2 className="font-display text-3xl md:text-5xl font-light leading-relaxed" style={{color:'#e6ede0'}}>"La prevención temprana es la piedra angular para evitar complicaciones severas. Un diagnóstico a tiempo cambia por completo la evolución de tu salud podológica."</h2>
          <div className="w-12 h-px mx-auto mt-12" style={{backgroundColor:'#638a50'}} />
        </Anim>
      </div>
    </section>
  )
}

const SERVICES = [
  {num:'01',title:'Quiropodia',desc:'Tratamiento profesional de callosidades, durezas y cuidado integral de la piel del pie.'},
  {num:'02',title:'Onicocriptosis (Uñas encarnadas)',desc:'Diagnóstico y tratamiento conservador o quirúrgico, con seguimiento hasta la resolución completa.'},
  {num:'03',title:'Pie Diabético',desc:'Protocolo especializado con evaluación vascular, neurológica y cuidado preventivo sistemático.'},
  {num:'04',title:'Biomecánica y plantillas',desc:'Estudio de la marcha y fabricación de plantillas ortopédicas a medida.'},
  {num:'05',title:'Podología Infantil',desc:'Evaluación y tratamiento de alteraciones en el desarrollo del pie en niños.'},
  {num:'06',title:'Onicomicosis (Micosis)',desc:'Tratamiento personalizado de hongos en uñas y piel del pie con diagnóstico preciso.'},
]

function Services() {
  return (
    <section id="servicios" className="py-32 px-8" style={{backgroundColor:'#f4f7f0'}}>
      <div className="max-w-7xl mx-auto">
        <Anim>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <p className="line-decoration text-xs tracking-widest uppercase mb-4" style={{color:'#638a50',letterSpacing:'0.2em'}}>Servicios Médicos</p>
              <h2 className="font-display text-5xl md:text-6xl font-light leading-tight" style={{color:'#2c3d23'}}>Atención integral<br/><em>para cada pie.</em></h2>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs" style={{color:'#4d6e3d',opacity:0.75}}>Cada tratamiento está diseñado para tu caso específico, con tecnología actualizada y un equipo que te escucha.</p>
          </div>
        </Anim>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{backgroundColor:'#ccdcbf'}}>
          {SERVICES.map((s,i)=>(
            <Anim key={s.num} className={`stagger-${i+1}`}>
              <div className="group p-8 flex flex-col gap-6 transition-colors duration-300 cursor-default h-full" style={{backgroundColor:'#f4f7f0'}} onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.backgroundColor='#fdfcf8'}} onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.backgroundColor='#f4f7f0'}}>
                <div className="flex items-start justify-between">
                  <span className="font-display text-5xl font-light" style={{color:'#ccdcbf',lineHeight:1}}>{s.num}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-3" style={{color:'#2c3d23'}}>{s.title}</h3>
                  <p className="text-sm font-light leading-relaxed" style={{color:'#4d6e3d',opacity:0.8}}>{s.desc}</p>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section id="ubicacion" className="py-32 px-8" style={{backgroundColor:'#2c3d23'}}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Anim dir="left">
          <p className="line-decoration text-xs tracking-widest uppercase mb-4" style={{color:'#84a66d',letterSpacing:'0.2em'}}>Encuéntranos</p>
          <h2 className="font-display text-4xl md:text-5xl font-light leading-tight mb-6" style={{color:'#e6ede0'}}>Visítanos en<br/><em style={{color:'#84a66d'}}>Teziutlán, Puebla</em></h2>
          <p className="text-sm font-light leading-relaxed mb-8" style={{color:'#ccdcbf',opacity:0.85}}>Vicente Guerrero, Centro, 73800 Teziutlán, Pue., México</p>
          <a href="https://maps.google.com/?q=Vicente+Guerrero,+Centro,+73800+Teziutlán,+Pue.,+México" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light transition-opacity hover:opacity-60" style={{color:'#84a66d',textDecoration:'none',letterSpacing:'0.15em'}}>
            Abrir en Google Maps
            <span style={{display:'inline-block',width:'32px',height:'1px',backgroundColor:'#84a66d',verticalAlign:'middle'}} />
          </a>
        </Anim>
        <Anim dir="right">
          <div className="map-container" style={{height:'400px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.123!2d-97.357!3d19.818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d068e0b9b0e0b5%3A0x0!2sVicente%20Guerrero%2C%20Centro%2C%2073800%20Teziutl%C3%A1n%2C%20Pue.%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación Pies Sanos" />
          </div>
        </Anim>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="nosotros" className="py-32 px-8" style={{backgroundColor:'#fdfcf8'}}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <Anim dir="left" className="relative order-2 md:order-1">
          <div className="gallery-image" style={{aspectRatio:'3/4',maxWidth:'420px'}}>
            <img src="/img/tratamiento-unas.png" alt="Tratamiento profesional" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -right-4 md:-right-10 bottom-16 px-6 py-5 max-w-[220px] shadow-xl animate-float" style={{backgroundColor:'#4d6e3d',color:'#e6ede0'}}>
            <p className="font-display text-3xl font-light">Pies Sanos</p>
            <p className="text-xs font-light mt-1 leading-relaxed" style={{opacity:0.85}}>Compromiso con tu bienestar podológico en Teziutlán.</p>
          </div>
        </Anim>
        <Anim dir="right" className="order-1 md:order-2">
          <p className="line-decoration text-xs tracking-widest uppercase mb-4" style={{color:'#638a50',letterSpacing:'0.2em'}}>Sobre el consultorio</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-8" style={{color:'#2c3d23'}}>Experiencia que<br/><em>cuida cada paso.</em></h2>
          <p className="text-sm font-light leading-relaxed mb-6" style={{color:'#4d6e3d',opacity:0.85}}>Pies Sanos Podología Integral nace con una convicción clara: cada paciente merece un diagnóstico personalizado, no tratamientos genéricos. Combinamos rigor científico con una atención cercana y humana.</p>
          <p className="text-sm font-light leading-relaxed mb-10" style={{color:'#4d6e3d',opacity:0.85}}>Nuestro equipo trabaja desde un espacio diseñado para transmitir calma y confianza, donde la tecnología más actualizada sirve siempre a la persona que la necesita.</p>
          <a href="#contacto" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-light transition-opacity hover:opacity-60" style={{color:'#4d6e3d',textDecoration:'none',letterSpacing:'0.15em'}}>
            Reservar una consulta
            <span style={{display:'inline-block',width:'32px',height:'1px',backgroundColor:'#638a50',verticalAlign:'middle'}} />
          </a>
        </Anim>
      </div>
    </section>
  )
}

function ProductsPlaceholder() {
  return (
    <section id="productos" className="py-24 px-8" style={{backgroundColor:'#f4f7f0'}}>
      <div className="max-w-7xl mx-auto">
        <Anim>
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-4" style={{color:'#638a50',letterSpacing:'0.2em'}}>Cuidado en Casa</p>
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight" style={{color:'#2c3d23'}}>Productos <em style={{color:'#638a50'}}>Recomendados</em></h2>
            <p className="text-sm font-light leading-relaxed max-w-lg mx-auto mt-6" style={{color:'#4d6e3d',opacity:0.8}}>Próximamente ofreceremos una selección curada de productos para el cuidado de tus pies desde casa.</p>
          </div>
        </Anim>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map(i=>(
            <Anim key={i} className={`stagger-${i}`} dir="scale">
              <div className="bg-white p-6 shadow-sm border border-[#e6ede0] text-center flex flex-col items-center justify-center min-h-[250px]">
                <div className="w-20 h-20 rounded-full bg-[#f4f7f0] flex items-center justify-center mb-4">
                  <span className="text-[#a9c294] font-display italic text-sm">Pronto</span>
                </div>
                <div className="w-3/4 h-3 bg-[#e6ede0] rounded mb-2" /><div className="w-1/2 h-3 bg-[#e6ede0] rounded" />
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {quote:'Llevaba años con dolor en las plantas al caminar. Después del estudio biomecánico y mis nuevas plantillas, la diferencia fue inmediata.',name:'Margarita Fuentes',initials:'MF'},
  {quote:'Resolvieron una uña encarnada que me había dado problemas durante meses. El proceso fue rápido, sin dolor y el seguimiento fue impecable.',name:'Roberto Salcedo Ríos',initials:'RS'},
  {quote:'Tengo diabetes y siempre me había preocupado el cuidado de mis pies. Aquí encontré un protocolo riguroso y una explicación clara en cada visita.',name:'Elena Morales',initials:'EM'},
]

function Testimonials() {
  return (
    <section id="testimonios" className="py-32 px-8 relative overflow-hidden" style={{backgroundColor:'#2c3d23'}}>
      <div className="parallax-bg absolute inset-0 opacity-10" style={{backgroundImage:'url(/img/tratamiento-profesional.png)'}} />
      <div className="relative z-10 max-w-7xl mx-auto">
        <Anim className="mb-20">
          <p className="line-decoration text-xs tracking-widest uppercase mb-4" style={{color:'#84a66d',letterSpacing:'0.2em'}}>Testimonios</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight" style={{color:'#e6ede0'}}>Lo que dicen<br/><em style={{color:'#84a66d'}}>nuestros pacientes.</em></h2>
        </Anim>
        <div className="grid md:grid-cols-3 gap-px" style={{backgroundColor:'#3e5931'}}>
          {TESTIMONIALS.map((t,i)=>(
            <Anim key={t.name} className={`stagger-${i+1} h-full`}>
              <div className="p-10 flex flex-col justify-between gap-8 h-full" style={{backgroundColor:'#2c3d23'}}>
                <div className="flex gap-1">{[...Array(5)].map((_,j)=>(<svg key={j} width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.5 L8.2 5.1 L12 5.1 L9 7.4 L10.2 11 L7 8.7 L3.8 11 L5 7.4 L2 5.1 L5.8 5.1 Z" fill="#84a66d"/></svg>))}</div>
                <blockquote className="font-display text-xl font-light leading-relaxed flex-1" style={{color:'#ccdcbf',fontStyle:'italic'}}>"{t.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium" style={{backgroundColor:'#3e5931',color:'#84a66d'}}>{t.initials}</div>
                  <p className="text-sm font-medium" style={{color:'#e6ede0'}}>{t.name}</p>
                </div>
              </div>
            </Anim>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contacto" className="py-32 px-8" style={{backgroundColor:'#fdfcf8'}}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <Anim dir="left">
          <p className="line-decoration text-xs tracking-widest uppercase mb-4" style={{color:'#638a50',letterSpacing:'0.2em'}}>Contacto</p>
          <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-10" style={{color:'#2c3d23'}}>¿Hablamos<br/><em>de tus pies?</em></h2>
          <div className="flex flex-col gap-8">
            {[
              {label:'Dirección',value:'Vicente Guerrero, Centro,\n73800 Teziutlán, Pue., México',link:'https://maps.google.com/?q=Vicente+Guerrero,+Centro,+73800+Teziutlán,+Pue.,+México'},
              {label:'WhatsApp / Teléfono',value:'+52 1 231 387 4845',link:'https://wa.me/5212313874845'},
              {label:'Horario',value:'Lunes–Viernes: 9:00 – 20:00\nSábados: 9:00 – 14:00'},
            ].map(({label,value,link})=>(
              <div key={label} className="flex items-start gap-6">
                <div className="w-1 flex-shrink-0 mt-1" style={{height:'100%',backgroundColor:'#ccdcbf'}}><div className="w-full h-8" style={{backgroundColor:'#a9c294'}} /></div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-light mb-1" style={{color:'#638a50',letterSpacing:'0.15em'}}>{label}</p>
                  {link?(<a href={link} target="_blank" rel="noopener noreferrer" className="text-sm font-light leading-relaxed whitespace-pre-line hover:text-[#638a50] transition-colors" style={{color:'#2c3d23',textDecoration:'none'}}>{value}</a>):(<p className="text-sm font-light leading-relaxed whitespace-pre-line" style={{color:'#2c3d23'}}>{value}</p>)}
                </div>
              </div>
            ))}
          </div>
        </Anim>
        <Anim dir="right">
          <p className="text-sm font-light mb-8" style={{color:'#4d6e3d',opacity:0.75}}>Rellena el formulario y envíanos tu mensaje directamente por WhatsApp.</p>
          <ContactForm />
        </Anim>
      </div>
    </section>
  )
}

function ContactForm() {
  const [loading,setLoading] = React.useState(false)
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const fd = new FormData(e.currentTarget)
    const msg = `Hola Pies Sanos, quiero agendar una cita.\n*Nombre:* ${fd.get('nombre')} ${fd.get('apellidos')}\n*Contacto:* ${fd.get('contacto')}\n*Servicio:* ${fd.get('servicio')}\n${fd.get('mensaje')?`*Mensaje:* ${fd.get('mensaje')}`:''}`
    setTimeout(()=>{setLoading(false);window.open(`https://wa.me/5212313874845?text=${encodeURIComponent(msg)}`,'_blank')},400)
  }
  const ist = {width:'100%',padding:'14px 0',background:'transparent',border:'none',borderBottom:'1px solid #ccdcbf',outline:'none',fontFamily:'var(--font-body)',fontSize:'14px',fontWeight:300,color:'#2c3d23',marginBottom:'24px',display:'block'} as React.CSSProperties
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="grid grid-cols-2 gap-6">
        <div><label className="text-xs tracking-widest uppercase" style={{color:'#638a50',letterSpacing:'0.15em',fontSize:'11px'}}>Nombre</label><input type="text" name="nombre" required placeholder="Tu nombre" style={ist}/></div>
        <div><label className="text-xs tracking-widest uppercase" style={{color:'#638a50',letterSpacing:'0.15em',fontSize:'11px'}}>Apellidos</label><input type="text" name="apellidos" required placeholder="Tus apellidos" style={ist}/></div>
      </div>
      <label className="text-xs tracking-widest uppercase" style={{color:'#638a50',letterSpacing:'0.15em',fontSize:'11px'}}>Teléfono o email</label>
      <input type="text" name="contacto" required placeholder="Para contactarte" style={ist}/>
      <label className="text-xs tracking-widest uppercase" style={{color:'#638a50',letterSpacing:'0.15em',fontSize:'11px'}}>Servicio</label>
      <select name="servicio" required style={{...ist,cursor:'pointer',appearance:'none' as const}}>
        <option value="">Selecciona un servicio…</option>
        <option>Quiropodia</option><option>Onicocriptosis</option><option>Pie Diabético</option><option>Biomecánica y plantillas</option><option>Podología Infantil</option><option>Onicomicosis</option><option>Otro</option>
      </select>
      <label className="text-xs tracking-widest uppercase" style={{color:'#638a50',letterSpacing:'0.15em',fontSize:'11px'}}>Mensaje (opcional)</label>
      <textarea name="mensaje" rows={3} placeholder="Cuéntanos tu caso…" style={{...ist,resize:'vertical' as const,paddingTop:'12px'}}/>
      <button type="submit" disabled={loading} className="mt-4 px-8 py-4 text-sm tracking-widest uppercase font-medium transition-opacity hover:opacity-80 disabled:opacity-50 flex items-center justify-center gap-2" style={{backgroundColor:'#4d6e3d',color:'#fdfcf8',border:'none',cursor:loading?'not-allowed':'pointer',fontFamily:'var(--font-body)',letterSpacing:'0.12em'}}>
        {loading?'Redirigiendo...':'Enviar por WhatsApp'}
      </button>
    </form>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-8 relative z-10" style={{backgroundColor:'#151f10'}}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div><p className="font-display text-xl font-light mb-1" style={{color:'#e6ede0'}}>Pies Sanos</p><p className="text-xs font-light" style={{color:'#638a50'}}>Podología Integral · Teziutlán, Pue.</p></div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          {[{href:'#servicios',label:'Servicios'},{href:'#ubicacion',label:'Ubicación'},{href:'https://www.facebook.com/PiesSanosPodologia',label:'Facebook',t:true}].map(({href,label,t})=>(
            <a key={href} href={href} target={t?'_blank':undefined} rel={t?'noopener noreferrer':undefined} className="text-xs tracking-widest uppercase font-light transition-opacity hover:opacity-50" style={{color:'#84a66d',textDecoration:'none',letterSpacing:'0.15em'}}>{label}</a>
          ))}
        </div>
        <p className="text-xs font-light" style={{color:'#3e5931'}}>© 2026 Pies Sanos Podología Integral</p>
      </div>
    </footer>
  )
}

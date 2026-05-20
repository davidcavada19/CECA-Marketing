import Link from "next/link";

export default function HomeEs() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-black text-lg md:text-2xl tracking-tight"><span className="text-white">CECA</span><span className="text-orange-500"> Marketing</span></span>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <Link href="/" className="px-3 py-1 rounded-full text-xs font-bold transition text-zinc-400 hover:text-white">EN</Link>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-600 text-white">ES</span>
            </div>
            <a href="#contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 text-xs md:px-5 md:text-sm font-semibold transition hidden md:block">Consigue tu pagina GRATIS</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=80" alt="" className="w-full h-full object-cover" style={{animation:"slowZoom 8s ease-in-out infinite", willChange:"transform", transformOrigin:"center center"}} />
          <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.75) 50%, rgba(15,23,42,0.95) 100%)"}}></div>
        </div>
        <div style={{position:"absolute",top:"-30%",left:"-30%",width:"1800px",height:"1800px",borderRadius:"50%",background:"radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",animation:"orb1 40s ease-in-out infinite",pointerEvents:"none"}}></div>
        <div style={{position:"absolute",bottom:"-30%",right:"-30%",width:"1800px",height:"1800px",borderRadius:"50%",background:"radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 65%)",animation:"orb2 50s ease-in-out infinite",pointerEvents:"none"}}></div>
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-orange-600 px-3 py-1 mb-8 mx-auto">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-orange-400 text-xs tracking-widest uppercase">Marketing Digital</span>
          </div>
          <h1 className="text-white text-4xl md:text-8xl font-black leading-none mb-6">
            MAS CLIENTES.<br />MENOS <span className="text-orange-500">ESTRES.</span><br />RESULTADOS<br />REALES.
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mb-10">Ayudamos a negocios de servicios locales a conseguir mas clientes de forma consistente con paginas web que convierten, automatizaciones y anuncios que si funcionan.</p>
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            <a href="#contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-semibold transition">Consigue tu pagina web GRATIS</a>
            <a href="#servicios" className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">Ver servicios</a>
          </div>
          <div className="grid grid-cols-3 gap-8 border-t border-zinc-700 pt-10">
            <div><p className="text-white text-4xl font-black">Fast<span className="text-orange-500">.</span></p><p className="text-zinc-400 text-sm mt-1">Entrega rapida</p></div>
            <div><p className="text-white text-4xl font-black"><span className="text-orange-500">$0</span></p><p className="text-zinc-400 text-sm mt-1">Costo de tu primera pagina</p></div>
            <div><p className="text-white text-4xl font-black">100<span className="text-orange-500">%</span></p><p className="text-zinc-400 text-sm mt-1">Enfocados en servicios locales</p></div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-xl md:text-3xl font-black uppercase mb-2">Lo que hacemos</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4">SISTEMAS QUE TRAEN CLIENTES<br />MIENTRAS TU TRABAJAS</h2>
          <p className="text-[#0f172a] text-lg max-w-xl mb-16">No solo hacemos paginas bonitas. Construimos el sistema completo para que tu negocio nunca se quede sin leads.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9783;</span></div><h3 className="text-xl font-black text-black mb-3">Paginas Web de Captacion</h3><p className="text-zinc-600 text-sm mb-4">Disenadas especificamente para convertir visitantes en llamadas. No son paginas para verse bonito, son para vender.</p><p className="text-orange-600 text-xs font-bold tracking-widest">LANDING PAGES · SITIOS WEB</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9776;</span></div><h3 className="text-xl font-black text-black mb-3">CRM y Automatizaciones</h3><p className="text-zinc-600 text-sm mb-4">Seguimiento automatico de leads, recordatorios de citas, reseñas en Google, todo sin que tengas que levantar un dedo.</p><p className="text-orange-600 text-xs font-bold tracking-widest">CRM · AUTOMATIZACIONES · PIPELINES</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9650;</span></div><h3 className="text-xl font-black text-black mb-3">Anuncios en Meta y Google</h3><p className="text-zinc-600 text-sm mb-4">Campanas dirigidas a clientes que buscan exactamente lo que ofreces, donde esten, en el momento exacto.</p><p className="text-orange-600 text-xs font-bold tracking-widest">FACEBOOK ADS · GOOGLE ADS · RETARGETING</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9788;</span></div><h3 className="text-xl font-black text-black mb-3">Sistemas de Gestion de Campo</h3><p className="text-zinc-600 text-sm mb-4">Integramos tu negocio con software de gestion de campo, cotizaciones, despacho, facturas y seguimiento de tecnicos.</p><p className="text-orange-600 text-xs font-bold tracking-widest">SOFTWARE DE CAMPO · DESPACHO · FACTURACION</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-xl md:text-3xl font-black uppercase mb-2">Como funciona</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">DEL PRIMER CONTACTO<br />A MAS CLIENTES</h2>
          <p className="text-zinc-400 text-lg max-w-xl mb-16">Sin complicaciones. Sin jerga tecnica. Solo un proceso claro que funciona.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">Hablamos</h3><span className="text-zinc-800 text-6xl font-black leading-none">01</span></div><p className="text-zinc-400 text-base">Una llamada de 20 minutos para entender tu negocio, tus clientes ideales y que necesitas para crecer.</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">Construimos</h3><span className="text-zinc-800 text-6xl font-black leading-none">02</span></div><p className="text-zinc-400 text-base">Creamos tu pagina web, configuramos el sistema y preparamos los anuncios, todo en menos de una semana.</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">Lanzamos</h3><span className="text-zinc-800 text-6xl font-black leading-none">03</span></div><p className="text-zinc-400 text-base">Encendemos las campanas y el sistema empieza a trabajar para ti. Los leads llegan, el seguimiento es automatico.</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">Optimizamos</h3><span className="text-zinc-800 text-6xl font-black leading-none">04</span></div><p className="text-zinc-400 text-base">Analizamos resultados mes a mes y ajustamos lo que sea necesario para que los numeros sigan mejorando.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-xl md:text-3xl font-black uppercase mb-2">A quien ayudamos</p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">NEGOCIOS DE SERVICIOS<br />CON LOS QUE TRABAJAMOS</h2>
          <p className="text-zinc-600 text-lg max-w-xl mb-16">Si tienes un negocio de servicios local, te ayudamos a conseguir mas clientes de forma consistente.</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {[{name:"AC y Calefaccion",icon:"❄️"},{name:"Electricistas",icon:"⚡"},{name:"Plomeros",icon:"🔧"},{name:"Jardineria",icon:"🌿"},{name:"Limpieza de Casas",icon:"🏠"},{name:"Remodelacion",icon:"🔨"},{name:"Ventanas y Puertas",icon:"🪟"},{name:"Pintura",icon:"🎨"}].map((n,i) => (
              <div key={i} className="bg-white border border-zinc-200 p-6 text-center flex flex-col items-center gap-2">
                <span className="text-3xl">{n.icon}</span>
                <p className="text-black font-bold text-sm">{n.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-600 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">TU PAGINA WEB,<br />GRATIS.</h2>
          <p className="text-orange-100 text-lg mb-12">Si tienes un negocio de servicios local, te hacemos tu pagina web sin costo. Sin contratos. Sin trampa.</p>
          <div className="bg-orange-700/50 border border-orange-500 p-8 mb-10 text-left">
            <p className="text-white font-black text-lg mb-6">Que incluye la pagina gratis?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Diseno profesional en 48 horas","Secciones de servicios y contacto","Optimizada para Google (SEO basico)","Copy escrito para convertir","Fotos profesionales del nicho","Sin compromiso de continuar"].map((item,i) => (
                <div key={i} className="flex items-center gap-2"><span className="text-white font-black">✓</span><span className="text-orange-100 text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <a href="#contacto" className="bg-white text-orange-600 px-10 py-4 font-black text-lg hover:bg-orange-50 transition inline-block">Quiero mi pagina web gratis</a>
          <p className="text-orange-200 text-sm mt-6">Solo para negocios de servicios locales. Cupos limitados por semana.</p>
        </div>
      </section>

      <section id="contacto" className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">Empieza hoy</p>
          <h2 className="text-4xl font-black text-black mb-12">CUENTANOS DE<br />TU NEGOCIO</h2>
          <div className="border-t-4 border-orange-600 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div><p className="text-xs font-bold tracking-widest text-black mb-2">NOMBRE</p><input type="text" placeholder="Tu nombre" className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
              <div><p className="text-xs font-bold tracking-widest text-black mb-2">TELEFONO</p><input type="text" placeholder="(713) 000-0000" className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
            </div>
            <div className="mb-6"><p className="text-xs font-bold tracking-widest text-black mb-2">NOMBRE DEL NEGOCIO</p><input type="text" placeholder="Ej. Rodriguez AC Services" className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
            <div className="mb-6"><p className="text-xs font-bold tracking-widest text-black mb-2">TIPO DE NEGOCIO</p>
            <select className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600 bg-white text-zinc-500">
              <option value="">Selecciona tu industria</option>
              <option value="ac">AC y Calefaccion</option>
              <option value="electric">Electricistas</option>
              <option value="plumbing">Plomeros</option>
              <option value="landscaping">Jardineria</option>
              <option value="cleaning">Limpieza de Casas</option>
              <option value="remodeling">Remodelacion</option>
              <option value="windows">Ventanas y Puertas</option>
              <option value="painting">Pintura</option>
              <option value="other">Otro</option>
            </select></div>
            <div className="mb-8"><p className="text-xs font-bold tracking-widest text-black mb-2">CUAL ES TU MAYOR RETO AHORA MISMO?</p><textarea placeholder="Ej. No tengo pagina web, no tengo clientes nuevos consistentes..." rows={4} className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600 resize-none"></textarea></div>
            <button className="w-full bg-black text-white py-4 font-black text-lg hover:bg-zinc-800 transition">Quiero empezar, es gratis</button>
            <p className="text-zinc-500 text-xs text-center mt-4">Te contactamos en menos de 24 horas. Sin spam, sin presion. Solo una conversacion.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#0f172a] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-black text-3xl mb-2"><span className="text-white">CECA</span><span className="text-orange-500"> Marketing</span></p>
            <p className="text-zinc-400 text-sm max-w-xs">Marketing Digital para negocios de servicios locales.</p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 text-sm">© 2025 CECA Marketing.</p>
            <p className="text-zinc-600 text-xs mt-1">Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
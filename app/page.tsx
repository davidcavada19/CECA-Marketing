"use client";
import { useState } from "react";

const content = {
  en: {
    nav_cta: "Get Your FREE Website",
    badge: "Digital Marketing",
    h1_1: "MORE CLIENTS.",
    h1_2: "LESS",
    h1_stress: "STRESS.",
    h1_3: "REAL",
    h1_4: "RESULTS.",
    subtitle: "We help Houston service businesses get more customers consistently — with high-converting websites, automation, and ads that actually work.",
    cta1: "Get Your FREE Website",
    cta2: "Our Services",
    stat1_label: "Website delivery",
    stat2_label: "Cost of your first website",
    stat3_label: "Focused on local services",
    services_label: "What we do",
    services_title: "SYSTEMS THAT BRING CLIENTS\nWHILE YOU WORK",
    services_sub: "We don't just build pretty websites. We build the complete system so your business never runs out of leads.",
    s1_title: "Lead Generation Websites",
    s1_desc: "Built specifically to turn visitors into calls. Not websites to look good — websites to sell.",
    s1_tags: "LANDING PAGES · WEBSITES",
    s2_title: "CRM & Automations",
    s2_desc: "Automatic lead follow-up, appointment reminders, Google reviews — all without lifting a finger.",
    s2_tags: "CRM · AUTOMATIONS · PIPELINES",
    s3_title: "Meta & Google Ads",
    s3_desc: "Targeted campaigns that reach customers searching for exactly what you offer, wherever they are, at the exact right moment.",
    s3_tags: "FACEBOOK ADS · GOOGLE ADS · RETARGETING",
    s4_title: "Field Management Systems",
    s4_desc: "We integrate your business with field management software — quotes, dispatch, invoices, and technician tracking.",
    s4_tags: "FIELD SOFTWARE · DISPATCH · INVOICING",
    how_label: "How it works",
    how_title: "FROM FIRST CONTACT\nTO MORE CLIENTS",
    how_sub: "No complications. No tech jargon. Just a clear process that works.",
    step1_title: "We Talk",
    step1_desc: "A 20-minute call to understand your business, your ideal clients, and what you need to grow.",
    step2_title: "We Build",
    step2_desc: "We create your website, set up the system, and prepare your ads — all in less than a week.",
    step3_title: "We Launch",
    step3_desc: "We turn on the campaigns and the system starts working for you. Leads come in, follow-up is automatic.",
    step4_title: "We Optimize",
    step4_desc: "We analyze results every month and adjust whatever is needed so the numbers keep improving.",
    niches_label: "Who we help",
    niches_title: "SERVICE BUSINESSES\nIN HOUSTON, TX",
    niches_sub: "If you have a service business in Houston or the metro area, we work with you.",
    free_title: "YOUR WEBSITE,\nFREE.",
    free_sub: "If you have a local service business, we build your website at no cost. No contracts. No catch.",
    free_box_title: "What does the free website include?",
    free_i1: "Professional design in 48 hours",
    free_i2: "Service and contact sections",
    free_i3: "Optimized for Google (basic SEO)",
    free_i4: "Copy written to convert",
    free_i5: "Professional niche photos",
    free_i6: "No commitment to continue",
    free_cta: "I want my free website",
    free_note: "Only for local service businesses. Limited spots per week.",
    form_label: "Start today",
    form_title: "TELL US ABOUT\nYOUR BUSINESS",
    form_name: "NAME",
    form_name_ph: "Your name",
    form_phone: "PHONE",
    form_phone_ph: "(713) 000-0000",
    form_biz: "BUSINESS NAME",
    form_biz_ph: "Ex. Rodriguez AC Services",
    form_type: "BUSINESS TYPE",
    form_type_ph: "Select your industry",
    form_challenge: "WHAT IS YOUR BIGGEST CHALLENGE RIGHT NOW?",
    form_challenge_ph: "Ex. No website, no consistent new clients, don't know how to run ads...",
    form_cta: "I want to start — it is free",
    form_note: "We contact you in less than 24 hours. No spam, no pressure. Just a conversation.",
  },
  es: {
    nav_cta: "Consigue tu pagina GRATIS",
    badge: "Marketing Digital",
    h1_1: "MAS CLIENTES.",
    h1_2: "MENOS",
    h1_stress: "ESTRES.",
    h1_3: "RESULTADOS",
    h1_4: "REALES.",
    subtitle: "Ayudamos a negocios de servicios en Houston a conseguir mas clientes de forma consistente con paginas web que convierten, automatizaciones y anuncios que si funcionan.",
    cta1: "Consigue tu pagina web GRATIS",
    cta2: "Ver servicios",
    stat1_label: "Entrega de tu pagina web",
    stat2_label: "Costo de tu primera pagina",
    stat3_label: "Enfocados en servicios locales",
    services_label: "Lo que hacemos",
    services_title: "SISTEMAS QUE TRAEN CLIENTES\nMIENTRAS TU TRABAJAS",
    services_sub: "No solo hacemos paginas bonitas. Construimos el sistema completo para que tu negocio nunca se quede sin leads.",
    s1_title: "Paginas Web de Captacion",
    s1_desc: "Disenadas especificamente para convertir visitantes en llamadas. No son paginas para verse bonito, son para vender.",
    s1_tags: "LANDING PAGES · SITIOS WEB",
    s2_title: "CRM y Automatizaciones",
    s2_desc: "Seguimiento automatico de leads, recordatorios de citas, reseñas en Google, todo sin que tengas que levantar un dedo.",
    s2_tags: "CRM · AUTOMATIONS · PIPELINES",
    s3_title: "Anuncios en Meta y Google",
    s3_desc: "Campanas dirigidas a clientes que buscan exactamente lo que ofreces, donde esten, en el momento exacto.",
    s3_tags: "FACEBOOK ADS · GOOGLE ADS · RETARGETING",
    s4_title: "Sistemas de Gestion de Campo",
    s4_desc: "Integramos tu negocio con software de gestion de campo, cotizaciones, despacho, facturas y seguimiento de tecnicos.",
    s4_tags: "SOFTWARE DE CAMPO · DESPACHO · FACTURACION",
    how_label: "Como funciona",
    how_title: "DEL PRIMER CONTACTO\nA MAS CLIENTES",
    how_sub: "Sin complicaciones. Sin jerga tecnica. Solo un proceso claro que funciona.",
    step1_title: "Hablamos",
    step1_desc: "Una llamada de 20 minutos para entender tu negocio, tus clientes ideales y que necesitas para crecer.",
    step2_title: "Construimos",
    step2_desc: "Creamos tu pagina web, configuramos el sistema y preparamos los anuncios, todo en menos de una semana.",
    step3_title: "Lanzamos",
    step3_desc: "Encendemos las campanas y el sistema empieza a trabajar para ti. Los leads llegan, el seguimiento es automatico.",
    step4_title: "Optimizamos",
    step4_desc: "Analizamos resultados mes a mes y ajustamos lo que sea necesario para que los numeros sigan mejorando.",
    niches_label: "A quien ayudamos",
    niches_title: "NEGOCIOS DE SERVICIOS\nEN HOUSTON, TX",
    niches_sub: "Si tienes un negocio de servicios en Houston o el area metropolitana, trabajamos contigo.",
    free_title: "TU PAGINA WEB,\nGRATIS.",
    free_sub: "Si tienes un negocio de servicios local, te hacemos tu pagina web sin costo. Sin contratos. Sin trampa.",
    free_box_title: "Que incluye la pagina gratis?",
    free_i1: "Diseno profesional en 48 horas",
    free_i2: "Secciones de servicios y contacto",
    free_i3: "Optimizada para Google (SEO basico)",
    free_i4: "Copy escrito para convertir",
    free_i5: "Fotos profesionales del nicho",
    free_i6: "Sin compromiso de continuar",
    free_cta: "Quiero mi pagina web gratis",
    free_note: "Solo para negocios de servicios locales. Cupos limitados por semana.",
    form_label: "Empieza hoy",
    form_title: "CUENTANOS DE\nTU NEGOCIO",
    form_name: "NOMBRE",
    form_name_ph: "Tu nombre",
    form_phone: "TELEFONO",
    form_phone_ph: "(713) 000-0000",
    form_biz: "NOMBRE DEL NEGOCIO",
    form_biz_ph: "Ej. Rodriguez AC Services",
    form_type: "TIPO DE NEGOCIO",
    form_type_ph: "Selecciona tu industria",
    form_challenge: "CUAL ES TU MAYOR RETO AHORA MISMO?",
    form_challenge_ph: "Ej. No tengo pagina web, no tengo clientes nuevos consistentes...",
    form_cta: "Quiero empezar, es gratis",
    form_note: "Te contactamos en menos de 24 horas. Sin spam, sin presion. Solo una conversacion.",
  }
};

const niches = [
  {name:"AC y Calefaccion", icon:"❄️"},
  {name:"Electricistas", icon:"⚡"},
  {name:"Plomeros", icon:"🔧"},
  {name:"Jardineria", icon:"🌿"},
  {name:"Limpieza de Casas", icon:"🏠"},
  {name:"Remodelacion", icon:"🔨"},
  {name:"Ventanas y Puertas", icon:"🪟"},
  {name:"Pintura", icon:"🎨"},
];
const nichesEn = [
  {name:"AC & Heating", icon:"❄️"},
  {name:"Electricians", icon:"⚡"},
  {name:"Plumbers", icon:"🔧"},
  {name:"Landscaping", icon:"🌿"},
  {name:"House Cleaning", icon:"🏠"},
  {name:"Remodeling", icon:"🔨"},
  {name:"Windows & Doors", icon:"🪟"},
  {name:"Painting", icon:"🎨"},
];

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];

  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-blue-900/20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-black text-lg md:text-2xl tracking-tight"><span className="text-white">CECA</span><span className="text-orange-500"> Marketing</span></span>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === "en" ? "bg-orange-600 text-white" : "text-zinc-400 hover:text-white"}`}>EN</button>
              <button onClick={() => setLang("es")} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === "es" ? "bg-orange-600 text-white" : "text-zinc-400 hover:text-white"}`}>ES</button>
            </div>
            <a href="#contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-3 py-2 text-xs md:px-5 md:text-sm font-semibold transition hidden md:block">{t.nav_cta}</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-20 overflow-hidden">
  <div className="absolute inset-0 overflow-hidden">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1800&q=80" alt="" className="w-full h-full object-cover" style={{animation:"slowZoom 30s ease-in-out infinite", willChange:"transform", transformOrigin:"center center"}} />
    <div className="absolute inset-0" style={{background:"linear-gradient(to bottom, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.75) 50%, rgba(15,23,42,0.95) 100%)"}}></div>
  </div>
        <div style={{position:"absolute",top:"-30%",left:"-30%",width:"1800px",height:"1800px",borderRadius:"50%",background:"radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)",animation:"orb1 40s ease-in-out infinite",pointerEvents:"none"}}></div>
        <div style={{position:"absolute",bottom:"-30%",right:"-30%",width:"1800px",height:"1800px",borderRadius:"50%",background:"radial-gradient(circle, rgba(234,88,12,0.12) 0%, transparent 65%)",animation:"orb2 50s ease-in-out infinite",pointerEvents:"none"}}></div>
        <div className="max-w-6xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-orange-600 px-3 py-1 mb-8 mx-auto">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-orange-400 text-xs tracking-widest uppercase">{t.badge}</span>
          </div>
          <h1 className="text-white text-4xl md:text-8xl font-black leading-none mb-6">
            {t.h1_1}<br />{t.h1_2} <span className="text-orange-500">{t.h1_stress}</span><br />{t.h1_3}<br />{t.h1_4}
          </h1>
          <p className="text-zinc-300 text-lg max-w-2xl mb-10">{t.subtitle}</p>
          <div className="flex flex-wrap gap-4 mb-20 justify-center">
            <a href="#contacto" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-semibold transition">{t.cta1}</a>
            <a href="#servicios" className="border border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition">{t.cta2}</a>
          </div>
          <div className="grid grid-cols-3 gap-8 border-t border-zinc-700 pt-10">
            <div><p className="text-white text-4xl font-black">Fast<span className="text-orange-500">.</span></p><p className="text-zinc-400 text-sm mt-1">{t.stat1_label}</p></div>
            <div><p className="text-white text-4xl font-black"><span className="text-orange-500">$0</span></p><p className="text-zinc-400 text-sm mt-1">{t.stat2_label}</p></div>
            <div><p className="text-white text-4xl font-black">100<span className="text-orange-500">%</span></p><p className="text-zinc-400 text-sm mt-1">{t.stat3_label}</p></div>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-4xl font-black uppercase mb-3">{t.services_label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-4 whitespace-pre-line">{t.services_title}</h2>
          <p className="text-[#0f172a] text-lg max-w-xl mb-16">{t.services_sub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9783;</span></div><h3 className="text-xl font-black text-black mb-3">{t.s1_title}</h3><p className="text-zinc-600 text-sm mb-4">{t.s1_desc}</p><p className="text-orange-600 text-xs font-bold tracking-widest">{t.s1_tags}</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9776;</span></div><h3 className="text-xl font-black text-black mb-3">{t.s2_title}</h3><p className="text-zinc-600 text-sm mb-4">{t.s2_desc}</p><p className="text-orange-600 text-xs font-bold tracking-widest">{t.s2_tags}</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9650;</span></div><h3 className="text-xl font-black text-black mb-3">{t.s3_title}</h3><p className="text-zinc-600 text-sm mb-4">{t.s3_desc}</p><p className="text-orange-600 text-xs font-bold tracking-widest">{t.s3_tags}</p></div>
            <div className="bg-white p-8 border border-zinc-200"><div className="w-10 h-10 bg-black flex items-center justify-center mb-6"><span className="text-white text-lg">&#9788;</span></div><h3 className="text-xl font-black text-black mb-3">{t.s4_title}</h3><p className="text-zinc-600 text-sm mb-4">{t.s4_desc}</p><p className="text-orange-600 text-xs font-bold tracking-widest">{t.s4_tags}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-xl md:text-4xl font-black uppercase mb-3">{t.how_label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 whitespace-pre-line">{t.how_title}</h2>
          <p className="text-zinc-400 text-lg max-w-xl mb-16">{t.how_sub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">{t.step1_title}</h3><span className="text-zinc-800 text-6xl font-black leading-none">01</span></div><p className="text-zinc-400 text-base">{t.step1_desc}</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">{t.step2_title}</h3><span className="text-zinc-800 text-6xl font-black leading-none">02</span></div><p className="text-zinc-400 text-base">{t.step2_desc}</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">{t.step3_title}</h3><span className="text-zinc-800 text-6xl font-black leading-none">03</span></div><p className="text-zinc-400 text-base">{t.step3_desc}</p></div>
            <div className="border-t border-zinc-700 pt-8"><div className="flex justify-between items-start mb-4"><h3 className="text-white text-2xl font-black">{t.step4_title}</h3><span className="text-zinc-800 text-6xl font-black leading-none">04</span></div><p className="text-zinc-400 text-base">{t.step4_desc}</p></div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-orange-600 text-xl md:text-4xl font-black uppercase mb-2">{t.niches_label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 whitespace-pre-line">{t.niches_title}</h2>
          <p className="text-zinc-600 text-lg max-w-xl mb-16">{t.niches_sub}</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {(lang === "en" ? nichesEn : niches).map((n, i) => (
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
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 whitespace-pre-line">{t.free_title}</h2>
          <p className="text-orange-100 text-lg mb-12">{t.free_sub}</p>
          <div className="bg-orange-700/50 border border-orange-500 p-8 mb-10 text-left">
            <p className="text-white font-black text-lg mb-6">{t.free_box_title}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[t.free_i1,t.free_i2,t.free_i3,t.free_i4,t.free_i5,t.free_i6].map((item,i) => (
                <div key={i} className="flex items-center gap-2"><span className="text-white font-black">✓</span><span className="text-orange-100 text-sm">{item}</span></div>
              ))}
            </div>
          </div>
          <a href="#contacto" className="bg-white text-orange-600 px-10 py-4 font-black text-lg hover:bg-orange-50 transition inline-block">{t.free_cta}</a>
          <p className="text-orange-200 text-sm mt-6">{t.free_note}</p>
        </div>
      </section>

      <section id="contacto" className="bg-[#f5f0eb] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-600 text-xs font-bold tracking-widest uppercase mb-3">{t.form_label}</p>
          <h2 className="text-4xl font-black text-black mb-12 whitespace-pre-line">{t.form_title}</h2>
          <div className="border-t-4 border-orange-600 pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div><p className="text-xs font-bold tracking-widest text-black mb-2">{t.form_name}</p><input type="text" placeholder={t.form_name_ph} className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
              <div><p className="text-xs font-bold tracking-widest text-black mb-2">{t.form_phone}</p><input type="text" placeholder={t.form_phone_ph} className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
            </div>
            <div className="mb-6"><p className="text-xs font-bold tracking-widest text-black mb-2">{t.form_biz}</p><input type="text" placeholder={t.form_biz_ph} className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600" /></div>
            <div className="mb-6"><p className="text-xs font-bold tracking-widest text-black mb-2">{t.form_type}</p>
<select className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600 bg-white text-zinc-500">
  <option value="">{t.form_type_ph}</option>
  <option value="ac">{lang === "en" ? "AC & Heating" : "AC y Calefaccion"}</option>
  <option value="electric">{lang === "en" ? "Electricians" : "Electricistas"}</option>
  <option value="plumbing">{lang === "en" ? "Plumbers" : "Plomeros"}</option>
  <option value="landscaping">{lang === "en" ? "Landscaping" : "Jardineria"}</option>
  <option value="cleaning">{lang === "en" ? "House Cleaning" : "Limpieza de Casas"}</option>
  <option value="remodeling">{lang === "en" ? "Remodeling" : "Remodelacion"}</option>
  <option value="windows">{lang === "en" ? "Windows & Doors" : "Ventanas y Puertas"}</option>
  <option value="painting">{lang === "en" ? "Painting" : "Pintura"}</option>
  <option value="other">{lang === "en" ? "Other" : "Otro"}</option>
</select></div>
            <div className="mb-8"><p className="text-xs font-bold tracking-widest text-black mb-2">{t.form_challenge}</p><textarea placeholder={t.form_challenge_ph} rows={4} className="w-full border border-zinc-300 px-4 py-3 text-sm focus:outline-none focus:border-orange-600 resize-none"></textarea></div>
            <button className="w-full bg-black text-white py-4 font-black text-lg hover:bg-zinc-800 transition">{t.form_cta}</button>
            <p className="text-zinc-500 text-xs text-center mt-4">{t.form_note}</p>
          </div>
        </div>
      </section>
      <footer className="bg-[#0f172a] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <p className="font-black text-3xl mb-2"><span className="text-white">CECA</span><span className="text-orange-500"> Marketing</span></p>
            <p className="text-zinc-400 text-sm max-w-xs">
              {lang === "en" ? "Digital Marketing for local service businesses." : "Marketing Digital para negocios de servicios locales."}
            </p>
          </div>
          <div className="text-right">
            <p className="text-zinc-400 text-sm">© 2025 CECA Marketing.</p>
            <p className="text-zinc-600 text-xs mt-1">
              {lang === "en" ? "All rights reserved." : "Todos los derechos reservados."}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

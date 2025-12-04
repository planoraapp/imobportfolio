import React, { useState, useEffect } from 'react';

import { 

  Home, 

  Search, 

  MapPin, 

  Phone, 

  Mail, 

  Menu, 

  X, 

  BedDouble, 

  Bath, 

  Car, 

  Maximize, 

  ArrowRight, 

  ArrowUpRight,

  Instagram, 

  Facebook, 

  Linkedin,

  CheckCircle,

  MessageCircle,

  Key

} from 'lucide-react';



// --- MOCK DATA (Dados de Exemplo) ---

const PROPERTIES = [

  {

    id: 1,

    title: "Casa Jardim Botânico",

    price: "R$ 1.250.000",

    location: "Zona Sul",

    type: "Casa",

    beds: 3,

    baths: 3,

    area: "180m²",

    image: "https://images.unsplash.com/photo-1600596542815-2495db98dada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

    description: "Casa recém construída com acabamento de alto padrão. Possui área gourmet integrada, piscina aquecida e sistema de automação."

  },

  {

    id: 2,

    title: "Loft Compacto",

    price: "R$ 480.000",

    location: "Centro",

    type: "Apartamento",

    beds: 1,

    baths: 1,

    area: "45m²",

    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

    description: "Ideal para investidores ou solteiros. Prédio com coworking, lavanderia e academia completa."

  },

  {

    id: 3,

    title: "Cobertura Duplex",

    price: "R$ 2.800.000",

    location: "Orla",

    type: "Cobertura",

    beds: 4,

    baths: 5,

    area: "320m²",

    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

    description: "Exclusividade total. Cobertura com terraço privativo, churrasqueira e vista eterna para o mar."

  },

  {

    id: 4,

    title: "Refúgio na Serra",

    price: "R$ 950.000",

    location: "Serra",

    type: "Casa",

    beds: 3,

    baths: 2,

    area: "150m²",

    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

    description: "Segurança 24h e lazer completo para sua família. Casa com quintal amplo."

  }

];



// --- DESIGN SYSTEM (Baseado na Imagem "Ever Green Architex") ---

// Background Principal: Um verde muito escuro e profundo.

// Texto: Branco ou Off-White.

// Linhas: Finas e discretas.



const Theme = {

  bgMain: "bg-[#1B2B23]", // Verde escuro profundo (baseado na foto)

  bgCard: "bg-[#25382F]", // Um tom levemente mais claro para contraste sutil

  bgLight: "bg-[#F0F2F0]", // Para botões de destaque (branco gelo)

  textMain: "text-[#F0F2F0]",

  textMuted: "text-[#8A9A90]", // Um verde acinzentado para textos secundários

  border: "border-[#3A4F44]",

  accent: "text-[#D4E6D8]", // Verde muito claro para destaques

};



export default function RealEstateWebsite() {

  const [view, setView] = useState('home'); 

  const [selectedProp, setSelectedProp] = useState(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);



  // Navigation Handler

  const navigateTo = (page, prop = null) => {

    window.scrollTo(0, 0);

    setMobileMenuOpen(false);

    if (prop) setSelectedProp(prop);

    setView(page);

  };



  // --- COMPONENTS ---



  const Header = () => (

    <header className={`fixed w-full top-0 z-50 ${Theme.bgMain} bg-opacity-95 backdrop-blur-sm border-b border-[#2A3C32]`}>

      <div className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo Minimalista */}

        <div onClick={() => navigateTo('home')} className="cursor-pointer group">

          <h1 className={`text-xl font-bold ${Theme.textMain} tracking-tighter uppercase leading-none`}>

            EVER GREEN<br/>

            <span className="text-xs font-normal tracking-widest opacity-70">REAL ESTATE</span>

          </h1>

        </div>



        {/* Desktop Nav - Estilo "Pílula" ou Texto Simples */}

        <nav className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide text-white/80">

          <button onClick={() => navigateTo('home')} className="hover:text-white transition">HOME</button>

          <button onClick={() => navigateTo('properties')} className="hover:text-white transition">PROJETOS</button>

          <button onClick={() => navigateTo('about')} className="hover:text-white transition">SOBRE</button>

          

          <button 

            onClick={() => navigateTo('contact')}

            className={`px-6 py-2 rounded-full ${Theme.bgLight} text-[#1B2B23] font-bold hover:scale-105 transition duration-300 text-xs uppercase tracking-wider`}

          >

            Fale Conosco

          </button>

        </nav>



        {/* Mobile Toggle */}

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

          {mobileMenuOpen ? <X /> : <Menu />}

        </button>

      </div>



      {/* Mobile Menu */}

      {mobileMenuOpen && (

        <div className={`md:hidden ${Theme.bgMain} border-t border-[#2A3C32] p-6 absolute w-full h-screen`}>

          <div className="flex flex-col gap-6 text-white text-xl font-light">

            <button onClick={() => navigateTo('home')} className="text-left">Home</button>

            <button onClick={() => navigateTo('properties')} className="text-left">Imóveis</button>

            <button onClick={() => navigateTo('about')} className="text-left">Sobre</button>

            <button onClick={() => navigateTo('contact')} className={`mt-4 py-4 ${Theme.bgLight} text-[#1B2B23] font-bold text-center rounded-full`}>

              Fale Conosco

            </button>

          </div>

        </div>

      )}

    </header>

  );



  // Home Page baseada no layout da imagem

  const HomeView = () => (

    <div className={`min-h-screen ${Theme.bgMain} font-sans`}>

      

      {/* 1. HERO SECTION - Imagem com Texto Gigante "WE SHAPE SPACES" */}

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">

        <div className="container mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Texto de Apoio (Kitchen / Living Room lines - decorativo) */}

            <div className="hidden lg:block lg:col-span-1 h-full relative border-l border-white/10 ml-4">

              <div className="absolute top-10 -left-3 text-[10px] text-white/50 bg-[#1B2B23] px-1 uppercase tracking-widest rotate-90 origin-left">

                Estilo

              </div>

            </div>



            {/* Imagem Principal */}

            <div className="lg:col-span-11 relative">

              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-sm group">

                 <img 

                   src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 

                   alt="Hero Architecture" 

                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"

                 />

                 {/* Overlay Gradiente Sutil */}

                 <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B23] via-transparent to-transparent opacity-90"></div>

                 

                 {/* Texto Gigante Sobreposto (Estilo da imagem) */}

                 <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 flex flex-col items-center text-center">

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white uppercase leading-none tracking-tighter mb-6 drop-shadow-lg">

                      Seu Novo<br/>Espaço

                    </h1>

                    <button 

                      onClick={() => navigateTo('properties')}

                      className="bg-white text-[#1B2B23] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4E6D8] transition"

                    >

                      Ver Projetos

                    </button>

                 </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* 2. GRID "OUR LATEST PROJECT" - Layout em Mosaico */}

      <section className="py-20 px-6 border-t border-[#2A3C32]">

        <div className="container mx-auto">

          <h2 className="text-4xl md:text-6xl font-light text-white mb-16 uppercase tracking-tight">

            Nossos <br/><span className="font-bold">Destaques</span>

          </h2>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">

            

            {/* Bloco 1: Apenas Texto (Verde Sólido) */}

            <div className={`aspect-square ${Theme.bgCard} p-8 flex flex-col justify-between group hover:bg-[#2F453B] transition duration-500 border border-[#2A3C32]`}>

              <h3 className="text-2xl font-bold text-white">Floating<br/>Homes</h3>

              <div className="flex justify-end">

                <ArrowUpRight className="text-white opacity-50 w-8 h-8 group-hover:rotate-45 transition" />

              </div>

            </div>



            {/* Bloco 2: Imagem */}

            <div 

              className="aspect-square relative overflow-hidden group cursor-pointer"

              onClick={() => navigateTo('detail', PROPERTIES[0])}

            >

              <img src={PROPERTIES[0].image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition"></div>

              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                <p className="font-bold uppercase tracking-wider text-sm">{PROPERTIES[0].title}</p>

                <p className="text-xs">{PROPERTIES[0].location}</p>

              </div>

            </div>



            {/* Bloco 3: Texto (Verde Sólido) */}

            <div className={`aspect-square ${Theme.bgCard} p-8 flex flex-col justify-between group hover:bg-[#2F453B] transition duration-500 border border-[#2A3C32]`}>

               <h3 className="text-2xl font-bold text-white">French<br/>Country</h3>

               <div className="flex justify-end">

                <ArrowUpRight className="text-white opacity-50 w-8 h-8 group-hover:rotate-45 transition" />

               </div>

            </div>



             {/* Bloco 4: Imagem */}

             <div 

               className="aspect-square relative overflow-hidden group cursor-pointer"

               onClick={() => navigateTo('detail', PROPERTIES[1])}

             >

              <img src={PROPERTIES[1].image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />

              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                <p className="font-bold uppercase tracking-wider text-sm">{PROPERTIES[1].title}</p>

              </div>

            </div>



            {/* Bloco 5: Texto */}

            <div className={`aspect-square ${Theme.bgCard} p-8 flex flex-col justify-between group hover:bg-[#2F453B] transition duration-500 border border-[#2A3C32]`}>

               <h3 className="text-2xl font-bold text-white">Modern<br/>Cottage</h3>

               <div className="flex justify-end">

                <ArrowUpRight className="text-white opacity-50 w-8 h-8 group-hover:rotate-45 transition" />

               </div>

            </div>



            {/* Bloco 6: Imagem */}

            <div 

              className="aspect-square relative overflow-hidden group cursor-pointer"

              onClick={() => navigateTo('detail', PROPERTIES[2])}

            >

              <img src={PROPERTIES[2].image} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />

              <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">

                <p className="font-bold uppercase tracking-wider text-sm">{PROPERTIES[2].title}</p>

              </div>

            </div>



          </div>

          

          <div className="flex justify-center mt-16">

            <button 

              onClick={() => navigateTo('properties')}

              className="bg-white text-[#1B2B23] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition"

            >

              Ver Todos os Imóveis

            </button>

          </div>

        </div>

      </section>



      {/* 3. PROFESSIONAL SERVICE / STATS - Grade com Linhas Finas */}

      <section className="py-20 px-6 border-t border-[#2A3C32]">

        <div className="container mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

             <h2 className="text-4xl md:text-5xl font-bold text-white uppercase leading-tight">

               Serviço<br/>Profissional.

             </h2>

             <p className="text-[#8A9A90] max-w-sm self-end">

               Liderando o caminho na criação de experiências imobiliárias únicas para nossos clientes.

             </p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#3A4F44]">

            {/* Stat 1 */}

            <div className="p-12 border-r border-b border-[#3A4F44] hover:bg-[#25382F] transition duration-500">

              <div className="flex justify-between items-start mb-12">

                <span className="text-white text-sm font-bold uppercase">Anos de<br/>Experiência</span>

                <ArrowUpRight className="text-[#3A4F44]" />

              </div>

              <p className="text-8xl md:text-9xl text-white font-light">10</p>

              <p className="text-xs text-[#8A9A90] mt-4 uppercase tracking-widest">Transformando Vidas</p>

            </div>

            

            {/* Stat 2 */}

            <div className="p-12 border-r border-b border-[#3A4F44] hover:bg-[#25382F] transition duration-500">

              <div className="flex justify-between items-start mb-12">

                <span className="text-white text-sm font-bold uppercase">Imóveis<br/>Vendidos</span>

                <ArrowUpRight className="text-[#3A4F44]" />

              </div>

              <p className="text-8xl md:text-9xl text-white font-light">500</p>

              <p className="text-xs text-[#8A9A90] mt-4 uppercase tracking-widest">Clientes Satisfeitos</p>

            </div>

            

            {/* Stat 3 */}

            <div className="p-12 border-r border-b border-[#3A4F44] hover:bg-[#25382F] transition duration-500">

              <div className="flex justify-between items-start mb-12">

                <span className="text-white text-sm font-bold uppercase">Bairros<br/>Atendidos</span>

                <ArrowUpRight className="text-[#3A4F44]" />

              </div>

              <p className="text-8xl md:text-9xl text-white font-light">12</p>

              <p className="text-xs text-[#8A9A90] mt-4 uppercase tracking-widest">Cobertura Local</p>

            </div>



            {/* Stat 4 */}

            <div className="p-12 border-r border-b border-[#3A4F44] hover:bg-[#25382F] transition duration-500">

              <div className="flex justify-between items-start mb-12">

                <span className="text-white text-sm font-bold uppercase">Avaliação<br/>Média</span>

                <ArrowUpRight className="text-[#3A4F44]" />

              </div>

              <p className="text-8xl md:text-9xl text-white font-light">5.0</p>

              <p className="text-xs text-[#8A9A90] mt-4 uppercase tracking-widest">Estrelas no Google</p>

            </div>

          </div>

        </div>

      </section>



      {/* 4. FEATURED SINGLE PROJECT - "Quiet Space" style */}

      <section className="relative h-[80vh] overflow-hidden">

        <img 

          src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 

          className="w-full h-full object-cover" 

          alt="Featured" 

        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">

          <h2 className="text-6xl md:text-8xl text-white font-bold uppercase tracking-tighter mb-4">

            Espaço<br/>Tranquilo

          </h2>

          <p className="text-white/80 max-w-lg mb-8 font-light">

            Uma nova forma de viver. Mais perto da natureza, com todo o conforto urbano.

          </p>

          <button 

             onClick={() => navigateTo('contact')}

             className="border border-white text-white px-8 py-3 rounded-full uppercase text-xs font-bold hover:bg-white hover:text-[#1B2B23] transition"

          >

            Agendar Visita

          </button>

        </div>

      </section>



      {/* 5. FOOTER CALL TO ACTION - "Let's Work Together" */}

      <section className="py-24 px-6 text-center">

        <h2 className="text-5xl md:text-7xl font-bold text-white uppercase mb-12">

          Vamos Trabalhar<br/>Juntos?

        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <button 

            onClick={() => navigateTo('contact')}

            className="bg-white text-[#1B2B23] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition"

          >

            Quero Comprar

          </button>

          <button 

            onClick={() => navigateTo('contact')}

            className="border border-[#3A4F44] text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#25382F] transition"

          >

            Quero Vender

          </button>

        </div>

      </section>

    </div>

  );



  // LISTAGEM PADRÃO (Para quando clica em "Ver Projetos")

  const PropertiesView = () => (

    <div className={`min-h-screen ${Theme.bgMain} pt-24 px-6`}>

      <div className="container mx-auto">

        <div className="flex items-center gap-4 mb-12">

           <button onClick={() => setView('home')} className="text-white/50 hover:text-white"><ArrowRight className="rotate-180" /></button>

           <h2 className="text-3xl text-white font-bold uppercase">Imóveis Disponíveis</h2>

        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {PROPERTIES.map(prop => (

            <div 

              key={prop.id} 

              className="group cursor-pointer"

              onClick={() => navigateTo('detail', prop)}

            >

              <div className="aspect-[4/3] overflow-hidden mb-4 rounded-sm relative">

                <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />

                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur px-3 py-1 text-white text-xs uppercase tracking-widest">

                  {prop.type}

                </div>

              </div>

              <div className="flex justify-between items-end border-b border-[#3A4F44] pb-4">

                <div>

                  <h3 className="text-xl text-white font-bold mb-1">{prop.title}</h3>

                  <p className="text-[#8A9A90] text-sm">{prop.location}</p>

                </div>

                <p className="text-white font-light text-lg">{prop.price}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );



  // DETALHE DO IMÓVEL (Minimalista)

  const PropertyDetailView = () => (

    <div className={`min-h-screen ${Theme.bgMain} text-white`}>

      <div className="h-[60vh] relative">

        <img src={selectedProp.image} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B23] to-transparent opacity-90"></div>

        <button 

          onClick={() => navigateTo('properties')}

          className="absolute top-6 left-6 bg-white/10 backdrop-blur p-3 rounded-full hover:bg-white hover:text-black transition"

        >

          <ArrowRight className="rotate-180 w-5 h-5" />

        </button>

        

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">

          <div className="container mx-auto">

            <span className="text-[#8A9A90] uppercase tracking-widest text-sm mb-2 block">{selectedProp.type}</span>

            <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4">{selectedProp.title}</h1>

            <p className="text-2xl font-light">{selectedProp.price}</p>

          </div>

        </div>

      </div>



      <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

        <div className="lg:col-span-2">

          <p className="text-lg text-[#8A9A90] leading-relaxed mb-12">

            {selectedProp.description}

          </p>



          <div className="grid grid-cols-3 gap-6 border-t border-[#3A4F44] pt-8">

            <div>

              <p className="text-xs uppercase tracking-widest text-[#8A9A90] mb-2">Quartos</p>

              <p className="text-3xl font-light">{selectedProp.beds}</p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-widest text-[#8A9A90] mb-2">Banheiros</p>

              <p className="text-3xl font-light">{selectedProp.baths}</p>

            </div>

            <div>

              <p className="text-xs uppercase tracking-widest text-[#8A9A90] mb-2">Área</p>

              <p className="text-3xl font-light">{selectedProp.area}</p>

            </div>

          </div>

        </div>



        <div className={`p-8 ${Theme.bgCard} border border-[#3A4F44] h-fit`}>

          <h3 className="text-xl font-bold mb-6 uppercase">Interessado?</h3>

          <button className="w-full bg-white text-[#1B2B23] py-4 rounded-full font-bold uppercase text-xs mb-4 hover:bg-[#D4E6D8] transition">

            Agendar Visita

          </button>

          <button 

             onClick={() => navigateTo('contact')}

             className="w-full border border-[#3A4F44] text-white py-4 rounded-full font-bold uppercase text-xs hover:bg-[#2F453B] transition"

          >

            Enviar Mensagem

          </button>

        </div>

      </div>

    </div>

  );



  const ContactView = () => (

    <div className={`min-h-screen ${Theme.bgMain} pt-32 px-6 flex items-center`}>

      <div className="container mx-auto max-w-2xl">

        <h2 className="text-4xl text-white font-bold uppercase mb-2">Contato</h2>

        <p className="text-[#8A9A90] mb-12">Estamos prontos para atender você.</p>

        

        <form className="space-y-6">

          <div className="grid grid-cols-2 gap-6">

            <input type="text" placeholder="NOME" className="w-full bg-transparent border-b border-[#3A4F44] py-4 text-white focus:outline-none focus:border-white transition placeholder-[#3A4F44] uppercase text-sm" />

            <input type="text" placeholder="TELEFONE" className="w-full bg-transparent border-b border-[#3A4F44] py-4 text-white focus:outline-none focus:border-white transition placeholder-[#3A4F44] uppercase text-sm" />

          </div>

          <input type="email" placeholder="E-MAIL" className="w-full bg-transparent border-b border-[#3A4F44] py-4 text-white focus:outline-none focus:border-white transition placeholder-[#3A4F44] uppercase text-sm" />

          <textarea placeholder="MENSAGEM" rows="4" className="w-full bg-transparent border-b border-[#3A4F44] py-4 text-white focus:outline-none focus:border-white transition placeholder-[#3A4F44] uppercase text-sm"></textarea>

          

          <button className="bg-white text-[#1B2B23] px-12 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition mt-8">

            Enviar

          </button>

        </form>

      </div>

    </div>

  );



  const AboutView = () => (

    <div className={`min-h-screen ${Theme.bgMain} pt-32 px-6`}>

      <div className="container mx-auto">

        <h2 className="text-5xl text-white font-bold uppercase mb-12">Sobre Nós</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="w-full grayscale contrast-125" alt="Profile" />

          <div>

            <p className="text-xl text-[#8A9A90] leading-relaxed mb-8">

              "Acreditamos que um imóvel não é apenas uma estrutura de concreto, mas o cenário onde a vida acontece."

            </p>

            <p className="text-white font-light">

              Especialistas no mercado de alto padrão, trazemos uma abordagem curatorial para o mercado imobiliário. Menos volume, mais qualidade. Menos burocracia, mais design e experiência.

            </p>

          </div>

        </div>

      </div>

    </div>

  );



  // Footer Gigante

  const Footer = () => (

    <footer className={`${Theme.bgMain} border-t border-[#2A3C32] py-20 px-6`}>

       <div className="container mx-auto flex flex-col items-center">

         <h1 className="text-[12vw] font-bold text-[#25382F] leading-none uppercase select-none">

           EVER GREEN

         </h1>

         <div className="flex gap-8 mt-12 text-xs uppercase tracking-widest text-[#8A9A90]">

           <a href="#" className="hover:text-white transition">Instagram</a>

           <a href="#" className="hover:text-white transition">LinkedIn</a>

           <a href="#" className="hover:text-white transition">WhatsApp</a>

         </div>

         <p className="mt-12 text-[#3A4F44] text-xs">© 2024 Ever Green Real Estate.</p>

       </div>

    </footer>

  );



  return (

    <div className={`${Theme.bgMain} min-h-screen text-white font-sans selection:bg-white selection:text-[#1B2B23]`}>

      <Header />

      

      <main>

        {view === 'home' && <HomeView />}

        {view === 'properties' && <PropertiesView />}

        {view === 'detail' && selectedProp && <PropertyDetailView />}

        {view === 'about' && <AboutView />}

        {view === 'contact' && <ContactView />}

      </main>



      <Footer />



      {/* WhatsApp Button (Minimalista) */}

      <a 

        href="#" 

        className="fixed bottom-8 right-8 bg-white text-[#1B2B23] p-4 rounded-full shadow-lg z-50 hover:scale-110 transition duration-300"

      >

        <MessageCircle className="w-6 h-6" />

      </a>

    </div>

  );

}


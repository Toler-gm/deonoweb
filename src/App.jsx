import background from "./assets/img/bg.png"
import background2 from "./assets/img/bg2.png"
import background3 from "./assets/img/bg3.svg"
import logo from "./assets/img/logo.svg"
import burgues from "./assets/img/burguer.svg"
import phono from "./assets/img/phono.png"
import checkcircle from "./assets/img/check-circle.svg"


import yt from "./assets/img/icon1.svg"
import ig from "./assets/img/icon2.svg"
import tk from "./assets/img/icon3.svg"
import fb from "./assets/img/icon4.svg"



// importación motion

import { motion } from 'framer-motion'
import styled from "@emotion/styled"

import { useState, useEffect, useRef } from "react"




// importaciones component
import Slider from "./components/slider"
import Cols from "./components/Cols"


import Spline from '@splinetool/react-spline';



function App() {
  const containerRef = useRef();
  const containerRefSection2 = useRef();
  const containerRefSection3 = useRef();
  const containerRefSection4 = useRef();

  const [isVisibleSection1, setIsVisibleSection1] = useState(false);
  const [isVisibleSection2, setIsVisibleSection2] = useState(false);
  const [isVisibleSection3, setIsVisibleSection3] = useState(false);
  const [isVisibleSection4, setIsVisibleSection4] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const containerTopSection1 = containerRef.current.offsetTop;
      const containerTopSection2 = containerRefSection2.current.offsetTop;
      const containerTopSection3 = containerRefSection3.current.offsetTop;
      const containerTopSection4 = containerRefSection4.current.offsetTop;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const triggerPointSection1 = containerTopSection1 - windowHeight / 2;
      const triggerPointSection2 = containerTopSection2 - windowHeight / 2;
      const triggerPointSection3 = containerTopSection3 - windowHeight / 2;
      const triggerPointSection4 = containerTopSection4 - windowHeight / 2;


      setIsVisibleSection1(scrollY > triggerPointSection1);
      setIsVisibleSection2(scrollY > triggerPointSection2);
      setIsVisibleSection3(scrollY > triggerPointSection3);
      setIsVisibleSection4(scrollY > triggerPointSection4);

      // Update other state variables for additional sections if needed
    };
    // Agrega el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // degradado motion

  const StyledSection = styled.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

  const StyledSection2 = styled.section`
position: relative;
overflow: hidden;
width: 100%;
height: 100%;
`;



  const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${background2}) center/cover;
  background-size: 30%;
  background-repeat:no-repeat;
  filter:  blur(180.39999389648438px); 
  z-index: -1;
`;

  const BackgroundContainer2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${background3}) center/cover;
  background-size: 40%;
  background-repeat:no-repeat;
  filter:  blur(180.39999389648438px); 
  z-index: -1;
`;




  return (
    <>



      <header className="max-w-6xl m-auto p-5" >
        <nav className="flex justify-between items-center py-4" >
          <div className="flex items-center gap-2" >
            <img style={{ width: 40, }} src={logo} alt="" />
            <span className="text-3xl text-white font-bold">DEONE</span>
          </div>


        </nav>
      </header>
      <div style={{ backgroundImage: `url(${background})`, width: "100%", backgroundRepeat: "no-repeat", }} className="flex max-w-6xl m-auto relative h-full " >

        <Cols />


        <div className="absolute top-2/4 right-2/4 -translate-y-2/4 translate-x-1/2 text-center text-white z-10">
          <h2 className="mb-5 font-black text-7xl  md:text-9xl">
            DEONE
          </h2>
          <p className="mb-5 text-4xl md:text-3xl stroke-white text-transparent font-black leading-8" style={{ WebkitTextStroke: "1px white" }}>
            AGENCIA DE MARKETING DIGITAL
          </p>
          <button className="md:py-3 md:px-10 py-2 px-7  border border-white font-bold bg-black shadow-md ease-out duration-200 hover:shadow-white "  >CONTACTAR</button>
          <ul className="flex justify-center gap-3 m-5" >
            <li><a href=""><img className=" w-9 md:w-full ease-linear duration-100 hover:scale-110" src={yt} alt="" /></a></li>
            <li><a href="https://www.instagram.com/deone.pe/"><img className=" w-9 md:w-full ease-linear duration-100 hover:scale-110" src={ig} alt="" /></a></li>
            <li><a href=""><img className=" w-9 md:w-full ease-linear duration-100 hover:scale-110" src={tk} alt="" /></a></li>
            <li><a href=""><img className=" w-9 md:w-full ease-linear duration-100 hover:scale-110" src={fb} alt="" /></a></li>
          </ul>
        </div>


      </div>
      <main className="p-5">


        <section className="md:flex flex flex-col md:flex-row gap-10 items-center max-w-6xl m-auto " ref={containerRef}>
          <div className="w-full md:text-left text-center" >
            <motion.h3
              className="md:text-7xl text-6xl text-white font-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisibleSection1 ? 1 : 0, y: isVisibleSection1 ? 0 : 50 }}
              transition={{ duration: 2 }}
            >
              REDISEÑO DE <br />
              <motion.span
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisibleSection1 ? 1 : 0 }}
                transition={{ duration: 2 }}
              >
                MARCA
              </motion.span>
              Y SITIOS <br /> WEB
            </motion.h3>
            <motion.p
              className="text-white mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisibleSection1 ? 1 : 0, y: isVisibleSection1 ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Velocidad y calidad en cada servicio! Tu socio digital para hacer crecer tu negocio. Páginas web con estilo y estrategias que marcan la diferencia. Entra{' '}
              <span className="font-black">de one</span> y lleva tu éxito al siguiente nivel.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20, }}
            animate={{ opacity: isVisibleSection1 ? 1 : 0, y: isVisibleSection1 ? 0 : 20, }}
            className="w-full flex md:justify-end justify-center"
          >

            <motion.img
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: isVisibleSection1 ? 1 : 0, x: isVisibleSection1 ? 0 : -50 }}
              transition={{ duration: 1, }}
              className="z-30 md:block "
              src={phono} alt=""
            />


          </motion.div>
        </section>

        {/* section 2 */}

        <StyledSection
          ref={containerRefSection2}
          className="max-w-6xl m-auto"
        >
          <BackgroundContainer />
          <div className="z-20 text-center text-white">
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisibleSection2 ? 1 : 0, y: isVisibleSection2 ? 0 : 50 }}
              transition={{ duration: 1 }}
              className="mt-20 md:text-4xl md:text-right text-center text-2xl  font-bold"
            >
              TRES RAZONES CLAVES POR LAS <br /> CUALES TENER UNA PÁGINA WEB <br /> ES IMPORTANTE
            </motion.h3>
            <div className="mt-20 flex md:flex-row flex-col items-baseline  gap-20 mx-5 ">
              <motion.div
                className="w-full flex flex-col justify-center items-center gap-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisibleSection2 ? 1 : 0, y: isVisibleSection2 ? 0 : 50 }}
                transition={{ duration: 1, }}
              >
                <span className=" text-7xl font-black italic text-center">1</span>
                <h2 className=" text-2xl font-bold text-center" >Visibilidad <br /> Continua</h2>
                <p className="text-center font-light">Una página web te brinda visibilidad las 24/7, permitiendo a clientes encontrar información clave en cualquier momento. Esto amplía tu alcance y facilita la conexión con audiencias globales.</p>
              </motion.div>
              <motion.div className="w-full flex flex-col justify-center items-center gap-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisibleSection2 ? 1 : 0, y: isVisibleSection2 ? 0 : 50 }}
                transition={{ duration: 1.5, }}
              >
                <span className=" text-7xl font-black italic text-center">2</span>
                <h2 className=" text-2xl font-bold text-center" >Credibilidad<br /> Instantánea</h2>
                <p className="text-center font-light">Tu página web actúa como un escaparate digital, transmitiendo profesionalismo y construyendo confianza entre los visitantes. Mostrar productos, servicios y testimonios refuerza la credibilidad de tu negocio.</p>
              </motion.div>
              <motion.div className="w-full flex flex-col justify-center items-center gap-5"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisibleSection2 ? 1 : 0, y: isVisibleSection2 ? 0 : 50 }}
                transition={{ duration: 2, }}
              >
                <span className=" text-7xl font-black italic text-center">3</span>
                <h2 className=" text-2xl font-bold text-center" >Marketing<br />Eficiente</h2>
                <p className="text-center font-light">La presencia en línea no solo es esencial, sino que también es tu herramienta de marketing más eficiente. Desde estrategias de SEO hasta campañas de publicidad, tu página web es clave para atraer y convertir clientes, expandiendo así tu impacto globalmente.</p>
              </motion.div>
            </div>
          </div>

        </StyledSection>

        {/* section3 */}

        <section className=" max-w-6xl m-auto mt-20" ref={containerRefSection3}>

          <div>
            <motion.h3
              className=" md:text-7xl text-5xl font-black text-center mb-20"
              style={{ WebkitTextStroke: "1px white", color: "transparent", }}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: isVisibleSection3 ? 1 : 0, y: isVisibleSection3 ? 0 : 50 }}
              transition={{ duration: 1, }}
            >
              PROYECTOS
            </motion.h3>


            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: -50, }}
              animate={{ opacity: isVisibleSection3 ? 1 : 0, y: isVisibleSection3 ? 0 : 50 }}
              transition={{ duration: 1, }}
            >
              <Slider />
            </motion.div>
          </div>


        </section>
        <StyledSection2 className="max-w-6xl m-auto mt-20 " ref={containerRefSection4} >
          <BackgroundContainer2 />
          <div className="">
            <motion.h3
              className=" text-5xl font-black text-center"
              style={{ WebkitTextStroke: "1px white", color: "transparent", }}
              initial={{ opacity: 0, }}
              animate={{ opacity: isVisibleSection4 ? 1 : 0, x: isVisibleSection4 ? 0 : 50 }}
              transition={{ duration: 1, }}
            >
              PRECIOS
            </motion.h3>
            <motion.p
              className="text-center mt-3 text-2xl"
              initial={{ opacity: 1, }}
              animate={{ opacity: isVisibleSection4 ? 1 : 0, y: isVisibleSection4 ? 0 : 50 }}
              transition={{ duration: 1, }}
            >
              POR LA PRIMERA COMPRA DE NUESTROS SERVICIOS <br />
              OBTIENES UN <span className=" text-">DESCUENTO</span> ESPECIAL
              <span className="font-black" >DE ONE</span>
            </motion.p>
          </div>
          <div className="mt-20  flex flex-col md:flex-row item-center gap-12  md:mx-20 m-0" >

            <motion.div
              className="rounded-3xl p-10 flex flex-col justify-around gap-5"
              style={{ background: "rgba(255, 250, 250, 0.12)", }}
              initial={{ opacity: 0, }}
              animate={{ opacity: isVisibleSection4 ? 1 : 0, x: isVisibleSection4 ? 0 : 50 }}
              transition={{ duration: 1, delay: .4, }}
            >
              <span style={{ WebkitTextStroke: "1px white", }} className="font-black text-transparent text-2xl" >BÁSICO</span>
              <div className="flex items-end gap-1">
                <p className="font-black text-4xl">S/459</p>
                <span className=" font-black text-xl">MENSUAL</span>
              </div>
              <p>Creación de Página Web Básica, un sitio web sencillo que presente la información esencial sobre el negocio o persona.</p>
              <div>
                <ul className="flex flex-col gap-3  " >
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">DOMINIO Y HOSTING</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">CERTIFICADO SSL</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">RESPOSIVE DESING</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">REDES SOCIALES BÁSICO</span></li>
                </ul>
              </div>
              <button className="py-1 px-4 bg-white text-black rounded-full font-bold inline-block w-fit" >OBTENER</button>
            </motion.div>

            <motion.div
              className="rounded-3xl p-10 flex flex-col justify-around gap-5"
              style={{ background: "rgba(255, 250, 250, 0.12)", }}
              initial={{ opacity: 0, }}
              animate={{ opacity: isVisibleSection4 ? 1 : 0, x: isVisibleSection4 ? 0 : 50 }}
              transition={{ duration: 1.5, delay: .8, }}
            >
              <div className="flex items-center gap-2">
                <span style={{ WebkitTextStroke: "1px white", }} className="font-black text-transparent text-2xl" >ESTANDAR</span>
                <span style={{ border: "1px solid white", }} className=" text-xs rounded-full px-3">POPULAR</span>
              </div>
              <div className="flex items-end gap-1">
                <p className="font-black text-4xl">S/590</p>
                <span className=" font-black text-xl">MENSUAL</span>
              </div>
              <p>Página Web Personalizada, un sitio web más completo y personalizado con características adicionales.</p>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">DOMINIO Y HOSTING</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">CERTIFICADO SSL</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">RESPOSIVE DESING</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">REDES SOCIALES ESTANDAR</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">DISEÑO PERSONALIZADO</span></li>
                </ul>
              </div>
              <button className="py-1 px-4 bg-white text-black rounded-full font-bold inline-block w-fit" >OBTENER</button>
            </motion.div>

            <motion.div
              className="rounded-3xl p-10 flex flex-col justify-around gap-5"
              style={{ background: "rgba(255, 250, 250, 0.12)", }}
              initial={{ opacity: 0, }}
              animate={{ opacity: isVisibleSection4 ? 1 : 0, x: isVisibleSection4 ? 0 : 50 }}
              transition={{ duration: 2, delay: 1.2, }}
            >
              <span style={{ WebkitTextStroke: "1px white", }} className="font-black text-transparent text-2xl" >PREMIUM</span>
              <div className="flex items-end gap-1">
                <p className="font-black text-4xl">S/980</p>
                <span className=" font-black text-xl">MENSUAL</span>
              </div>
              <p>Página Web Avanzada con Funcionalidades Especiales, Inclusión de funciones avanzadas como formularios interactivos, chat en línea.</p>
              <div>
                <ul className="flex flex-col gap-3">
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">DOMINIO Y HOSTING</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">CERTIFICADO SSL</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">RESPOSIVE DESIGN</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">REDES SOCIALES PREMIUM</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">DISEÑO PERSONALIZADO PREMIUM</span></li>
                  <li className="flex gap-1"><img src={checkcircle} alt="" /><span className=" text-sm font-light">3D</span></li>
                </ul>
              </div>
              <button className="py-1 px-4 bg-white text-black rounded-full font-bold inline-block w-fit" >OBTENER</button>
            </motion.div>

          </div>

        </StyledSection2>
      </main>
      <footer className="max-w-6xl m-auto">
        <div className="flex flex-col md:flex-row md:m-20 m-0 gap-20 item-center">
          <div className="w-full flex flex-col gap-10">
            <div className="md:text-left text-center">
              <h4 className=" text-5xl font-black">NOSOTROS</h4>
              <p className=" text-xl font-light py-10">Pequeña empresa de marketing, hicimos esta mini agencia para vuestras empresas, con nosotros tus sitios web y tu presencia en línea se vera muy Profesional.</p>
            </div>
            <div className="flex flex-col gap-2 md:items-start items-center">
              <h4 className=" text-5xl font-black">REDES</h4>
              <ul className="flex gap-3" >
                <li><a href=""><img src={yt} alt="" /></a></li>
                <li><a href=""><img src={ig} alt="" /></a></li>
                <li><a href=""><img src={tk} alt="" /></a></li>
                <li><a href=""><img src={fb} alt="" /></a></li>
              </ul>
            </div>
          </div>
          <div className="w-full md:p-0 p-7">
            <h5 className="text-2xl font-bold mb-3">CONTACTA AHORA</h5>
            <form action="">
              <div className="flex flex-col gap-3">
                <label htmlFor="">Nombres</label>
                <input className=" border-b-2 border-b-white bg-transparent py-2 outline-none" type="text" />
                <label htmlFor="">Celular</label>
                <input className=" border-b-2 border-b-white bg-transparent py-2 outline-none" type="text" />
                <label htmlFor="">Mensaje</label>
                <textarea className=" bg-slate-900 h-32 resize-none rounded-md" name="" id="" cols="30" rows="10"></textarea>
                <button className="py-2 px-5 mt-5 rounded-full md:w-fit w-full bg-white text-black font-black" >Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

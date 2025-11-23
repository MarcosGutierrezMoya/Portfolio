import AboutMe from "./_componentes/AboutMe";
import Questions from "./_componentes/Questions";
import Nav from "./_componentes/Nav";

export default function Home() {

  return (
    <div>
      <Nav/>
      <main className="flex flex-col items-center justify-center h-screen md:max-sm:px-0 w-full">
        <section className="h-full flex flex-col justify-center items-center text-green-500">
          <h1 className="animate-showUp text-center text-[2rem] md:max-sm:text-[4rem]">Bienvenido al mundo de la lógica</h1>
          <h3 className="animate-showUp text-center text-[1.5srem] md:max-sm:text-[2rem]">¿Estás preparado para probar el poder de tu lógica?</h3>
          <p className="animate-showUp text-center text-[0.5srem] md:max-sm:text-[1rem]" >Atrevete a realizar este pequeño test e intenta conseguir la mejor puntuación</p>
          <Questions />
        </section>
        <div className="h-2 bg-green-500 w-full text-green-500 m-0"></div>
      </main>
      <AboutMe />
    </div>
  )
}

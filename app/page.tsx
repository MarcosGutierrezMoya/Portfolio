import AboutMe from "./_componentes/AboutMe";
import Questions from "./_componentes/Questions";
import Nav from "./_componentes/Nav";

export default function Home() {

  return (
    <div>
      <Nav/>
      <main className="flex flex-col items-center justify-start h-screen">
        <section className="h-full flex flex-col justify-center items-center text-green-500">
          <h1 className="animate-showUp text-[4rem]">Bienvenido al mundo de la lógica</h1>
          <h3 className="animate-showUp text-[2rem]">¿Estás preparado para probar el poder de tu lógica?</h3>
          <p className="animate-showUp" >Atrevete a realizar este pequeño test e intenta conseguir la mejor puntuación</p>
          <Questions />
        </section>
        <div className="h-2 bg-green-500 w-screen text-green-500"></div>
      </main>
      <AboutMe />
    </div>
  )
}

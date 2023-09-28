import AboutMe from "./_componentes/AboutMe";
import Questions from "./_componentes/Questions";


export default function Home() {

  return (
    <main className="flex flex-col items-center justify-start gap-6 p-4 text-green-500">
      <section className="h-[36rem] flex flex-col justify-between items-center">
        <h1 className="animate-showUp text-[4rem]">Bienvenido al mundo de la lógica</h1>
        <Questions />
        <div className="h-2 bg-green-500 w-screen"></div>
      </section>
      <AboutMe />
    </main>
  )
}

import Nav from "../_componentes/Nav";
import Projects from "../_componentes/web/Projects";



export default function Web() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 text-green-500">
      <Nav/>
      <Projects/>
    </main>
  )
}
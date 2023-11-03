import Nav from "../_componentes/Nav";
import GamesVideos from "../_componentes/videogames/GamesVideos";


export default function Videogames() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 gap-12 text-green-500">
      <Nav/>
      <GamesVideos />
    </main>
  )
}
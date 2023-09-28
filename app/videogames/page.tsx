import GamesVideos from "../_componentes/videogames/GamesVideos";


export default function Videogames() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-start p-4 bg-gradient-to-b from-black to-sky-800 text-green-500">
        <h1>Videogames</h1>
        <GamesVideos />
      </main>
    )
  }
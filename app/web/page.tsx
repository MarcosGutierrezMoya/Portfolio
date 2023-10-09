import Link from "next/link";
import Nav from "../_componentes/Nav";

export default function Web() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 text-green-500">
      <Nav webColor={true} gameColor={false} />
      <Link href={`/web/CssProjects`} className={`bg-cssProyects w-[50%] h-[40vh] bg-no-repeat`} ></Link>
    </main>
  )
}
import { FaAngleDoubleDown } from "react-icons/fa";
import { Countdown } from "./Countdown";

export function Home() {
  return (
    <section className="text-off relative flex h-screen w-screen max-w-full flex-col items-center justify-center gap-5 text-center select-none">
      <p className="mt-20 text-4xl md:text-5xl">Chá Bar</p>
      <h1 className="font-detail text-7xl md:text-9xl">
        Lara <span className="text-brown">&</span> Heitor
      </h1>
      <p className="mb-5 text-3xl md:text-4xl">01 de agosto de 2026</p>
      <Countdown />
      <a href="#localizacao" className="mt-5">
        <FaAngleDoubleDown className="size-6 animate-bounce" />
      </a>
    </section>
  );
}

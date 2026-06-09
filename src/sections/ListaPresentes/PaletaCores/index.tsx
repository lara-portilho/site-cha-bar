import madeira from "@assets/madeira.jpg";

export function PaletaCores() {
  return (
    <div className="mb-8 flex flex-col items-center justify-center gap-5">
      <p>
        Para que a nossa casa fique ainda mais harmoniosa, nossa paleta de cores
        preferida é:
      </p>
      <div className="grid grid-cols-[5rem_5rem] gap-4 md:grid-cols-[5rem_5rem_5rem_5rem]">
        <div>
          <div className="border-brown size-20 rounded-lg border-2 bg-white" />
          <p className="text-sm">Branco</p>
        </div>
        <div>
          <div className="border-brown size-20 rounded-lg border-2 bg-black" />
          <p className="text-sm">Preto</p>
        </div>
        <div>
          <div className="border-brown size-20 rounded-lg border-2 bg-gray-600" />
          <p className="text-sm">Cinza</p>
        </div>
        <div>
          <img
            src={madeira}
            alt="Madeira"
            className="border-brown size-20 rounded-lg border-2"
          />
          <p className="text-center text-sm">Madeira</p>
        </div>
      </div>
    </div>
  );
}

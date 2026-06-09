import { Button } from "@components/Button";
import { useModalContext } from "@contexts/ModalContext";
import type { Presente } from "@entities/Presente";

export function CardPresente(presente: Presente) {
  const { setOpen, setPresente } = useModalContext();

  function onSelectPresente() {
    setOpen(true);
    setPresente(presente);
  }

  return (
    <div className="flex w-32 shrink-0 flex-col items-center justify-between rounded-lg bg-white px-2 py-3 shadow-lg md:w-56">
      <div className="relative size-20 md:size-44">
        <img
          src={presente.imagem}
          alt={presente.nome}
          className="size-full rounded-lg"
        />
      </div>
      <span className="font-bold">{presente.nome}</span>
      <div className="flex flex-col text-sm">
        <Button onClick={onSelectPresente} disabled={presente.comprado}>
          {presente.comprado ? "Indisponível" : "Marcar como comprado"}
        </Button>
      </div>
    </div>
  );
}

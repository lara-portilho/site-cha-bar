import { Button } from "@components/Button";
import { useModalContext } from "@contexts/ModalContext";
import type { Presente } from "@entities/Presente";
import cn from "classnames";

export function CardPresente(presente: Presente) {
  const { setOpen, setPresente } = useModalContext();
  const esgotado = presente.restantes === 0;

  function onSelectPresente() {
    setOpen(true);
    setPresente(presente);
  }

  return (
    <div className="flex w-32 shrink-0 flex-col items-center justify-between rounded-lg bg-white px-2 py-3 shadow-lg md:w-56">
      <img
        src={`src/assets/presentes/${presente.imagem}`}
        alt={presente.nome}
        className={cn(
          "aspect-square size-20 rounded-lg object-contain md:size-44",
          esgotado && "opacity-40",
        )}
      />
      <span className="font-bold">{presente.nome}</span>
      {!!presente.restantes && (
        <span className="text-sm">
          Restante: {presente.restantes.toString()} unidade
          {presente.restantes > 1 && "s"}
        </span>
      )}
      <div className="flex flex-col text-sm">
        <Button onClick={onSelectPresente} disabled={esgotado}>
          {esgotado ? "Esgotado" : "Marcar como comprado"}
        </Button>
      </div>
    </div>
  );
}

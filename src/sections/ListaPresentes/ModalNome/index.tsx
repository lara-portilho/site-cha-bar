import { db } from "@app/firebase";
import { Button } from "@components/Button";
import { useModalContext } from "@contexts/ModalContext";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import Modal from "react-modal";
import { toast } from "react-toastify";

type ModalNomeProps = {
  onMarcarPresente(id: string, comprador: string): void;
};

export function ModalNome({ onMarcarPresente }: ModalNomeProps) {
  const { presente, open, setPresente, setOpen } = useModalContext();
  const [nome, setNome] = useState("");

  async function onSubmit() {
    try {
      if (!presente) throw new Error("Não existe presente selecionado!");
      const ref = doc(db, "presentes-chabar", presente.id);
      await updateDoc(ref, {
        restantes: presente.restantes - 1,
        compradoPor: [...presente.compradoPor, nome],
      });
      setOpen(false);
      setNome("");
      onMarcarPresente(presente.id, nome);
      toast.success("Presente marcado com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Houve algum ao salvar a marcação!");
    } finally {
      setPresente();
    }
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      bodyOpenClassName="overflow-hidden"
      overlayClassName="fixed inset-0 bg-black/50 flex items-center justify-center"
      className="bg-off relative mx-2 rounded-2xl p-6"
    >
      <button
        className="absolute top-2 right-2 cursor-pointer rounded-full p-2 transition hover:bg-black/10"
        onClick={() => setOpen(false)}
      >
        <FaX className="size-3.5" />
      </button>
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="font-detail text-brown text-6xl font-bold">Obrigado!</h1>
        <span>Por favor, coloque seu nome para que possamos te agradecer!</span>
        <span className="font-bold">Presente: {presente?.nome}</span>
        <input
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="border-brown w-64 border-b outline-none"
          placeholder="Seu nome aqui"
        />
        <Button onClick={onSubmit} className="self-end" disabled={!nome}>
          Confirmar
        </Button>
      </div>
    </Modal>
  );
}

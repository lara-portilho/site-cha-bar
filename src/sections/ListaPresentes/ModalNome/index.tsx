import { Button } from "@components/Button";
import { useModalContext } from "@contexts/ModalContext";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import Modal from "react-modal";
import { toast } from "react-toastify";

export function ModalNome() {
  const { presente, open, setPresente, setOpen } = useModalContext();
  const [nome, setNome] = useState("");

  function onSubmit() {
    try {
      console.log(presente);
      setOpen(false);
      setNome("");
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

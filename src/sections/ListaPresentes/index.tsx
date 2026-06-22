import { db } from "@app/firebase";
import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
import type { Presente } from "@entities/Presente";
import { useWindowDimensions } from "@hooks/useWindowDimensions";
import { normalize } from "@utils/normalize";
import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CardPresente } from "./CardPresente";
import { ModalNome } from "./ModalNome";
import { PaletaCores } from "./PaletaCores";

export function ListaPresentes() {
  const [filterEsgotado, setFilterEsgotado] = useState<boolean>(false);
  const [filterTexto, setFilterTexto] = useState<string>("");
  const [presentes, setPresentes] = useState<Presente[]>([]);
  const { height, width } = useWindowDimensions();
  const isHorizontal = width > height;

  function setPresenteComprado(id: string, comprador: string) {
    setPresentes((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;
        return {
          ...p,
          restantes: p.restantes - 1,
          compradoPor: [...p.compradoPor, comprador],
        };
      }),
    );
  }

  function filterPresente(presente: Presente) {
    const disponivel = presente.restantes > 0;
    const filtrado = normalize(presente.nome).includes(normalize(filterTexto));
    if (filterEsgotado && filterTexto !== "") return disponivel && filtrado;
    if (filterEsgotado) return disponivel;
    if (filterTexto !== "") return filtrado;
    return true;
  }

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "presentes-chabar"));
      const querySnapshot = await getDocs(q);
      setPresentes(
        querySnapshot.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id }) as Presente,
        ),
      );
    })();
  }, []);

  return (
    <Section id="lista-presentes">
      <SectionTitle>Lista de Presentes</SectionTitle>
      <PaletaCores />
      <label className="mt-2 flex items-center justify-center gap-2">
        {isHorizontal ? (
          <span>Pesquisar por:</span>
        ) : (
          <FaSearch className="size-4" />
        )}
        <input
          value={filterTexto}
          onChange={(e) => setFilterTexto(e.target.value)}
          className="border-brown border-b outline-none"
          placeholder="Nome do produto"
        />
      </label>
      <label className="mt-2 flex cursor-pointer items-center justify-center gap-2">
        <input
          type="checkbox"
          checked={filterEsgotado}
          onChange={() => setFilterEsgotado((prev) => !prev)}
        />
        <span>Filtrar por presentes disponíveis</span>
      </label>
      <div className="mb-5 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] justify-items-center gap-5 px-2 py-4 md:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
        {presentes
          .filter(filterPresente)
          .sort((a, b) => a.nome.localeCompare(b.nome))
          .map((presente) => (
            <CardPresente {...presente} key={presente.id} />
          ))}
      </div>
      <ModalNome onMarcarPresente={setPresenteComprado} />
    </Section>
  );
}

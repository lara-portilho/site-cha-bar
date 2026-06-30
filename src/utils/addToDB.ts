import { db } from "@app/firebase";
import type { Presente } from "@entities/Presente";
import {
  addDoc,
  collection,
  DocumentReference,
  type DocumentData,
} from "firebase/firestore";

const PRESENTES: Omit<Presente, "id">[] = [
  {
    compradoPor: [],
    imagem: "porta-guardanapo.webp",
    nome: "Porta guardanapo",
    restantes: 1,
  },
  {
    compradoPor: [],
    imagem: "batedeira.webp",
    nome: "Batedeira",
    restantes: 1,
  },
  {
    compradoPor: [],
    imagem: "frigideira-antiaderente.webp",
    nome: "Frigideira antiaderente",
    restantes: 1,
  },
  {
    compradoPor: [],
    imagem: "processador.webp",
    nome: "Processador",
    restantes: 1,
  },
  {
    compradoPor: [],
    imagem: "ralador.webp",
    nome: "Ralador",
    restantes: 1,
  },
];

export async function addToDB() {
  const promises: Promise<DocumentReference<DocumentData, DocumentData>>[] = [];
  for (const presente of PRESENTES) {
    promises.push(addDoc(collection(db, "presentes-chabar"), presente));
  }

  await Promise.all(promises);
}

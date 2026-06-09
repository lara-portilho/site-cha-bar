import { Section } from "@components/Section";
import { SectionTitle } from "@components/SectionTitle";
// import type { Presente } from "@entities/Presente";
// import { useWindowDimensions } from "@hooks/useWindowDimensions";
// import { normalize } from "@utils/normalize";
// import { useMemo, useState } from "react";

// const mocks: Presente[] = [
//   {
//     id: "01KTKSP1NTRAFAFN9EZRGK08V2",
//     nome: "Tapete",
//     imagem: "http://dummyimage.com/125x131.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Jonah",
//   },
//   {
//     id: "01KTKSP1NVZKXNNNK9TZ6T05YT",
//     nome: "Pano de chão",
//     imagem: "http://dummyimage.com/215x264.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Cort",
//   },
//   {
//     id: "01KTKSP1NWXVV0QJHGQHAC6HFJ",
//     nome: "Forro de mesa",
//     imagem: "http://dummyimage.com/142x253.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Concettina",
//   },
//   {
//     id: "01KTKSP1NW0KHAW1EVQEVNC4VP",
//     nome: "Jogo de lençol",
//     imagem: "http://dummyimage.com/110x215.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Melisenda",
//   },
//   {
//     id: "01KTKSP1NXX5HWC1ZNFKGKH9WM",
//     nome: "Cobre leito",
//     imagem: "http://dummyimage.com/215x284.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Harper",
//   },
//   {
//     id: "01KTKSP1NX8B3MXEWTE7Z1XFYD",
//     nome: "Travesseiro",
//     imagem: "http://dummyimage.com/144x251.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Gaven",
//   },
//   {
//     id: "01KTKSP1NYRPSQS9Q7XB9EP85S",
//     nome: "",
//     imagem: "http://dummyimage.com/182x205.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Karla",
//   },
//   {
//     id: "01KTKSP1NYK63N9YNHXKP3MCEM",
//     nome: "Léonie",
//     imagem: "http://dummyimage.com/211x254.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Doralynne",
//   },
//   {
//     id: "01KTKSP1NZBDP1JWRTZR7494WH",
//     nome: "Marie-josée",
//     imagem: "http://dummyimage.com/284x299.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Rudolph",
//   },
//   {
//     id: "01KTKSP1NZ50XEXQ0GRNMVVEPY",
//     nome: "Miléna",
//     imagem: "http://dummyimage.com/112x298.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Isabella",
//   },
//   {
//     id: "01KTKSP1P0SPDTCYMBR0ZNQNFY",
//     nome: "Anaëlle",
//     imagem: "http://dummyimage.com/249x172.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Jerome",
//   },
//   {
//     id: "01KTKSP1P0Z8VV9TEV37KTM137",
//     nome: "Réjane",
//     imagem: "http://dummyimage.com/229x254.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Delmer",
//   },
//   {
//     id: "01KTKSP1P1GF1721ENVTTNSNA3",
//     nome: "Maëlyss",
//     imagem: "http://dummyimage.com/296x215.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Farlee",
//   },
//   {
//     id: "01KTKSP1P1NN3JXZHWX5WSZDNH",
//     nome: "Bérangère",
//     imagem: "http://dummyimage.com/172x232.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Claudio",
//   },
//   {
//     id: "01KTKSP1P2B2VB0ZXMS2K1NGPE",
//     nome: "Mahélie",
//     imagem: "http://dummyimage.com/286x156.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Wilfred",
//   },
//   {
//     id: "01KTKSP1P39S0EBEHF0AWG92AH",
//     nome: "Lén",
//     imagem: "http://dummyimage.com/263x275.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Lula",
//   },
//   {
//     id: "01KTKSP1P3FME3PHKW57MBA4RP",
//     nome: "Cécile",
//     imagem: "http://dummyimage.com/210x267.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Coriss",
//   },
//   {
//     id: "01KTKSP1P3A32BDG8M2P1Y35G9",
//     nome: "Edmée",
//     imagem: "http://dummyimage.com/124x164.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Pip",
//   },
//   {
//     id: "01KTKSP1P4JCTKNRYBQAEEXDDQ",
//     nome: "Yénora",
//     imagem: "http://dummyimage.com/252x165.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Gabriell",
//   },
//   {
//     id: "01KTKSP1P5JEPYBGJAAQW8EKEA",
//     nome: "Cunégonde",
//     imagem: "http://dummyimage.com/234x151.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Tonnie",
//   },
//   {
//     id: "01KTKSP1P5J7EPTHSSG9D22JZ2",
//     nome: "Bérénice",
//     imagem: "http://dummyimage.com/217x112.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Boyd",
//   },
//   {
//     id: "01KTKSP1P6F65GNGHPJCKS6EDK",
//     nome: "Océanne",
//     imagem: "http://dummyimage.com/181x282.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Evan",
//   },
//   {
//     id: "01KTKSP1P6Q9WKFPEGCK7AFWS4",
//     nome: "Kuí",
//     imagem: "http://dummyimage.com/223x158.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Celestine",
//   },
//   {
//     id: "01KTKSP1P7FQ87X2XESE3MGS1Y",
//     nome: "Mélanie",
//     imagem: "http://dummyimage.com/155x223.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Quinton",
//   },
//   {
//     id: "01KTKSP1Q1RSFRDB2R6E5556K3",
//     nome: "Mélinda",
//     imagem: "http://dummyimage.com/115x194.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Kurt",
//   },
//   {
//     id: "01KTKSP1Q2TP2Q3PCGW1C25VFX",
//     nome: "Miléna",
//     imagem: "http://dummyimage.com/176x101.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Putnam",
//   },
//   {
//     id: "01KTKSP1Q30S53NGQ5JRVWVDA1",
//     nome: "Ruì",
//     imagem: "http://dummyimage.com/298x201.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Kendal",
//   },
//   {
//     id: "01KTKSP1Q4M383J8M781K8AKHW",
//     nome: "Mélodie",
//     imagem: "http://dummyimage.com/130x247.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Lorianne",
//   },
//   {
//     id: "01KTKSP1Q49RX0AWCYB9J902QE",
//     nome: "Garçon",
//     imagem: "http://dummyimage.com/220x287.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Ambrosi",
//   },
//   {
//     id: "01KTKSP1Q5JCF4717W75WHHW25",
//     nome: "Torbjörn",
//     imagem: "http://dummyimage.com/278x221.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Ulla",
//   },
//   {
//     id: "01KTKSP1Q5ACKWTVC3QGW42ZPG",
//     nome: "Åslög",
//     imagem: "http://dummyimage.com/200x195.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Esma",
//   },
//   {
//     id: "01KTKSP1Q6RNRTWWSXQ5G620JC",
//     nome: "Cinéma",
//     imagem: "http://dummyimage.com/256x159.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Rayna",
//   },
//   {
//     id: "01KTKSP1Q72WW42SC6N0D2CD45",
//     nome: "Gösta",
//     imagem: "http://dummyimage.com/151x163.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Jenica",
//   },
//   {
//     id: "01KTKSP1Q7RNSRPPQSQ2VS71M9",
//     nome: "Gaëlle",
//     imagem: "http://dummyimage.com/289x246.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Vassily",
//   },
//   {
//     id: "01KTKSP1Q8AZXJ7QNQ98DXB8SF",
//     nome: "Estée",
//     imagem: "http://dummyimage.com/236x145.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Deloria",
//   },
//   {
//     id: "01KTKSP1Q8H1M7FPKZ27GTBFQJ",
//     nome: "Vénus",
//     imagem: "http://dummyimage.com/258x267.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Gloriane",
//   },
//   {
//     id: "01KTKSP1Q96FDKS56JE6EXFAM2",
//     nome: "Aimée",
//     imagem: "http://dummyimage.com/118x123.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Cull",
//   },
//   {
//     id: "01KTKSP1Q95AT1BEYG9ABXVY1W",
//     nome: "Annotés",
//     imagem: "http://dummyimage.com/157x272.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Artur",
//   },
//   {
//     id: "01KTKSP1QARSJGW79Z4S7B7THD",
//     nome: "Nélie",
//     imagem: "http://dummyimage.com/120x144.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Stevena",
//   },
//   {
//     id: "01KTKSP1QA5M57Y7NXXEP8N86T",
//     nome: "Illustrée",
//     imagem: "http://dummyimage.com/232x176.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Hannie",
//   },
//   {
//     id: "01KTKSP1QBD2YX5Y4KDNKKMRBY",
//     nome: "Styrbjörn",
//     imagem: "http://dummyimage.com/154x164.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Deborah",
//   },
//   {
//     id: "01KTKSP1QCYRPQT4272YSC81DF",
//     nome: "Östen",
//     imagem: "http://dummyimage.com/283x233.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Kendrick",
//   },
//   {
//     id: "01KTKSP1QD5ZAH3M1KW1JBZ5BB",
//     nome: "Marlène",
//     imagem: "http://dummyimage.com/232x181.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Ludvig",
//   },
//   {
//     id: "01KTKSP1QDSQVSEDSBTDXVRRM5",
//     nome: "Séréna",
//     imagem: "http://dummyimage.com/240x148.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Elfrieda",
//   },
//   {
//     id: "01KTKSP1QEWH0A32FG7RAW71HJ",
//     nome: "Lài",
//     imagem: "http://dummyimage.com/146x170.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Roselle",
//   },
//   {
//     id: "01KTKSP1QE5T24D3Y6SBW26WBF",
//     nome: "Léonore",
//     imagem: "http://dummyimage.com/235x103.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Jacquelyn",
//   },
//   {
//     id: "01KTKSP1QFQS2PB4EABXY67PV3",
//     nome: "Aurélie",
//     imagem: "http://dummyimage.com/228x149.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Mercie",
//   },
//   {
//     id: "01KTKSP1QFMCGAE5JX24K4R5A6",
//     nome: "Séverine",
//     imagem: "http://dummyimage.com/226x217.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Berni",
//   },
//   {
//     id: "01KTKSP1QGQQ30B37XEY966BQX",
//     nome: "Clélia",
//     imagem: "http://dummyimage.com/233x204.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Dorine",
//   },
//   {
//     id: "01KTKSP1QHT1Q9DEE7BNTE1ZP4",
//     nome: "Dù",
//     imagem: "http://dummyimage.com/110x203.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Leonerd",
//   },
//   {
//     id: "01KTKSP1QHYB1E6YV343KQVJ7Q",
//     nome: "Laurélie",
//     imagem: "http://dummyimage.com/138x246.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Jourdain",
//   },
//   {
//     id: "01KTKSP1QJRX4ZFBSAW9DC60C1",
//     nome: "Solène",
//     imagem: "http://dummyimage.com/170x294.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Kessia",
//   },
//   {
//     id: "01KTKSP1QJXDC2VHFZTAK4YDCT",
//     nome: "Bénédicte",
//     imagem: "http://dummyimage.com/146x240.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Trace",
//   },
//   {
//     id: "01KTKSP1QKTCPF2F7AHTXQF2JQ",
//     nome: "Célestine",
//     imagem: "http://dummyimage.com/231x132.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Karlan",
//   },
//   {
//     id: "01KTKSP1QKS6K0JWZY9PVB8KAX",
//     nome: "Thérèsa",
//     imagem: "http://dummyimage.com/238x151.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Estrellita",
//   },
//   {
//     id: "01KTKSP1QMW1RV5FD7D40SJFMM",
//     nome: "Régine",
//     imagem: "http://dummyimage.com/221x241.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Delano",
//   },
//   {
//     id: "01KTKSP1QMNXNXNJQDAGPZZCHA",
//     nome: "Lài",
//     imagem: "http://dummyimage.com/194x155.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Liuka",
//   },
//   {
//     id: "01KTKSP1QN590ME4C0ETG9CGAW",
//     nome: "Intéressant",
//     imagem: "http://dummyimage.com/158x279.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Rochelle",
//   },
//   {
//     id: "01KTKSP1QPSHG0ZVN7S2EQY1RC",
//     nome: "Lèi",
//     imagem: "http://dummyimage.com/102x131.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Janek",
//   },
//   {
//     id: "01KTKSP1QPBDTS897WEMBZB4Y3",
//     nome: "Annotée",
//     imagem: "http://dummyimage.com/155x183.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Zebedee",
//   },
//   {
//     id: "01KTKSP1QQGC1T83MEM80RH2J5",
//     nome: "Céline",
//     imagem: "http://dummyimage.com/242x275.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Carey",
//   },
//   {
//     id: "01KTKSP1QQS6JRTWBSWRCJ6QNF",
//     nome: "Joséphine",
//     imagem: "http://dummyimage.com/145x161.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Becca",
//   },
//   {
//     id: "01KTKSP1QRZCGJXTPE2W6A72D5",
//     nome: "Anaé",
//     imagem: "http://dummyimage.com/220x181.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Davidde",
//   },
//   {
//     id: "01KTKSP1QRYA9RD1ZSYVPRRRW3",
//     nome: "Céline",
//     imagem: "http://dummyimage.com/219x112.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Den",
//   },
//   {
//     id: "01KTKSP1QSGVBA57VBPQ0HVNWH",
//     nome: "Stéphanie",
//     imagem: "http://dummyimage.com/220x127.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Cazzie",
//   },
//   {
//     id: "01KTKSP1QSYB7V6N2C3F2TR9YQ",
//     nome: "Loïs",
//     imagem: "http://dummyimage.com/184x284.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Farra",
//   },
//   {
//     id: "01KTKSP1QT3K25RGMCT96780EQ",
//     nome: "Maëlys",
//     imagem: "http://dummyimage.com/220x212.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Arman",
//   },
//   {
//     id: "01KTKSP1QVQX6063VNXX2TY9K9",
//     nome: "Noémie",
//     imagem: "http://dummyimage.com/147x216.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Briana",
//   },
//   {
//     id: "01KTKSP1QVFHREGXW27683BE1A",
//     nome: "Maéna",
//     imagem: "http://dummyimage.com/127x194.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Kip",
//   },
//   {
//     id: "01KTKSP1QWR898XWK1MTK1B3X3",
//     nome: "Danièle",
//     imagem: "http://dummyimage.com/113x112.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Case",
//   },
//   {
//     id: "01KTKSP1QWVCDWH4SX5A8D1B1D",
//     nome: "Andréanne",
//     imagem: "http://dummyimage.com/294x253.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Misti",
//   },
//   {
//     id: "01KTKSP1QX0JNJ7CCD95TERDHR",
//     nome: "Geneviève",
//     imagem: "http://dummyimage.com/230x286.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Noami",
//   },
//   {
//     id: "01KTKSP1QX3N065CWXWN6WY2FJ",
//     nome: "Táng",
//     imagem: "http://dummyimage.com/218x103.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Franni",
//   },
//   {
//     id: "01KTKSP1QY4HFDEDEVB89NTZ70",
//     nome: "Anaël",
//     imagem: "http://dummyimage.com/218x193.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Lissie",
//   },
//   {
//     id: "01KTKSP1QYB7QTYC0C01BARJF6",
//     nome: "Crééz",
//     imagem: "http://dummyimage.com/217x260.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Gallard",
//   },
//   {
//     id: "01KTKSP1QZ6AEFJ02MATH6QWBQ",
//     nome: "Eléa",
//     imagem: "http://dummyimage.com/190x260.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Jacquelynn",
//   },
//   {
//     id: "01KTKSP1QZVHARZXP2QV20R6XY",
//     nome: "Françoise",
//     imagem: "http://dummyimage.com/246x204.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Cris",
//   },
//   {
//     id: "01KTKSP1R0D6M5YE97EAYA6QGB",
//     nome: "Adélaïde",
//     imagem: "http://dummyimage.com/197x120.png/cc0000/ffffff",
//     comprado: true,
//     compradoPor: "Duffie",
//   },
//   {
//     id: "01KTKSP1R131CNNV23XMZPQ566",
//     nome: "Mélinda",
//     imagem: "http://dummyimage.com/219x272.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Heinrik",
//   },
//   {
//     id: "01KTKSP1R1KP4Y23Z7BXY51KG4",
//     nome: "Ruò",
//     imagem: "http://dummyimage.com/197x176.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Wini",
//   },
//   {
//     id: "01KTKSP1R257VKP4S9SF69T5DA",
//     nome: "Cloé",
//     imagem: "http://dummyimage.com/120x196.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Alvan",
//   },
//   {
//     id: "01KTKSP1R2BET54W7FWFKRRH41",
//     nome: "Kévina",
//     imagem: "http://dummyimage.com/149x193.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Faunie",
//   },
//   {
//     id: "01KTKSP1R3ARWGH1FB7WZZ1HYW",
//     nome: "Méryl",
//     imagem: "http://dummyimage.com/147x141.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Melodie",
//   },
//   {
//     id: "01KTKSP1R4B2JJSHCH5K8BN0J4",
//     nome: "Adélaïde",
//     imagem: "http://dummyimage.com/112x265.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Margery",
//   },
//   {
//     id: "01KTKSP1R4XPF274ZEZ45HWBYW",
//     nome: "Vénus",
//     imagem: "http://dummyimage.com/288x197.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Louisette",
//   },
//   {
//     id: "01KTKSP1R5RJCK3AHCT80XRMVG",
//     nome: "Annotés",
//     imagem: "http://dummyimage.com/208x121.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Monah",
//   },
//   {
//     id: "01KTKSP1R6ZR4Y3CEGM2CYW5M4",
//     nome: "Camélia",
//     imagem: "http://dummyimage.com/230x232.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Randie",
//   },
//   {
//     id: "01KTKSP1R6G08W1MHM2RRJ6Q36",
//     nome: "Cloé",
//     imagem: "http://dummyimage.com/265x290.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Carl",
//   },
//   {
//     id: "01KTKSP1R7KH2WW1DV1EYDKRJ3",
//     nome: "Danièle",
//     imagem: "http://dummyimage.com/194x105.png/dddddd/000000",
//     comprado: true,
//     compradoPor: "Carly",
//   },
//   {
//     id: "01KTKSP1R7QZSRHFV9SMR18BTV",
//     nome: "Loïc",
//     imagem: "http://dummyimage.com/243x220.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Mikol",
//   },
//   {
//     id: "01KTKSP1R8KYPYKVD7GA01Q459",
//     nome: "Maëlys",
//     imagem: "http://dummyimage.com/122x120.png/5fa2dd/ffffff",
//     comprado: false,
//     compradoPor: "Carlo",
//   },
//   {
//     id: "01KTKSP1R8MMJN3QS0KRF1Q33A",
//     nome: "Sòng",
//     imagem: "http://dummyimage.com/250x266.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Valentijn",
//   },
//   {
//     id: "01KTKSP1R9Z0JKAFDZXYYSS796",
//     nome: "Lucrèce",
//     imagem: "http://dummyimage.com/240x295.png/ff4444/ffffff",
//     comprado: true,
//     compradoPor: "Derby",
//   },
//   {
//     id: "01KTKSP1R9RGFBZXTEPDKWRY0V",
//     nome: "Marie-josée",
//     imagem: "http://dummyimage.com/274x244.png/cc0000/ffffff",
//     comprado: false,
//     compradoPor: "Latashia",
//   },
//   {
//     id: "01KTKSP1RAWZCRB3KSEMTBJVQA",
//     nome: "Intéressant",
//     imagem: "http://dummyimage.com/138x176.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Worden",
//   },
//   {
//     id: "01KTKSP1RAPCPW8NSP0CY6QB1K",
//     nome: "Laïla",
//     imagem: "http://dummyimage.com/220x138.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Lillis",
//   },
//   {
//     id: "01KTKSP1RBFJV7J9SZKRX5TRSQ",
//     nome: "Méline",
//     imagem: "http://dummyimage.com/190x118.png/dddddd/000000",
//     comprado: false,
//     compradoPor: "Sherm",
//   },
//   {
//     id: "01KTKSP1RBAGH94MZKYJR5QT1N",
//     nome: "Måns",
//     imagem: "http://dummyimage.com/134x210.png/5fa2dd/ffffff",
//     comprado: true,
//     compradoPor: "Benjie",
//   },
//   {
//     id: "01KTKSP1RCSDS6A02ANSNKYXJG",
//     nome: "Salomé",
//     imagem: "http://dummyimage.com/219x100.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Rici",
//   },
//   {
//     id: "01KTKSP1RD8QGG5Z0S3FS1J3EY",
//     nome: "Séréna",
//     imagem: "http://dummyimage.com/142x170.png/ff4444/ffffff",
//     comprado: false,
//     compradoPor: "Christine",
//   },
// ];

export function ListaPresentes() {
  // const [filterComprado, setFilterComprado] = useState<boolean>(false);
  // const [filterTexto, setFilterTexto] = useState<string>("");
  // const { height, width } = useWindowDimensions();
  // const isHorizontal = width > height;

  // const presentes = useMemo(() => {
  //   let filtered = mocks;
  //   if (filterComprado) filtered = filtered.filter((p) => !p.comprado);
  //   if (filterTexto)
  //     filtered = filtered.filter((p) =>
  //       normalize(p.nome).includes(normalize(filterTexto)),
  //     );
  //   return filtered;
  // }, [filterComprado, filterTexto]);

  return (
    <Section id="lista-presentes">
      <SectionTitle>Lista de Presentes</SectionTitle>
      <span>Em breve!</span>
      {/* <label className="mt-2 flex items-center justify-center gap-2">
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
          checked={filterComprado}
          onChange={() => setFilterComprado((prev) => !prev)}
        />
        <span>Filtrar por presentes disponíveis</span>
      </label>
      <div className="mb-5 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] justify-items-center gap-5 px-2 py-4 md:grid-cols-[repeat(auto-fit,minmax(14rem,1fr))]">
        {presentes.map((presente) => (
          <CardPresente {...presente} key={presente.id} />
        ))}
      </div>
      <ModalNome /> */}
    </Section>
  );
}

export interface LinkNavigare {
  eticheta: string;
  href: string;
}

export interface Categorie {
  titlu: string;
  descriere: string;
}

export interface Produs {
  nume: string;
  descriere: string;
  pret: string;
  imagine: string;
}

export interface RandComparatie {
  sortiment: string;
  intensitate: string;
  aciditate: string;
  recomandat: string;
  pret: string;
}

export interface Recenzie {
  text: string;
  autor: string;
}

export const navigare: LinkNavigare[] = [
  { eticheta: "Produse", href: "#produse" },
  { eticheta: "Sortimente", href: "#comparatie" },
  { eticheta: "Recenzii", href: "#recenzii" },
  { eticheta: "Abonare", href: "#abonare" },
];

export const categorii: Categorie[] = [
  {
    titlu: "Boabe întregi",
    descriere: "Pentru cei care macină acasă, chiar înainte de preparare.",
  },
  {
    titlu: "Cafea măcinată",
    descriere: "Măcinare potrivită pentru filtru, ibric sau french press.",
  },
  {
    titlu: "Accesorii",
    descriere: "Râșnițe, filtre din hârtie și căni din ceramică lucrată manual.",
  },
  {
    titlu: "Abonamente",
    descriere: "Un pachet nou, ales de noi, livrat la 2 sau 4 săptămâni.",
  },
];

export const produse: Produs[] = [
  {
    nume: "Etiopia — Yirgacheffe",
    descriere: "Note florale, de bergamotă și fructe de pădure.",
    pret: "42 lei / 250g",
    imagine: "https://picsum.photos/seed/etiopia/360/300",
  },
  {
    nume: "Columbia — Huila",
    descriere: "Corp echilibrat, caramel și nucă prăjită.",
    pret: "38 lei / 250g",
    imagine: "https://picsum.photos/seed/columbia/360/300",
  },
  {
    nume: "Guatemala — Antigua",
    descriere: "Cacao, un strop de citrice și finisaj lung.",
    pret: "40 lei / 250g",
    imagine: "https://picsum.photos/seed/guatemala/360/300",
  },
];

export const comparatie: RandComparatie[] = [
  {
    sortiment: "Etiopia — Yirgacheffe",
    intensitate: "Ușoară",
    aciditate: "Ridicată",
    recomandat: "Filtru, V60",
    pret: "42 lei",
  },
  {
    sortiment: "Columbia — Huila",
    intensitate: "Medie",
    aciditate: "Medie",
    recomandat: "French press, ibric",
    pret: "38 lei",
  },
  {
    sortiment: "Guatemala — Antigua",
    intensitate: "Medie-intensă",
    aciditate: "Scăzută",
    recomandat: "Espressor",
    pret: "40 lei",
  },
];

export const recenzii: Recenzie[] = [
  {
    text: "Prima dată când simt diferența dintre un lot proaspăt și cafeaua de la raft.",
    autor: "Mihai R., client din 2024",
  },
  {
    text: "Abonamentul m-a scos din obiceiul de a cumpăra mereu același sortiment.",
    autor: "Diana T., abonată lunar",
  },
];

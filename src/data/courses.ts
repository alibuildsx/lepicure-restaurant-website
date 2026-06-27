export interface TastingCourse {
  number: string;
  name: string;
  description: string;
  winePairing?: string;
}

export const tastingCourses: TastingCourse[] = [
  {
    number: "I",
    name: "Amuse-Bouche",
    description:
      "A trilogy of house-made bites: smoked salmon on blinis, truffle cromesquis, and a single perfect oyster with mignonette granita.",
    winePairing: "Billecart-Salmon Blanc de Blancs NV",
  },
  {
    number: "II",
    name: "Première Entrée",
    description:
      "Hokkaido scallop crudo, slowly cured in citrus, served with yuzu foam, Kaluga caviar, and a cold dill oil.",
    winePairing: "Chablis Premier Cru, Domaine Raveneau 2021",
  },
  {
    number: "III",
    name: "Deuxième Entrée",
    description:
      "Seared Hudson Valley foie gras, caramelised Sauternes gelée, brioche toasted in cultured butter, candied Piedmont hazelnuts.",
    winePairing: "Château d'Yquem, Sauternes 2018",
  },
  {
    number: "IV",
    name: "Plat Principal",
    description:
      "A5 Wagyu beef tenderloin, rested and seared over charcoal, with truffle shavings, pommes soufflées, and a 48-hour bone marrow jus.",
    winePairing: "Pauillac, Château Lynch-Bages 2015",
  },
  {
    number: "V",
    name: "Pré-Dessert",
    description:
      "A palette cleanser: Champagne sorbet from Billecart-Salmon rosé, lemon verbena jelly, and crystallised violet petals.",
    winePairing: "Billecart-Salmon Rosé NV",
  },
  {
    number: "VI",
    name: "Dessert",
    description:
      "Valrhona dark chocolate sphere, shattered at the table with warm caramel sauce, revealing hazelnut praline, and decorated with 24k gold leaf.",
    winePairing: "Banyuls Rimage, Domaine du Mas Blanc 2019",
  },
  {
    number: "VII",
    name: "Mignardises",
    description:
      "House-made petits fours: salted caramel bonbons, lavender macarons, and dark chocolate truffles dusted with Valrhona cocoa.",
  },
];

export const tastingMenuPrice = "€265";
export const tastingMenuWinePairingPrice = "€120";

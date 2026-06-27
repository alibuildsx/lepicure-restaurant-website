export type MenuCategory = "Starters" | "Mains" | "Desserts" | "Drinks";

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tags?: string[];
}

export const menuCategories: MenuCategory[] = ["Starters", "Mains", "Desserts", "Drinks"];

export const menuItems: Record<MenuCategory, MenuItem[]> = {
  Starters: [
    {
      name: "Hokkaido Scallop Crudo",
      description: "Citrus-cured scallop, yuzu foam, Kaluga caviar, dill oil",
      price: "€38",
      tags: ["Chef's Selection"],
    },
    {
      name: "Foie Gras Royale",
      description: "Seared Hudson Valley foie gras, Sauternes gelée, brioche, toasted hazelnuts",
      price: "€42",
    },
    {
      name: "Heritage Beet Composition",
      description: "Tri-colour roasted beets, chèvre mousse, candied walnuts, aged balsamic",
      price: "€28",
      tags: ["Vegetarian"],
    },
    {
      name: "Sea Urchin Velouté",
      description: "Santa Barbara uni, langoustine bisque, tarragon cream, brioche crouton",
      price: "€46",
    },
    {
      name: "Burrata & Heirloom Tomato",
      description: "Stracciatella, Catalan tomatoes, aged Modena vinegar, basil oil, fleur de sel",
      price: "€26",
      tags: ["Vegetarian", "Seasonal"],
    },
    {
      name: "Smoked Duck Terrine",
      description: "Artisan duck terrine, Armagnac prune, pistachio, sourdough crisps",
      price: "€34",
    },
  ],
  Mains: [
    {
      name: "A5 Wagyu Tenderloin",
      description: "Japanese wagyu, bone marrow jus, pommes soufflées, truffle shavings, micro herbs",
      price: "€145",
      tags: ["Chef's Selection"],
    },
    {
      name: "Brittany Lobster",
      description: "Butter-poached tail, saffron bisque, caviar beurre blanc, fennel confit",
      price: "€98",
    },
    {
      name: "Turbot en Croûte d'Herbes",
      description: "Wild-caught turbot, herb crust, beurre blanc, seasonal asparagus, lemon caviar",
      price: "€82",
    },
    {
      name: "Slow-Braised Short Rib",
      description: "72-hour Wagyu short rib, celery root purée, roasted bone marrow, Bordelaise",
      price: "€76",
    },
    {
      name: "Rack of Lamb Provençal",
      description: "Herb-crusted Colorado lamb, ratatouille, tapenade, lamb jus, rosemary",
      price: "€88",
    },
    {
      name: "Roasted Cauliflower Royale",
      description: "Whole roasted cauliflower, vadouvan cream, pickled golden raisins, crispy capers",
      price: "€54",
      tags: ["Vegetarian"],
    },
  ],
  Desserts: [
    {
      name: "Valrhona Chocolate Sphere",
      description: "Dark chocolate dome, hazelnut praline, gold leaf, caramel, edible orchid",
      price: "€28",
      tags: ["Chef's Selection"],
    },
    {
      name: "Crème Brûlée à la Vanille",
      description: "Madagascar vanilla custard, caramelised crust, seasonal berry coulis",
      price: "€18",
    },
    {
      name: "Tarte Tatin Revisitée",
      description: "Caramelised apple, Calvados crème, candied pecans, gold-flecked pastry",
      price: "€22",
    },
    {
      name: "Soufflé Grand Marnier",
      description: "Classic soufflé, orange zest, crème anglaise, candied peel (30 min preparation)",
      price: "€26",
    },
    {
      name: "Champagne Sorbet",
      description: "Billecart-Salmon rosé sorbet, lemon gelée, raspberry tuile, edible flowers",
      price: "€16",
      tags: ["Vegan"],
    },
    {
      name: "Cheese Selection",
      description: "Curated French and aged cheeses, quince paste, walnut bread, honey",
      price: "€32",
    },
  ],
  Drinks: [
    {
      name: "The Amber Crown",
      description: "12yr Speyside whisky, cherry heering, Armagnac, orange bitters, smoked oak",
      price: "€28",
      tags: ["Signature"],
    },
    {
      name: "Garden Ephemeral",
      description: "Hendrick's gin, elderflower, fresh cucumber, basil, tonic, rose oil",
      price: "€22",
    },
    {
      name: "Sommelier's Pairing",
      description: "Five-course curated wine pairing by our Master Sommelier, per person",
      price: "€120",
      tags: ["Recommended"],
    },
    {
      name: "Crémant d'Alsace",
      description: "Trimbach house pour, crisp and elegant, light fruit notes, 150ml",
      price: "€18",
    },
    {
      name: "Midnight Noir",
      description: "Aged rum, cold brew espresso, dark cacao, vanilla pod, edible gold",
      price: "€24",
      tags: ["Signature"],
    },
    {
      name: "Herbal Elixir",
      description: "House-made shrub, yuzu, lemon balm, sparkling water — alcohol-free",
      price: "€14",
      tags: ["Zero Proof"],
    },
  ],
};

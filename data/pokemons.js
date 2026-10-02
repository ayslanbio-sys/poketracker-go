const POKEMON_DATA = [
  {
    region: "kanto",
    name: "Kanto",
    list: [
      { id: 1, name: "Bulbasaur", isRegional: false },
      { id: 2, name: "Ivysaur", isRegional: false },
      { id: 3, name: "Venusaur", isRegional: false },
      { id: 4, name: "Charmander", isRegional: false },
      { id: 5, name: "Charmeleon", isRegional: false },
      { id: 6, name: "Charizard", isRegional: false },
      { id: 7, name: "Squirtle", isRegional: false },
      { id: 8, name: "Wartortle", isRegional: false },
      { id: 9, name: "Blastoise", isRegional: false },
      { id: 25, name: "Pikachu", isRegional: false },
      { id: 83, name: "Farfetch'd", isRegional: true },
      { id: 115, name: "Kangaskhan", isRegional: true },
      { id: 122, name: "Mr. Mime", isRegional: true },
      { id: 128, name: "Tauros", isRegional: true },
      { id: 143, name: "Snorlax", isRegional: false },
      { id: 150, name: "Mewtwo", isRegional: false }
    ]
  },
  {
    region: "johto",
    name: "Johto",
    list: [
      { id: 152, name: "Chikorita", isRegional: false },
      { id: 155, name: "Cyndaquil", isRegional: false },
      { id: 158, name: "Totodile", isRegional: false },
      { id: 214, name: "Heracross", isRegional: true },
      { id: 222, name: "Corsola", isRegional: true },
      { id: 248, name: "Tyranitar", isRegional: false },
      { id: 249, name: "Lugia", isRegional: false },
      { id: 250, name: "Ho-Oh", isRegional: false }
    ]
  },
  {
    region: "hoenn",
    name: "Hoenn",
    list: [
      { id: 252, name: "Treecko", isRegional: false },
      { id: 255, name: "Torchic", isRegional: false },
      { id: 258, name: "Mudkip", isRegional: false },
      { id: 313, name: "Volbeat", isRegional: true },
      { id: 314, name: "Illumise", isRegional: true },
      { id: 324, name: "Torkoal", isRegional: true },
      { id: 335, name: "Zangoose", isRegional: true },
      { id: 336, name: "Seviper", isRegional: true },
      { id: 357, name: "Tropius", isRegional: true },
      { id: 369, name: "Relicanth", isRegional: true }
    ]
  },
  {
    region: "sinnoh",
    name: "Sinnoh",
    list: [
      { id: 387, name: "Turtwig", isRegional: false },
      { id: 390, name: "Chimchar", isRegional: false },
      { id: 393, name: "Piplup", isRegional: false },
      { id: 417, name: "Pachirisu", isRegional: true },
      { id: 422, name: "Shellos", isRegional: true },
      { id: 441, name: "Chatot", isRegional: true },
      { id: 455, name: "Carnivine", isRegional: true },
      { id: 480, name: "Uxie", isRegional: true },
      { id: 481, name: "Mesprit", isRegional: true },
      { id: 482, name: "Azelf", isRegional: true }
    ]
  },
  {
    region: "unova",
    name: "Unova",
    list: [
      { id: 495, name: "Snivy", isRegional: false },
      { id: 498, name: "Tepig", isRegional: false },
      { id: 501, name: "Oshawott", isRegional: false },
      { id: 511, name: "Pansage", isRegional: true },
      { id: 513, name: "Pansear", isRegional: true },
      { id: 515, name: "Panpour", isRegional: true },
      { id: 538, name: "Throh", isRegional: true },
      { id: 539, name: "Sawk", isRegional: true },
      { id: 556, name: "Maractus", isRegional: true },
      { id: 561, name: "Sigilyph", isRegional: true },
      { id: 626, name: "Bouffalant", isRegional: true }
    ]
  },
  {
    region: "kalos",
    name: "Kalos",
    list: [
      { id: 650, name: "Chespin", isRegional: false },
      { id: 653, name: "Fennekin", isRegional: false },
      { id: 656, name: "Froakie", isRegional: false },
      { id: 670, name: "Floette", isRegional: true },
      { id: 707, name: "Klefki", isRegional: true }
    ]
  },
  {
    region: "alola",
    name: "Alola",
    list: [
      { id: 722, name: "Rowlet", isRegional: false },
      { id: 725, name: "Litten", isRegional: false },
      { id: 728, name: "Popplio", isRegional: false },
      { id: 741, name: "Oricorio", isRegional: true },
      { id: 764, name: "Comfey", isRegional: true }
    ]
  },
  {
    region: "galar",
    name: "Galar",
    list: [
      { id: 810, name: "Grookey", isRegional: false },
      { id: 813, name: "Scorbunny", isRegional: false },
      { id: 816, name: "Sobble", isRegional: false },
      { id: 870, name: "Falinks", isRegional: false },
      { id: 876, name: "Indeedee", isRegional: true }
    ]
  },
  {
    region: "paldea",
    name: "Paldea",
    list: [
      { id: 906, name: "Sprigatito", isRegional: false },
      { id: 909, name: "Fuecoco", isRegional: false },
      { id: 912, name: "Quaxly", isRegional: false },
      { id: 931, name: "Squawkabilly", isRegional: true },
      { id: 970, name: "Glimmora", isRegional: false }
    ]
  }
];

export interface WineInfo {
  title: string;
  type?: WineType;
  country?: Countries;
  region?: string;
  grapes?: string;
  rating?: number;
  images?: string[];
  price: string;
  quantity?: number;
  year?: Years;
  description?: string;
}

export enum WineType {
  RedWine = "Red wine",
  WhiteWine = "White wine",
  RoseWine = "Rosé wine",
  SparklingWine = "Sparkling wine",
}

export enum Countries {
  Australia = "Australia",
  Brazil = "Brazil",
  Hungary = "Hungary",
  US = "US",
  France = "France",
  Spain = "Spain",
  Italy = "Italy",
  NewZealand = "New Zealand",
  Germany = "Germany",
  Canada = "Canada",
  Portugal = "Portugal",
}

export enum Years {
  Y2009 = "2009",
  Y2010 = "2010",
  Y2011 = "2011",
  Y2012 = "2012",
  Y2013 = "2013",
  Y2014 = "2014",
  Y2015 = "2015",
  Y2016 = "2016",
  Y2017 = "2017",
  Y2018 = "2018",
  Y2019 = "2019",
  Y2020 = "2020",
  Y2021 = "2021",
}

export enum Titles {
  Kristinus = "Kristinus",
  EcoTerreno = "Eco Terreno",
  LayerCake = "Layer Cake",
  Avaline = "Avaline",
  LaCrema = "La Crema",
  ZAlexanderBrown = "Z.Alexander Brown",
  CasaGrandelSiurana = "Casa Gran del Siurana",
  ParkerCoonawarraEstate = "Parker Coonawarra Estate",
  Prunotto = "Prunotto",
  BreadButter = "Bread & Butter",
  ToiToi = "Toi Toi",
  Franzen = "Franzen",
  Plaimont = "Plaimont",
  AncientPeaks = "Ancient Peaks",
  Dubicz = "Dubicz",
  QuintarelliGiuseppe = "Quintarelli Giuseppe",
  DomaineCourbis = "Domaine Courbis",
  Amity = "Amity",
  YesWay = "Yes Way",
  CôtedesRoses = "Côte des Roses",
  AVAGrace = "AVA Grace",
  Cline = "Cline",
  KendallJackson = "Kendall-Jackson",
  WoodbridgebyRobertMondavi = "Woodbridge by Robert Mondavi",
  DomaineHouchart = "Domaine Houchart",
  Sandhill = "Sandhill",
  CasaPerini = "Casa Perini",
  Laetitia = "Laetitia",
  Seppelt = "Seppelt",
  ThomsonScottSkinny = "Thomson & Scott Skinny",
  Bottega = "Bottega",
  StellaRosa = "Stella Rosa",
  QuintadAmares = "Quinta d'Amares",
  VeuveClicquot = "Veuve Clicquot",
  ChampagneBeaumontdesCrayeres = "Champagne Beaumont des Crayeres",
  JaumeSerra = "Jaume Serra",
}

// Project portfolio from the 2026 company profile.
// Order matters: "wide" cards span 8 of 12 columns, so each row adds up to 12.
export const projectFilters = [
  { id: "all", label: "All" },
  { id: "roads", label: "Roads" },
  { id: "filling", label: "Filling & Land" },
  { id: "building", label: "Buildings & Walls" },
  { id: "water", label: "Water & Bridges" },
  { id: "ongoing", label: "Ongoing" },
];

export const projects = [
  { title: "NH716B Six Laning", client: "Chittoor – Thatchur Road", desc: "Filling, levelling & compaction work with field dry density tests alongside the client.", cats: ["roads", "filling"], size: "wide", featured: true, imgs: ["nh716b-3", "nh716b-1", "nh716b-2", "nh716b-4", "nh716b-5", "nh716b-fdd"] },
  { title: "IOCL Plant, Manali", client: "Indian Oil Corporation", desc: "Mass filling and soil filling & compaction for the upcoming IOCL plant.", cats: ["filling"], featured: true, imgs: ["iocl-2", "iocl-1", "iocl-3"] },
  { title: "Chennai Metro Depot", client: "CMRL · Poonamallee", desc: "Soil filling, grading & compaction with levelling tests for the metro depot.", cats: ["filling"], featured: true, imgs: ["cmrl-3", "cmrl-2", "cmrl-1", "cmrl-4"] },
  { title: "PolyHose India", client: "PolyHose India Pvt Ltd", desc: "Mass filling, levelling & compaction using CAT motor graders and rollers.", cats: ["filling"], featured: true, imgs: ["polyhose-2", "polyhose-1", "polyhose-3"] },
  { title: "RCC Bridge", client: "Somangalam, Chetpet", desc: "Construction of an RCC bridge and approach road works.", cats: ["water"], featured: true, imgs: ["bridge-1", "bridge-2"] },
  { title: "Government Tank", client: "Govt. of Tamil Nadu", desc: "Lake work and construction of retaining walls for the government tank.", cats: ["water"], featured: true, imgs: ["govt-lake", "govt-lake-wall"] },
  { title: "RWD Chembarambakkam", client: "Ramky Wavoo · Phases 1–4", desc: "18 m wide BT roads with kerb stone, Hume pipe storm water drains, earth filling & grading.", cats: ["roads", "filling"], size: "wide", featured: true, imgs: ["rwd-chemba-2", "rwd-chemba-1", "rwd-chemba-3", "rwd-chemba-4"] },
  { title: "Sameera Estates", client: "Sameera Township", desc: "BT road (DBM & SDBC) with centre median, thermoplastic marking and RCC / NP3 storm water drains.", cats: ["roads"], imgs: ["sameera-bt-2", "sameera-bt-1", "sameera-drain"] },
  { title: "4 km Compound Wall", client: "Sameera · Sameera 117", desc: "Compound wall covering 4 km, plus retaining wall construction.", cats: ["building"], imgs: ["sameera-wall-1", "sameera-wall-2", "sameera-retaining"] },
  { title: "Fomra Housing", client: "Fomra Housing Infrastructure", desc: "Building construction: foundations, columns and basement floor concreting.", cats: ["building"], imgs: ["fomra-2", "fomra-1", "fomra-3"] },
  { title: "Nova Element 05", client: "Nova Developers · Thiruverkadu", desc: "GSB & WMM formation and BT road for a plot development project.", cats: ["roads", "filling"], size: "wide", imgs: ["nova-2", "nova-1", "nova-3"] },
  { title: "Thorapakkam Highway", client: "Road Work", desc: "Mass filling and levelling for the highway road formation.", cats: ["roads", "filling"], imgs: ["thorapakkam-1", "thorapakkam-2"] },
  { title: "Adyar River Restoration", client: "Phase-3 Master Plan", desc: "Compound wall construction for the Adyar River restoration works.", cats: ["building", "water"], imgs: ["adyar-1", "adyar-2"] },
  { title: "Building Construction", client: "Residential & Individual Houses", desc: "Shuttering works, roof concrete and finishing levels.", cats: ["building"], imgs: ["building-2", "building-1", "house-1"] },
  { title: "Government Roads", client: "Poondhandalam · Nandhambakkam", desc: "WMM laying for bituminous road and paver tile roads.", cats: ["roads"], imgs: ["govt-wmm", "govt-paver"] },
  { title: "IOCL Expansion", client: "Ongoing", desc: "Mass filling work and soil FDD testing.", cats: ["filling", "ongoing"], live: true, imgs: ["iocl-ongoing"] },
  { title: "RWD Phase-5 Highlight", client: "Ongoing", desc: "Mass filling and GSB levelling work.", cats: ["filling", "roads", "ongoing"], live: true, size: "wide", imgs: ["rwd5-2", "rwd5-1"] },
];

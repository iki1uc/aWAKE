export const aWAKE = {
  id: "aWAKE",
  state: "ON",

  // SYS (4 Richtungen)
  sys: ["W","S","A","D"],

  // TEM (4 Impulse)
  tem: ["Q","R","Y","C"],

  // STATE (4 Zustände)
  state12: ["E","F","T","M"],

  // bekannte Module (Gründer-Registry)
  modules: [
    "mir",
    "respo",
    "argumenteria",
    "dir",
    "core",
    "tem",
    "viµio",
    "REAL",
    "MXU",
    "AXINXA"
  ],

  // Gründer-Start
  run() {
    return "aWAKE_ACTIVE";
  }
};

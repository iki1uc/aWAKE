export function TMP(awake, raw) {
  const status = {
    raw: raw || "",
    text: awake?.text || "DEMΝ — SYSTEM START",
    structure: {
      module: "respo",
      type: "core",
      layer: "mini",
      wake: awake || "aWAKE_ACTIVE",
      sub: ["params.txt", "alias.txt", "vector.map", "wake.map"]
    },
    corrected: "",
    errors: [],
    status: "OK",
    notes: ""
  };

  // Beispielkorrektur
  status.corrected = status.text
    .replace("la al abr", "la, al, abr")
    .replace("tasten nutzung", "Tastennutzung")
    .replace("ereignis", "Ereignis");

  return status;
}

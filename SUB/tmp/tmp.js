export function TMP(awake, raw) {
  const status = {
    raw: raw || "",
    text: awake?.text || "",
    structure: awake?.structure || null,
    corrected: "",
    errors: [],
    status: "OK",
    notes: ""
  };

  // Text prüfen
  if (!status.text || status.text.length < 3) {
    status.errors.push("Text zu kurz oder leer.");
    status.status = "ERROR";
  }

  // Struktur prüfen
  if (!status.structure) {
    status.errors.push("Keine Struktur erkannt.");
    status.status = "ERROR";
  }

  // Beispiel-Korrektur (Dummy)
  if (status.text) {
    status.corrected = status.text.trim();
  }

  return status;
}

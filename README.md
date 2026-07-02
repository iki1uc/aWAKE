aWAKE — Globaler Wecker & SUB‑Master
aWAKE ist der globale Wecker und die zentrale SUB‑Schicht des gesamten RESPO‑Systems.
Es steht über allen Modulen und sorgt dafür, dass jeder RESPO korrekt geweckt wird, seine Identität kennt und sofort arbeitsfähig ist.

WER ZU WEM — Systemübersicht
Rolle von aWAKE
Globaler Wecker für alle RESPOs

Globaler SUB‑Master (Parameter, Alias, Vektor)

Erzeugt und verteilt wake.map

Liefert PX/PQ‑Meta‑Daten

Startet TMP‑Spuren

Verhindert Doppel‑SCAN

Stellt Alias‑ und Originalnamen bereit

Wandelt 1D‑Parameter in 3D‑Vektoren um

Beziehung: aWAKE ↔ SUB ↔ RESPO
aWAKE
Globaler Wecker

Globaler Vektor‑Adapter

Globaler Alias‑Anker

Globaler PX/PQ‑Layer

Globaler TMP‑Starter

SUB
Lokale Parameter‑Schicht

Lokale Alias‑Liste

Lokale Vektor‑Map

Lokale wake.map

Lokale TMP‑Spur

RESPO
Zielmodul

Wird durch aWAKE geweckt

Nutzt SUB‑Daten

Arbeitet nach wake.map

Struktur von aWAKE
Code
aWAKE/
   README.md
   SUB/
      params.txt
      alias.txt
      vector.map
      wake.map
   TMP/
      trace.log
      fail.status
      names.map.txt
wake.map — Weck‑Information
Diese Datei erklärt jedem RESPO beim Aufwachen:

Code
wake.job = REC_<name>
wake.reason = PX/PQ
wake.vector = [x, y, z]
wake.pipeline = 3|6
wake.tmp = TMP_<name>_SUB
wake.alias = originalName
Vektor‑Adapter (1D → 3D)
Motor und Engine können kein 1D.
Darum erzeugt aWAKE automatisch:

Code
speed = 5
→ vector = [5, 0, 0]
Damit sind alle Module kompatibel.

PX/PQ‑Meta
PX = Struktur‑Export

PQ = Parameter‑Export

Beide werden durch aWAKE bereitgestellt.

Warum aWAKE notwendig ist
verhindert Fehl‑Weckungen

verhindert falsche Namen

verhindert falsche Pipeline‑Zuweisung

macht jeden RESPO sofort arbeitsfähig

macht REC sofort übernahmefähig

liefert globale Ordnung für alle Module

Fazit
aWAKE ist der zentrale Wecker, SUB‑Master und Vektor‑Adapter des gesamten Systems.
Es sorgt dafür, dass jeder RESPO korrekt startet, seine Aufgabe kennt und vollständig mit PX/PQ, TMP und allen Modulen kompatibel ist.

import { RAWATOR } from "./RAWATOR.js";
import { mir } from "./mir-core.js";
import { respo } from "./respo.js";
import { argumenteria } from "./argumenteria.js";
import { dir } from "./dir.js";
import { core } from "./core.js";
import { tem } from "./tem.js";
import { viµio } from "./viµio.js";

export function aWAKE_ENGINE() {

  // Pipeline
  const impulse = mir("ENGINE_START");
  const r = respo(core, impulse);
  const a = argumenteria(core, impulse);
  const d = dir(a);

  // TEM
  const raw = tem.raw(1, 2);
  const geo = tem.geo(3, 4);
  const len = tem.math(3, 4);

  // viµio
  const live = viµio.run();

  // Gründerblock
  const wakeBlock = RAWATOR();

  return {
    wake: wakeBlock,
    pipeline: { impulse, respo: r, argumenteria: a, dir: d },
    tem: { raw, geo, len },
    viµio: { live }
  };
}


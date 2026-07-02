import { START } from "./start.js";
import { RAWATOR } from "./rawator.js";
import { aWAKE } from "./aWAKE.js";
import { SLAVE_PIPELINE } from "./slave-pipeline.js";
import { GALAXY_SLAVE } from "./GALAXY-SLAVE.js";
import { GALAXY_WARP_PIPE } from "./galaxy-warp-pipeline.js";
import { WURMLOCH_CORE_PIPE } from "./wurmloch-core-pipeline.js";

export function DEMN() {
  const master = START();
  const raw = RAWATOR();
  const awake = aWAKE.run();
  const slave = SLAVE_PIPELINE(master);
  const galaxySlave = GALAXY_SLAVE.run(master.wake.id);
  const galaxyWarp = GALAXY_WARP_PIPE(master);
  const wurm = WURMLOCH_CORE_PIPE();

  return { master, raw, awake, slave, galaxySlave, galaxyWarp, wurm };
}


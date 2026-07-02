import { TMP } from "./SUB/tmp.js";

export function DEMN() {
  const master = START();
  const raw = RAWATOR();
  const awake = aWAKE.run();
  const slave = SLAVE_PIPELINE(master);
  const galaxySlave = GALAXY_SLAVE.run(master.wake.id);
  const galaxyWarp = GALAXY_WARP_PIPE(master);
  const wurm = WURMLOCH_CORE_PIPE();
  const tmp = TMP(awake, raw);

  return {
    master,
    raw,
    awake,
    slave,
    galaxySlave,
    galaxyWarp,
    wurm,
    tmp
  };
}


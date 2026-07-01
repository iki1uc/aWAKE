import { GALAXY_SLAVE } from "./GALAXY_SLAVE.js";
import { GALAXY_WARP } from "./GALAXY_WARP.js";

export function GALAXY_WARP_PIPE(masterBlock) {

  const slaveResult = GALAXY_SLAVE.run(masterBlock.wake.id);

  const space = slaveResult.hold + ":" + slaveResult.sector;

  const warpNormal = GALAXY_WARP.run(space, "normal");
  const warpWorm = GALAXY_WARP.run(space, "worm");

  return {
    master: masterBlock,
    slave: slaveResult,
    warp: {
      normal: warpNormal,
      worm: warpWorm
    }
  };
}


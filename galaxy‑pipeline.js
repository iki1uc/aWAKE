import { SLAVE } from "./slave.js";
import { GALAXY_SLAVE } from "./GALAXY_SLAVE.js";

export function GALAXY_PIPE(masterBlock) {

  const slaveResult = SLAVE.run(masterBlock.wake.id);

  const galaxyInput = slaveResult.scan + ":" + slaveResult.tick;

  const galaxyResult = GALAXY_SLAVE.run(galaxyInput);

  return {
    master: masterBlock,
    slave: slaveResult,
    galaxy: galaxyResult
  };
}


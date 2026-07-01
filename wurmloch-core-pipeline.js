import { START_GALAXY_WARP } from "./START_GALAXY_WARP.js";
import { WURMLOCH_CORE } from "./wurmloch-core.js";

export function WURMLOCH_CORE_PIPE() {
  const warpBlock = START_GALAXY_WARP();

  const space =
    warpBlock.warp.worm.gate + ":" + warpBlock.warp.worm.warp;

  const coreResult = WURMLOCH_CORE.run(space);

  return {
    warp: warpBlock,
    core: coreResult
  };
}


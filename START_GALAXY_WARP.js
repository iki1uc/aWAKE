import { START_GALAXY } from "./START_GALAXY.js";
import { GALAXY_WARP_PIPE } from "./galaxy-warp-pipeline.js";

export function START_GALAXY_WARP() {
  const galaxyBlock = START_GALAXY();
  return GALAXY_WARP_PIPE(galaxyBlock);
}


import { START } from "./start.js";
import { GALAXY_PIPE } from "./galaxy-pipeline.js";

export function START_GALAXY() {
  const masterBlock = START();
  return GALAXY_PIPE(masterBlock);
}

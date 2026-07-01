import { START } from "./start.js";
import { SLAVE_PIPELINE } from "./slave-pipeline.js";

export function START_SLAVE() {
  const masterBlock = START();
  return SLAVE_PIPELINE(masterBlock);
}


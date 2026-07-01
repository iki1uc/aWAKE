import { SLAVE } from "./slave.js";

export function SLAVE_PIPELINE(masterBlock) {

  const input = masterBlock.wake.id + ":" + masterBlock.wake.state;

  const result = SLAVE.run(input);

  return {
    master: masterBlock,
    slave: result
  };
}

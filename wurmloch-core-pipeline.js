import { WURMLOCH_CORE } from "./wurmloch-core.js";
import { DEMN } from "./DEMN.js";

export function WURMLOCH_CORE_PIPE() {

  const demn = DEMN();
  const space = demn.master.wake.id + ":" + demn.vec92;

  const warp = WURMLOCH_CORE.run(space);

  return {
    demn,
    warp,
    core: WURMLOCH_CORE
  };
}

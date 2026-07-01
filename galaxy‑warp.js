export const GALAXY_WARP = {
  id: "GALAXY_WARP",
  warpCount: 0,

  normal(space) {
    return `NORMAL_GATE(${space})`;
  },

  worm(space) {
    return `WURMLOCH_GATE(${space})`;
  },

  run(space, mode = "normal") {
    this.warpCount++;

    if (mode === "worm") {
      return {
        id: this.id,
        warp: this.warpCount,
        gate: this.worm(space),
        mode: "WURMLOCH"
      };
    }

    return {
      id: this.id,
      warp: this.warpCount,
      gate: this.normal(space),
      mode: "NORMAL"
    };
  }
};


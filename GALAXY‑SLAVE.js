export const GALAXY_SLAVE = {
  id: "GALAXY_SLAVE",
  sector: 0,
  load: 0,

  hold(space) {
    return `HOLD(${space})`;
  },

  expand(space) {
    return `EXPAND(${space})`;
  },

  shift(space) {
    return `SHIFT(${space})`;
  },

  run(space) {
    this.sector++;
    this.load += 1;

    return {
      id: this.id,
      sector: this.sector,
      load: this.load,
      hold: this.hold(space),
      expand: this.expand(space),
      shift: this.shift(space)
    };
  }
};


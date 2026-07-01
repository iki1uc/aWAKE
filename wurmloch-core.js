export const WURMLOCH_CORE = {
  id: "WURMLOCH_CORE",
  state: "ACTIVE",
  depth: 0,

  fold(space) {
    return `FOLD(${space})`;
  },

  tunnel(space) {
    return `TUNNEL(${space})`;
  },

  run(space) {
    this.depth++;

    return {
      id: this.id,
      depth: this.depth,
      fold: this.fold(space),
      tunnel: this.tunnel(space)
    };
  }
};


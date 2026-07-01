export const SLAVE = {
  id: "SLAVE",
  mode: "WORK",
  tick: 0,

  scan(x) {
    return `SCAN(${x})`;
  },

  carry(x) {
    return `CARRY(${x})`;
  },

  push(x) {
    return `PUSH(${x})`;
  },

  run(input) {
    this.tick++;

    return {
      id: this.id,
      tick: this.tick,
      scan: this.scan(input),
      carry: this.carry(input),
      push: this.push(input)
    };
  }
};


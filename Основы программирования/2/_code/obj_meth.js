// is this?

const ob = {
  a: 30,
  b: 40,
  bl: {
    a: this.a,
    b: 'bl_b',
    is: function() {
      debugger
      return 0;
    }
  },
  sum: function() {
    debugger
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  }
}
debugger

const v_1 = ob.sum();
const v_2 = ob.mul();
const v_3 = ob.bl.is();


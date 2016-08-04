
var should = require('should');
var rects = require('../rectangles.js');

var tests = [
  {m: 'intersect', p: [{x1: 20, y1: 20, x2: 100, y2: 100}, {x1: 80, y1: 80, x2: 300, y2: 300}], r: true},
  {m: 'intersect', p: [{x1: 20, y1: 20, x2: 70, y2: 70}, {x1: 80, y1: 80, x2: 300, y2: 300}], r: false},
  {m: 'perimeter', p: [{x1: 20, y1: 20, x2: 28, y2: 24}], r: 24}
];

describe('Rectangles', function() {

  for (var i = 0; i < tests.length; i++) {

    (function(i) {

      it('Should work with ' + (tests[i].label || "->" + tests[i].m + "(" + tests[i].p.join(", ") + ")"), function() {

        var c = tests[i];
        if (typeof c.r !== 'number')
          rects[c.m].apply(rects, c.p).should.be.equal(c.r);
        else
          rects[c.m].apply(rects, c.p).should.be.approximately(c.r, 1e-15);
      });

    })(i);
  }
});

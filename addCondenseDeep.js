'use strict';

var getMixOrPatchIn = require('./private/getMixOrPatchIn.js');
var getCondenseDeep = require('./getCondenseDeep.js');

function addCondenseDeep(_) {
  var mixOrPatchIn = getMixOrPatchIn.default(_);
  return mixOrPatchIn('condenseDeep', getCondenseDeep(_));
}

module.exports = addCondenseDeep;

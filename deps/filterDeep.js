'use strict';

var _merge = require('lodash/merge');
var isArray = require('./own/isArray.js');
var _isObject = require('lodash/isObject');
var pathToString = require('./pathToString.js');
var eachDeep$1 = require('./eachDeep.js');
var condenseDeep$1 = require('./condenseDeep.js');
var _clone = require('lodash/clone');
var exists$1 = require('./exists.js');
var _cloneDeep = require('lodash/cloneDeep');
var _each = require('lodash/each');
var _eachRight = require('lodash/eachRight');
var _has = require('lodash/has');
var _set = require('lodash/set');
var _unset = require('lodash/unset');
var _isPlainObject = require('lodash/isPlainObject');
var _iteratee = require('lodash/iteratee');
var obtain = require('./obtain.js');

var deps = _merge(
  {
    merge: _merge,
    clone: _clone,
    cloneDeep: _cloneDeep,
    isArray: isArray,
    isObject: _isObject,
    each: _each,
    eachRight: _eachRight,
    has: _has,
    set: _set,
    unset: _unset,
    isPlainObject: _isPlainObject,
    iteratee: _iteratee,
  },
  eachDeep$1.default,
  pathToString.default,
  obtain.default,
  condenseDeep$1.default,
  exists$1.default
);

exports.default = deps;

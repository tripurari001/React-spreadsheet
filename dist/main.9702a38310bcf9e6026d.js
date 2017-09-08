webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(113);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SetFileName = exports.SetFileName = 'SET_FILE_NAME';

var SetActiveCell = exports.SetActiveCell = 'SET_ACTIVE_CELL';

var SetCellValue = exports.SetCellValue = 'SET_CELL_VALUE';

var AddHybridCell = exports.AddHybridCell = 'ADD_HYBRID_CELL';

var RemoveHybridCell = exports.RemoveHybridCell = 'REMOVE_HYBRID_CELL';

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(262),
    getValue = __webpack_require__(267);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(67),
    getRawTag = __webpack_require__(263),
    objectToString = __webpack_require__(264);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// define no of column and row
// and create a array of object to represent
// state of spreadshee
var numberOfColumn = 8;
var numberOfRow = 15;

var lastColumn = exports.lastColumn = String.fromCharCode(97 + (numberOfColumn - 1));
var lastRow = exports.lastRow = numberOfRow - 1;

// create a object with key of a,b,c,d etc.
// one column object present one row
// each key of object represent a column
function createColumn(noOfColumn) {
  var column = {};
  // carecter code of 'a' to use in function 'String.fromCharCode()'
  var charCodeStart = 97;
  var charCodeEnd = 97 + (noOfColumn - 1);
  for (var i = charCodeStart; i <= charCodeEnd && i <= 122; i += 1) {
    column[String.fromCharCode(i)] = '';
  }

  return column;
}

// one column object represent one row create a array to 
// represent required no of row
function createSheet(noOfColumn, noOfRow) {
  var sheet = [];
  var column = createColumn(noOfColumn);
  for (var i = 0; i < noOfRow; i += 1) {
    sheet.push(column);
  }

  return sheet;
}

// create a object represent initial state of app
var initialStore = {
  fileName: 'Untitled Spradesheet',
  activeCell: {
    currentActiveCell: 'a1',
    isEditable: false,
    byDubleClick: false
  },
  sheet: createSheet(numberOfColumn, numberOfRow),
  hybridCells: {
    cells: {},
    lastAction: {
      actionType: '',
      cellId: ''
    }
  }
};

exports.default = initialStore;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(252),
    listCacheDelete = __webpack_require__(253),
    listCacheGet = __webpack_require__(254),
    listCacheHas = __webpack_require__(255),
    listCacheSet = __webpack_require__(256);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(111);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(276);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCellValue = exports.setActiveCell = undefined;

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setActiveCell = exports.setActiveCell = function setActiveCell(currentActiveCell, isEditable, byDubleClick) {
  return {
    type: types.SetActiveCell,
    currentActiveCell: currentActiveCell,
    isEditable: isEditable,
    byDubleClick: isEditable && byDubleClick
  };
};

var setCellValue = exports.setCellValue = function setCellValue(columnId, rowNo, value) {
  return {
    type: types.SetCellValue,
    columnId: columnId,
    rowNo: rowNo,
    value: value
  };
};

/***/ }),
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadAsCsv = exports.convertToCsv = exports.autoSave = undefined;
exports.lsTest = lsTest;

var _ConfigStore = __webpack_require__(110);

var _ConfigStore2 = _interopRequireDefault(_ConfigStore);

var _reduxWatcher = __webpack_require__(247);

var _reduxWatcher2 = _interopRequireDefault(_reduxWatcher);

var _util = __webpack_require__(68);

var _CellActions = __webpack_require__(43);

var _mathFunction = __webpack_require__(318);

var _mathFunction2 = _interopRequireDefault(_mathFunction);

var _ActionType = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var watcher = new _reduxWatcher2.default(_ConfigStore2.default);

var removeWatcherData = {};

// add watcher function add watcher on cells and 
// set callback function to update the value of hybridcell
// depending on other cell value
// also set the removeWatcherData to remove watcher in future
var addWatcher = function addWatcher(toWatch, funcType, hybridCellId) {
  var callbackFunc = function callbackFunc(_ref) {
    var currentState = _ref.currentState;

    var value = [];
    toWatch.forEach(function (e) {
      value.push(currentState.sheet[(0, _util.getRowNo)(e)][(0, _util.getColumnId)(e)]);
    });
    value = _mathFunction2.default[funcType](value);
    // to make it async so that it don't get stuck in infinite callback
    setTimeout(function () {
      _ConfigStore2.default.dispatch((0, _CellActions.setCellValue)((0, _util.getColumnId)(hybridCellId), (0, _util.getRowNo)(hybridCellId), value));
    }, 0);
  };

  // add entry in removeWatcherData
  removeWatcherData[hybridCellId] = [];

  // start watching cells and add removeWatcher method
  toWatch.forEach(function (e) {
    watcher.watch(['sheet', (0, _util.getRowNo)(e), (0, _util.getColumnId)(e)], callbackFunc);

    // add respective removeWatcher function to unWatch latter
    removeWatcherData[hybridCellId].push(function () {
      watcher.off(['sheet', (0, _util.getRowNo)(e), (0, _util.getColumnId)(e)], callbackFunc);
    });
  });

  // after adding watcher once run the callback function to calculate 
  // current value of hybridCell
  callbackFunc({ currentState: _ConfigStore2.default.getState() });
};

// to remove watch on unused cells
var removeWatcher = function removeWatcher(hybridCellId) {
  if (removeWatcherData[hybridCellId]) {
    removeWatcherData[hybridCellId].forEach(function (e) {
      e();
    });
  }
};

// initWatcher takes object witch contain all hybridCell (state.hybridcells.cells)
// as parameter start watcher if there is already any hybrid cell present in state
// also set watcher to manage future change in hybridCells (gets added or removed)
var initWatcher = function initWatcher() {
  var hybridCells = _ConfigStore2.default.getState().hybridCells.cells;
  var hybridCellIds = Object.keys(hybridCells);
  if (hybridCellIds.length > 0) {
    hybridCellIds.forEach(function (hybridCellId) {
      var toWatch = hybridCells[hybridCellId].cellToWatch;
      var funcType = hybridCells[hybridCellId].callbackFunc;
      addWatcher(toWatch, funcType, hybridCellId);
    });
  }
  // watch for new hybridCell add or remove
  watchHybriCellChange();
};

// whenever new hybridcell added or removed run respective function
var watchHybriCellChange = function watchHybriCellChange() {
  watcher.watch(['hybridCells', 'cells'], function (_ref2) {
    var currentState = _ref2.currentState;

    var cellId = currentState.hybridCells.lastAction.cellId;
    if (currentState.hybridCells.lastAction.actionType === _ActionType.AddHybridCell) {
      var toWatch = currentState.hybridCells.cells[cellId].cellToWatch;
      var funcType = currentState.hybridCells.cells[cellId].callbackFunc;
      addWatcher(toWatch, funcType, cellId);
    }

    if (currentState.hybridCells.lastAction.actionType === _ActionType.RemoveHybridCell) {
      removeWatcher(cellId);
    }
  });
};

// test for localstorage
function lsTest() {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

// auto save to local storage on every 10 sec
var autoSave = exports.autoSave = function autoSave() {
  if (!lsTest()) return;
  var timerId = setInterval(function () {
    var data = JSON.stringify(_ConfigStore2.default.getState());
    localStorage.setItem('state', data);
  }, 10000);
  return timerId;
};

var convertToCsv = exports.convertToCsv = function convertToCsv(sheet) {
  var csvData = [];
  sheet.forEach(function (columnObj) {
    var keys = Object.keys(columnObj);
    var rowText = '';
    keys.forEach(function (key) {
      if (columnObj[key]) {
        rowText += columnObj[key] + ',';
      }
    });
    csvData.push(rowText);
  });
  return csvData.join('\n');
};

var downloadAsCsv = exports.downloadAsCsv = function downloadAsCsv() {
  var state = _ConfigStore2.default.getState();
  var a = document.createElement('a');
  a.href = 'data:attachment/csv,' + encodeURI(convertToCsv(state.sheet));
  a.target = '_blank';
  a.download = state.fileName + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

exports.default = initWatcher;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowNo = exports.getColumnId = exports.getCellFromString = exports.inputExitHandler = exports.keyDownHandler = undefined;
exports.isCharacterKeyPress = isCharacterKeyPress;

var _CellActions = __webpack_require__(43);

var _InitialStore = __webpack_require__(37);

var _HybridCellActions = __webpack_require__(317);

// to check if key pressed will produce a charecter
function isCharacterKeyPress(evt) {
  if (typeof evt.which === 'undefined') {
    // This is IE, which only fires keypress events for printable keys
    return true;
  } else if (typeof evt.which === 'number' && evt.which > 0) {
    // In other browsers except old versions of WebKit, evt.which is
    // only greater than zero if the keypress is a printable key.
    // We need to filter out backspace and ctrl/alt/meta key combinations
    return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;
  }
  return false;
}

// manage what happen on keyDown event
var keyDownHandler = exports.keyDownHandler = function keyDownHandler(e, dispatch, columnId, rowNo, isEditable, byDubleClick) {
  switch (e.keyCode) {
    case 27:
      // esc key exit edit mode
      if (isEditable) {
        dispatch((0, _CellActions.setActiveCell)(columnId + rowNo, false));
      }
      break;
    case 37:
      // left arrow
      if (columnId !== 'a' && !byDubleClick) {
        var newActiveCell = String.fromCharCode(columnId.charCodeAt(0) - 1) + rowNo;
        dispatch((0, _CellActions.setActiveCell)(newActiveCell, false));
      }
      break;
    case 38:
      // up arrow
      if (rowNo !== 0) {
        var _newActiveCell = columnId + (rowNo - 1);
        dispatch((0, _CellActions.setActiveCell)(_newActiveCell, false));
      }
      break;
    case 39:
      // right arrow
      if (columnId !== _InitialStore.lastColumn && !byDubleClick) {
        var _newActiveCell2 = String.fromCharCode(columnId.charCodeAt(0) + 1) + rowNo;
        dispatch((0, _CellActions.setActiveCell)(_newActiveCell2, false));
      }
      break;
    case 40:
      // down arrow
      if (rowNo !== _InitialStore.lastRow) {
        var _newActiveCell3 = columnId + (rowNo + 1);
        dispatch((0, _CellActions.setActiveCell)(_newActiveCell3, false));
      }
      break;
    default:
      // if not in input mode then reset cell value and enter input mode
      if (isCharacterKeyPress(e) && !isEditable) {
        dispatch((0, _CellActions.setActiveCell)(columnId + rowNo, true, false));
        dispatch((0, _CellActions.setCellValue)(columnId, rowNo, ''));
      }
  }
};

// whenever user switch cell or exit input mode
// this function will check if this cell contain a formula or simple value
// and dispatch a appropiate action
var inputExitHandler = exports.inputExitHandler = function inputExitHandler(dispatch, columnId, rowNo, text, isHybridCell) {
  if (typeof text === 'string' && text.trim().charAt(0) === '=') {
    var regex = /\s/g;
    // trim white space convert to lowercase and remove '='
    var formula = text.replace(regex, '').toLowerCase().slice(1);
    var cellAndFunction = extractCellAndFunction(formula);
    dispatch((0, _HybridCellActions.addHybridCell)(columnId + rowNo, '=' + formula, cellAndFunction.toWatch, cellAndFunction.func));
  } else if (isHybridCell) {
    dispatch((0, _HybridCellActions.removeHybridCell)(columnId + rowNo));
  }
};

// return appropriate function based on given string(formula entered on cell)
// and also return a array of cellId on witch result of formula depend
var extractCellAndFunction = function extractCellAndFunction(formula) {
  var testInbuiltFormula = /^\w{3}\(\w{2,3}:\w{2,3}\)$/g;
  var testUserFormula = /^\w{2,3}(\+|-|\*|\/)\w{2,3}$/g;
  var cellAndFunction = {};

  if (formula.search(testInbuiltFormula) > -1) {
    cellAndFunction.func = formula.slice(0, 3);
    // generate array of toWatch if user enters
    // something like "A1:B9"
    cellAndFunction.toWatch = getToWatchArray(formula.slice(formula.indexOf('(') + 1, -1).split(':'));
  } else if (formula.search(testUserFormula) > -1) {
    if (formula.indexOf('+') > -1) {
      cellAndFunction.toWatch = formula.split('+');
      cellAndFunction.func = 'sum';
    }

    if (formula.indexOf('-') > -1) {
      cellAndFunction.toWatch = formula.split('-');
      cellAndFunction.func = 'substract';
    }

    if (formula.indexOf('*') > -1) {
      cellAndFunction.toWatch = formula.split('*');
      cellAndFunction.func = 'multiplication';
    }

    if (formula.indexOf('/') > -1) {
      cellAndFunction.toWatch = formula.split('/');
      cellAndFunction.func = 'divide';
    }
  } else {
    cellAndFunction = false;
  }
  return cellAndFunction;
};

// return somthig like " arr[12][c] " if "c12" is given
var getCellFromString = exports.getCellFromString = function getCellFromString(obj, str) {
  return obj[parseInt(str.slice(1), 10)][str.charAt(0)];
};

var getColumnId = exports.getColumnId = function getColumnId(str) {
  return str.charAt(0);
};

var getRowNo = exports.getRowNo = function getRowNo(str) {
  return parseInt(str.slice(1), 10);
};

// generate array of toWatch if user enters
// something like "A1:B9"
var getToWatchArray = function getToWatchArray(cell) {
  var i = cell[0].charCodeAt(0);
  var startJ = parseInt(cell[0].slice(1), 10);
  var endI = cell[1].charCodeAt(0);
  var endJ = parseInt(cell[1].slice(1), 10);
  var toReturn = [];

  for (; i <= endI; i += 1) {
    for (var j = startJ; j <= endJ; j += 1) {
      toReturn.push(String.fromCharCode(i) + j.toString());
    }
  }
  return toReturn;
};

/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(36);

var _RootReducer = __webpack_require__(243);

var _RootReducer2 = _interopRequireDefault(_RootReducer);

var _InitialStore = __webpack_require__(37);

var _InitialStore2 = _interopRequireDefault(_InitialStore);

var _watch = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var savedStore = _InitialStore2.default;

if ((0, _watch.lsTest)() && localStorage.getItem('state')) {
  savedStore = JSON.parse(localStorage.getItem('state')) || _InitialStore2.default;
}

var store = (0, _redux.createStore)(_RootReducer2.default, savedStore,
// for redux dev tool
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

exports.default = store;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObject = __webpack_require__(114);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(63)))

/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(268),
    mapCacheDelete = __webpack_require__(275),
    mapCacheGet = __webpack_require__(277),
    mapCacheHas = __webpack_require__(278),
    mapCacheSet = __webpack_require__(279);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(280),
    arraySome = __webpack_require__(283),
    cacheHas = __webpack_require__(284);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(301);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(303),
    baseUnary = __webpack_require__(304),
    nodeUtil = __webpack_require__(305);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(122);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(75);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(26);

var _App = __webpack_require__(239);

var _App2 = _interopRequireDefault(_App);

var _ConfigStore = __webpack_require__(110);

var _ConfigStore2 = _interopRequireDefault(_ConfigStore);

__webpack_require__(323);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _ConfigStore2.default },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

//hot module reloading settings 
if (false) {
  module.hot.accept();
}

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _HeaderContainer = __webpack_require__(240);

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

var _SheetContainer = __webpack_require__(319);

var _SheetContainer2 = _interopRequireDefault(_SheetContainer);

var _watch = __webpack_require__(65);

var _watch2 = _interopRequireDefault(_watch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      (0, _watch2.default)();
      this.timerId = (0, _watch.autoSave)();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timerId) {
        clearInterval(this.timerId);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderContainer2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'sheet-wrap' },
          _react2.default.createElement(_SheetContainer2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(26);

var _FileActions = __webpack_require__(241);

var _Header = __webpack_require__(242);

var _Header2 = _interopRequireDefault(_Header);

var _util = __webpack_require__(68);

var _CellActions = __webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    fileName: state.fileName,
    columnId: (0, _util.getColumnId)(state.activeCell.currentActiveCell),
    rowNo: (0, _util.getRowNo)(state.activeCell.currentActiveCell)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onChangeHandler: function onChangeHandler(e) {
      dispatch((0, _FileActions.setFileName)(e.target.value));
    },
    setInbuiltFormula: function setInbuiltFormula(columnId, rowNo, value) {
      dispatch((0, _CellActions.setActiveCell)(columnId + rowNo, true, false));
      dispatch((0, _CellActions.setCellValue)(columnId, rowNo, value));
    }
  };
};

var HeaderContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Header2.default);

exports.default = HeaderContainer;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var setFileName = function setFileName(name) {
  return {
    type: types.SetFileName,
    name: name
  };
};

exports.default = setFileName;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _watch = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  var columnId = props.columnId,
      rowNo = props.rowNo,
      setInbuiltFormula = props.setInbuiltFormula;

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-default navbar-fixed-top' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'navbar-header' },
        _react2.default.createElement(
          'form',
          { className: 'navbar-form navbar-left' },
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            placeholder: 'Sprasheet Name',
            value: props.fileName,
            onChange: props.onChangeHandler
          })
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'nav navbar-nav navbar-right' },
        _react2.default.createElement(
          'li',
          { className: 'dropdown' },
          _react2.default.createElement(
            'a',
            { className: 'pointer' },
            'Functions'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'dropdown-menu' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick(e) {
                    setInbuiltFormula(columnId, rowNo, '=sum(a1:b1)');
                  },
                  className: 'pointer'
                },
                'sum(a1:b1)'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick(e) {
                    setInbuiltFormula(columnId, rowNo, '=avg(a1:b1)');
                  },
                  className: 'pointer'
                },
                'avg(a1:b1)'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick(e) {
                    setInbuiltFormula(columnId, rowNo, '=min(a1:b1)');
                  },
                  className: 'pointer'
                },
                'min(a1:b1)'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                {
                  onClick: function onClick(e) {
                    setInbuiltFormula(columnId, rowNo, '=max(a1:b1)');
                  },
                  className: 'pointer'
                },
                'max(a1:b1)'
              )
            )
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { className: 'pointer' },
            'Tips and Help'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { className: 'pointer', onClick: function onClick() {
                (0, _watch.downloadAsCsv)();
              } },
            'Download as Csv'
          )
        )
      )
    )
  );
}

Header.propTypes = {
  fileName: _propTypes2.default.string.isRequired,
  onChangeHandler: _propTypes2.default.func.isRequired,
  setInbuiltFormula: _propTypes2.default.func.isRequired,
  columnId: _propTypes2.default.string.isRequired,
  rowNo: _propTypes2.default.number.isRequired
};

exports.default = Header;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(36);

var _CellReducers = __webpack_require__(244);

var _HybridCellReducers = __webpack_require__(245);

var _HybridCellReducers2 = _interopRequireDefault(_HybridCellReducers);

var _FileReducers = __webpack_require__(246);

var _FileReducers2 = _interopRequireDefault(_FileReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  fileName: _FileReducers2.default,
  activeCell: _CellReducers.ActiveCellReducer,
  sheet: _CellReducers.SheetReducer,
  hybridCells: _HybridCellReducers2.default
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.ActiveCellReducer = ActiveCellReducer;
exports.SheetReducer = SheetReducer;

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

var _InitialStore = __webpack_require__(37);

var _InitialStore2 = _interopRequireDefault(_InitialStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialActiveCell = _InitialStore2.default.activeCell;
var initialSheet = _InitialStore2.default.sheet;

function ActiveCellReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialActiveCell;
  var action = arguments[1];

  switch (action.type) {
    case types.SetActiveCell:
      return _extends({}, state, {
        currentActiveCell: action.currentActiveCell,
        isEditable: action.isEditable,
        byDubleClick: action.isEditable && action.byDubleClick
      });
    default:
      return state;
  }
}

function SheetReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSheet;
  var action = arguments[1];

  switch (action.type) {
    case types.SetCellValue:
      return state.map(function (item, index) {
        if (index !== action.rowNo) {
          return item;
        }
        return _extends({}, item, _defineProperty({}, action.columnId, action.value));
      });
    default:
      return state;
  }
}

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = HybridCellReducer;

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

var _InitialStore = __webpack_require__(37);

var _InitialStore2 = _interopRequireDefault(_InitialStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialHybridCell = _InitialStore2.default.hybridCells;

function HybridCellReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialHybridCell;
  var action = arguments[1];

  switch (action.type) {
    case types.AddHybridCell:
      return _extends({}, state, {
        cells: _extends({}, state.cells, _defineProperty({}, action.cellId, {
          callbackFunc: action.callbackFunc,
          cellToWatch: action.cellToWatch,
          formula: action.formula
        })),
        lastAction: {
          cellId: action.cellId,
          actionType: types.AddHybridCell
        }
      });
    case types.RemoveHybridCell:
      return Object.assign({}, state, {
        cells: Object.keys(state.cells).reduce(function (result, key) {
          if (key !== action.cellId) {
            result[key] = state.cells[key];
          }
          return result;
        }, {})
      }, {
        lastAction: {
          cellId: action.cellId,
          actionType: types.RemoveHybridCell
        }
      });
    default:
      return state;
  }
}

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function FileNameReduicer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Untitled Spradesheet';
  var action = arguments[1];

  switch (action.type) {
    case types.SetFileName:
      return action.name;
    default:
      return state;
  }
}

exports.default = FileNameReduicer;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isEqual = __webpack_require__(248);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _isString = __webpack_require__(316);

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var select = function select(state, selector) {
	return (0, _isString2.default)(selector) ? state[selector] : selector.reduce(function (prev, current) {
		return prev[current];
	}, state);
};

var ReduxWatcher = function () {
	function ReduxWatcher(store) {
		var _this = this;

		_classCallCheck(this, ReduxWatcher);

		var watchList = this.__watchList = {};
		this.__prevState = store.getState();
		store.subscribe(function () {
			var currentState = store.getState();
			var prevState = _this.__prevState;
			Object.keys(watchList).forEach(function (key) {
				var listeners = watchList[key];
				if (!listeners) {
					return;
				}
				var selector = JSON.parse(key);
				var prevValue = select(prevState, selector);
				var currentValue = select(currentState, selector);
				var isEqualFn = listeners.isEqual || _isEqual2.default;

				if (!isEqualFn(prevValue, currentValue)) {
					listeners.forEach(function (listener) {
						return listener({
							store: store,
							selector: selector,
							prevState: prevState,
							currentState: currentState,
							prevValue: prevValue,
							currentValue: currentValue
						});
					});
				}
			});
			_this.__prevState = currentState;
		});
		this.watch = this.watch.bind(this);
		this.off = this.off.bind(this);
	}

	_createClass(ReduxWatcher, [{
		key: 'watch',
		value: function watch(selector, listener) {
			var watchList = this.__watchList;
			var selectorStr = JSON.stringify(selector);
			watchList[selectorStr] = watchList[selectorStr] || [];
			watchList[selectorStr].push(listener);
		}
	}, {
		key: 'off',
		value: function off(selector, listener) {
			var watchList = this.__watchList;
			var selectorStr = JSON.stringify(selector);
			if (!watchList[selectorStr]) {
				//throw new Error(`No listener for ${selectorStr}`)
				return;
			}
			var listeners = watchList[selectorStr];
			var listenerIndex = listeners.indexOf(listener);
			if (listenerIndex >= 0) {
				listeners.splice(listeners.indexOf(listener), 1);
			} else {
				//throw new Error(`No such listener for ${selectorStr}`)
				return;
			}
			if (listeners.length === 0) {
				delete watchList[selectorStr];
			}
		}
	}, {
		key: 'setCompareFunction',
		value: function setCompareFunction(selector, isEqual) {
			var selectorStr = JSON.stringify(selector);
			this.__watchList[selectorStr].isEqual = isEqual;
		}
	}, {
		key: 'clearCompareFunction',
		value: function clearCompareFunction(selector) {
			this.setCompareFunction(selector);
		}
	}]);

	return ReduxWatcher;
}();

exports.default = ReduxWatcher;


ReduxWatcher.select = select;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(249);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(250),
    isObjectLike = __webpack_require__(29);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(251),
    equalArrays = __webpack_require__(117),
    equalByTag = __webpack_require__(285),
    equalObjects = __webpack_require__(289),
    getTag = __webpack_require__(311),
    isArray = __webpack_require__(42),
    isBuffer = __webpack_require__(118),
    isTypedArray = __webpack_require__(119);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(38),
    stackClear = __webpack_require__(257),
    stackDelete = __webpack_require__(258),
    stackGet = __webpack_require__(259),
    stackHas = __webpack_require__(260),
    stackSet = __webpack_require__(261);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 252 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(39);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(38);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 258 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 259 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 260 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(38),
    Map = __webpack_require__(66),
    MapCache = __webpack_require__(116);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(112),
    isMasked = __webpack_require__(265),
    isObject = __webpack_require__(114),
    toSource = __webpack_require__(115);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(67);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 264 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(266);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 267 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(269),
    ListCache = __webpack_require__(38),
    Map = __webpack_require__(66);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(270),
    hashDelete = __webpack_require__(271),
    hashGet = __webpack_require__(272),
    hashHas = __webpack_require__(273),
    hashSet = __webpack_require__(274);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(40);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 271 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(40);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(40);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(40);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(41);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(41);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(41);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(41);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(116),
    setCacheAdd = __webpack_require__(281),
    setCacheHas = __webpack_require__(282);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 282 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 283 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 284 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(67),
    Uint8Array = __webpack_require__(286),
    eq = __webpack_require__(111),
    equalArrays = __webpack_require__(117),
    mapToArray = __webpack_require__(287),
    setToArray = __webpack_require__(288);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 287 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 288 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(290);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(291),
    getSymbols = __webpack_require__(293),
    keys = __webpack_require__(296);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(292),
    isArray = __webpack_require__(42);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 292 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(294),
    stubArray = __webpack_require__(295);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 295 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(297),
    baseKeys = __webpack_require__(306),
    isArrayLike = __webpack_require__(310);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(298),
    isArguments = __webpack_require__(299),
    isArray = __webpack_require__(42),
    isBuffer = __webpack_require__(118),
    isIndex = __webpack_require__(302),
    isTypedArray = __webpack_require__(119);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 298 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(300),
    isObjectLike = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isObjectLike = __webpack_require__(29);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 301 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 302 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isLength = __webpack_require__(120),
    isObjectLike = __webpack_require__(29);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 304 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(113);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(64)(module)))

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(307),
    nativeKeys = __webpack_require__(308);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 307 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(309);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 309 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(112),
    isLength = __webpack_require__(120);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(312),
    Map = __webpack_require__(66),
    Promise = __webpack_require__(313),
    Set = __webpack_require__(314),
    WeakMap = __webpack_require__(315),
    baseGetTag = __webpack_require__(28),
    toSource = __webpack_require__(115);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(20),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(28),
    isArray = __webpack_require__(42),
    isObjectLike = __webpack_require__(29);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeHybridCell = exports.addHybridCell = undefined;

var _ActionType = __webpack_require__(14);

var types = _interopRequireWildcard(_ActionType);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addHybridCell = exports.addHybridCell = function addHybridCell(cellId, formula, cellToWatch, callbackFunc) {
  return {
    type: types.AddHybridCell,
    cellId: cellId,
    formula: formula,
    cellToWatch: cellToWatch,
    callbackFunc: callbackFunc
  };
};

var removeHybridCell = exports.removeHybridCell = function removeHybridCell(cellId) {
  return {
    type: types.RemoveHybridCell,
    cellId: cellId
  };
};

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = exports.sum = function sum(a) {
  return a.reduce(function (prev, current) {
    return prev + parseFloat(current);
  }, 0);
};

var avg = exports.avg = function avg(a) {
  var total = a.reduce(function (prev, current) {
    return prev + parseFloat(current);
  }, 0);
  return total / a.length;
};

var min = exports.min = function min(a) {
  return a.reduce(function (prev, current) {
    return Math.min(prev, parseFloat(current));
  });
};

var max = exports.max = function max(a) {
  return a.reduce(function (prev, current) {
    return Math.max(prev, parseFloat(current));
  });
};

var substract = exports.substract = function substract(a) {
  return parseFloat(a[0]) - parseFloat(a[1]);
};

var multiplication = exports.multiplication = function multiplication(a) {
  return a.reduce(function (prev, current) {
    return prev * parseFloat(current);
  }, 1);
};

var divide = exports.divide = function divide(a) {
  return parseFloat(a[0]) / parseFloat(a[1]);
};

var mathFunc = {
  sum: sum,
  min: min,
  avg: avg,
  max: max,
  substract: substract,
  multiplication: multiplication,
  divide: divide
};

exports.default = mathFunc;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(26);

var _Sheet = __webpack_require__(320);

var _Sheet2 = _interopRequireDefault(_Sheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    sheet: state.sheet
  };
};

var SheetContainer = (0, _reactRedux.connect)(mapStateToProps, null)(_Sheet2.default);

exports.default = SheetContainer;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SheetCellContainer = __webpack_require__(321);

var _SheetCellContainer2 = _interopRequireDefault(_SheetCellContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sheet = function (_React$Component) {
  _inherits(Sheet, _React$Component);

  function Sheet() {
    _classCallCheck(this, Sheet);

    return _possibleConstructorReturn(this, (Sheet.__proto__ || Object.getPrototypeOf(Sheet)).apply(this, arguments));
  }

  _createClass(Sheet, [{
    key: 'generateColumn',
    value: function generateColumn(rowNo) {
      // don't generate row no '0'
      // for good UX start counting from 1 not zero
      // example "=a0 + b0" dose not feel netural
      var column = [];
      var keys = Object.keys(this.props.sheet[rowNo]);
      if (rowNo === 0) {
        keys.forEach(function (key) {
          column.push(_react2.default.createElement(
            'td',
            { key: 'cordinate' + key, className: 'text-center cordinate' },
            key.toUpperCase()
          ));
        });
        return column;
      }
      keys.forEach(function (key) {
        column.push(_react2.default.createElement(_SheetCellContainer2.default, { key: key + rowNo, columnId: key, rowNo: rowNo }));
      });
      return column;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var sheet = this.props.sheet;

      return _react2.default.createElement(
        'table',
        { className: 'table table-bordered sheet__table' },
        _react2.default.createElement(
          'tbody',
          null,
          sheet.map(function (obj, rowNo) {
            return _react2.default.createElement(
              'tr',
              { key: rowNo },
              _react2.default.createElement(
                'td',
                { key: 'cordinate' + rowNo, className: 'cordinate text-right' },
                rowNo
              ),
              _this2.generateColumn(rowNo)
            );
          })
        )
      );
    }
  }]);

  return Sheet;
}(_react2.default.Component);

Sheet.propTypes = {
  sheet: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = Sheet;

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(26);

var _SheetCell = __webpack_require__(322);

var _SheetCell2 = _interopRequireDefault(_SheetCell);

var _CellActions = __webpack_require__(43);

var _util = __webpack_require__(68);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var isActive = state.activeCell.currentActiveCell === ownProps.columnId + ownProps.rowNo;
  var isHybridCell = !!state.hybridCells.cells[ownProps.columnId + ownProps.rowNo];
  var isEditable = isActive && state.activeCell.isEditable;
  return {
    rowNo: ownProps.rowNo,
    columnId: ownProps.columnId,
    isActive: isActive,
    byDubleClick: state.activeCell.byDubleClick,
    isEditable: isEditable,
    text: isHybridCell && isActive && !isEditable ? state.hybridCells.cells[ownProps.columnId + ownProps.rowNo].formula : state.sheet[ownProps.rowNo][ownProps.columnId],
    formula: isHybridCell && state.hybridCells.cells[ownProps.columnId + ownProps.rowNo].formula,
    isHybridCell: isHybridCell
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSingleClickHandler: function onSingleClickHandler(e, columnId, rowNo, isActive) {
      if (isActive) return;
      var currentActiveCell = columnId + rowNo;
      dispatch((0, _CellActions.setActiveCell)(currentActiveCell, false, false));
    },
    onDoubleClickHandler: function onDoubleClickHandler(e, columnId, rowNo, isEditable) {
      if (isEditable) return;
      var currentActiveCell = columnId + rowNo;
      dispatch((0, _CellActions.setActiveCell)(currentActiveCell, true, true));
    },
    onKeyDownHandler: function onKeyDownHandler(e, columnId, rowNo, isEditable, byDubbleClick) {
      (0, _util.keyDownHandler)(e, dispatch, columnId, rowNo, isEditable, byDubbleClick);
    },
    onChangeHandler: function onChangeHandler(value, columnId, rowNo) {
      dispatch((0, _CellActions.setCellValue)(columnId, rowNo, value));
    },
    inputExitHandler: function inputExitHandler(columnId, rowNo, text, isHybridCell) {
      (0, _util.inputExitHandler)(dispatch, columnId, rowNo, text, isHybridCell);
    }
  };
};

var SheetCellContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_SheetCell2.default);

exports.default = SheetCellContainer;

/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(27);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SheetCell = function (_React$Component) {
  _inherits(SheetCell, _React$Component);

  function SheetCell(props) {
    _classCallCheck(this, SheetCell);

    var _this = _possibleConstructorReturn(this, (SheetCell.__proto__ || Object.getPrototypeOf(SheetCell)).call(this, props));

    _this.focusInput = _this.focusInput.bind(_this);
    _this.focusDiv = _this.focusDiv.bind(_this);
    return _this;
  }

  _createClass(SheetCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isActive && !this.props.isEditable) {
        this.focusDiv();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(preProp) {
      var wasEditable = preProp.isEditable;
      var _props = this.props,
          isEditable = _props.isEditable,
          isHybridCell = _props.isHybridCell,
          columnId = _props.columnId,
          rowNo = _props.rowNo;


      if (this.props.isActive && !this.props.isEditable) {
        this.focusDiv();
      }
      if (isEditable && !wasEditable) {
        this.focusInput();
        if (isHybridCell && preProp.text !== this.props.text) {
          this.props.onChangeHandler(preProp.text, columnId, rowNo);
        }
      }
      if (wasEditable && !isEditable) {
        this.props.inputExitHandler(preProp.columnId, preProp.rowNo, preProp.text, preProp.isHybridCell);
      }
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      this.input.focus();
    }
  }, {
    key: 'focusDiv',
    value: function focusDiv() {
      this.div.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          isActive = _props2.isActive,
          isEditable = _props2.isEditable,
          byDubleClick = _props2.byDubleClick,
          rowNo = _props2.rowNo,
          columnId = _props2.columnId,
          text = _props2.text,
          onSingleClickHandler = _props2.onSingleClickHandler,
          onDoubleClickHandler = _props2.onDoubleClickHandler,
          onKeyDownHandler = _props2.onKeyDownHandler,
          onChangeHandler = _props2.onChangeHandler;

      var classNameValue = isActive ? 'sheet__cell--active' : 'sheet__cell';

      return _react2.default.createElement(
        'td',
        {
          onClick: function onClick(e) {
            onSingleClickHandler(e, columnId, rowNo, isActive);
          },
          onDoubleClick: function onDoubleClick(e) {
            onDoubleClickHandler(e, columnId, rowNo, isEditable);
          },
          onKeyDown: function onKeyDown(e) {
            onKeyDownHandler(e, columnId, rowNo, isEditable, byDubleClick);
          },
          className: classNameValue
        },
        _react2.default.createElement(
          'div',
          {
            className: 'sheet__sub-cell',
            tabIndex: '0',
            ref: function ref(div) {
              _this2.div = div;
            }
          },
          isEditable ? _react2.default.createElement('input', {
            className: 'sheet__cell__input',
            value: text,
            onChange: function onChange(e) {
              onChangeHandler(e.target.value, columnId, rowNo);
            },
            ref: function ref(input) {
              _this2.input = input;
            }
          }) : text
        )
      );
    }
  }]);

  return SheetCell;
}(_react2.default.Component);

SheetCell.propTypes = {
  isActive: _propTypes2.default.bool.isRequired,
  byDubleClick: _propTypes2.default.bool.isRequired,
  isEditable: _propTypes2.default.bool.isRequired,
  isHybridCell: _propTypes2.default.bool.isRequired,
  rowNo: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  columnId: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired,
  onSingleClickHandler: _propTypes2.default.func.isRequired,
  onDoubleClickHandler: _propTypes2.default.func.isRequired,
  onKeyDownHandler: _propTypes2.default.func.isRequired,
  onChangeHandler: _propTypes2.default.func.isRequired,
  inputExitHandler: _propTypes2.default.func.isRequired
};

exports.default = SheetCell;

/***/ }),
/* 323 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[121]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yb290LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY29uc3RhbnRzL0FjdGlvblR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9zdG9yZS9Jbml0aWFsU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9hY3Rpb25zL0NlbGxBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvdXRpbC93YXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3ltYm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvdXRpbC91dGlsLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvc3RvcmUvQ29uZmlnU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lcS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jb250YWluZXJzL0hlYWRlckNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2FjdGlvbnMvRmlsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L3JlZHVjZXJzL1Jvb3RSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvcmVkdWNlcnMvQ2VsbFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvcmVkdWNlcnMvSHlicmlkQ2VsbFJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvcmVkdWNlcnMvRmlsZVJlZHVjZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvdXRpbC9yZWR1eC13YXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaFNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fVWludDhBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbm9kZVV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2FjdGlvbnMvSHlicmlkQ2VsbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC91dGlsL21hdGhGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2NvbnRhaW5lcnMvU2hlZXRDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL1NoZWV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQvY29udGFpbmVycy9TaGVldENlbGxDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL1NoZWV0Q2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJTZXRGaWxlTmFtZSIsIlNldEFjdGl2ZUNlbGwiLCJTZXRDZWxsVmFsdWUiLCJBZGRIeWJyaWRDZWxsIiwiUmVtb3ZlSHlicmlkQ2VsbCIsIm51bWJlck9mQ29sdW1uIiwibnVtYmVyT2ZSb3ciLCJsYXN0Q29sdW1uIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwibGFzdFJvdyIsImNyZWF0ZUNvbHVtbiIsIm5vT2ZDb2x1bW4iLCJjb2x1bW4iLCJjaGFyQ29kZVN0YXJ0IiwiY2hhckNvZGVFbmQiLCJpIiwiY3JlYXRlU2hlZXQiLCJub09mUm93Iiwic2hlZXQiLCJwdXNoIiwiaW5pdGlhbFN0b3JlIiwiZmlsZU5hbWUiLCJhY3RpdmVDZWxsIiwiY3VycmVudEFjdGl2ZUNlbGwiLCJpc0VkaXRhYmxlIiwiYnlEdWJsZUNsaWNrIiwiaHlicmlkQ2VsbHMiLCJjZWxscyIsImxhc3RBY3Rpb24iLCJhY3Rpb25UeXBlIiwiY2VsbElkIiwidHlwZXMiLCJzZXRBY3RpdmVDZWxsIiwidHlwZSIsInNldENlbGxWYWx1ZSIsImNvbHVtbklkIiwicm93Tm8iLCJ2YWx1ZSIsImxzVGVzdCIsIndhdGNoZXIiLCJyZW1vdmVXYXRjaGVyRGF0YSIsImFkZFdhdGNoZXIiLCJ0b1dhdGNoIiwiZnVuY1R5cGUiLCJoeWJyaWRDZWxsSWQiLCJjYWxsYmFja0Z1bmMiLCJjdXJyZW50U3RhdGUiLCJmb3JFYWNoIiwiZSIsInNldFRpbWVvdXQiLCJkaXNwYXRjaCIsIndhdGNoIiwib2ZmIiwiZ2V0U3RhdGUiLCJyZW1vdmVXYXRjaGVyIiwiaW5pdFdhdGNoZXIiLCJoeWJyaWRDZWxsSWRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNlbGxUb1dhdGNoIiwid2F0Y2hIeWJyaUNlbGxDaGFuZ2UiLCJ0ZXN0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJhdXRvU2F2ZSIsInRpbWVySWQiLCJzZXRJbnRlcnZhbCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiY29udmVydFRvQ3N2IiwiY3N2RGF0YSIsImNvbHVtbk9iaiIsInJvd1RleHQiLCJrZXkiLCJqb2luIiwiZG93bmxvYWRBc0NzdiIsInN0YXRlIiwiYSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJlbmNvZGVVUkkiLCJ0YXJnZXQiLCJkb3dubG9hZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsaWNrIiwicmVtb3ZlQ2hpbGQiLCJpc0NoYXJhY3RlcktleVByZXNzIiwiZXZ0Iiwid2hpY2giLCJjdHJsS2V5IiwibWV0YUtleSIsImFsdEtleSIsImtleURvd25IYW5kbGVyIiwia2V5Q29kZSIsIm5ld0FjdGl2ZUNlbGwiLCJjaGFyQ29kZUF0IiwiaW5wdXRFeGl0SGFuZGxlciIsInRleHQiLCJpc0h5YnJpZENlbGwiLCJ0cmltIiwiY2hhckF0IiwicmVnZXgiLCJmb3JtdWxhIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic2xpY2UiLCJjZWxsQW5kRnVuY3Rpb24iLCJleHRyYWN0Q2VsbEFuZEZ1bmN0aW9uIiwiZnVuYyIsInRlc3RJbmJ1aWx0Rm9ybXVsYSIsInRlc3RVc2VyRm9ybXVsYSIsInNlYXJjaCIsImdldFRvV2F0Y2hBcnJheSIsImluZGV4T2YiLCJzcGxpdCIsImdldENlbGxGcm9tU3RyaW5nIiwib2JqIiwic3RyIiwicGFyc2VJbnQiLCJnZXRDb2x1bW5JZCIsImdldFJvd05vIiwiY2VsbCIsInN0YXJ0SiIsImVuZEkiLCJlbmRKIiwidG9SZXR1cm4iLCJqIiwidG9TdHJpbmciLCJzYXZlZFN0b3JlIiwiZ2V0SXRlbSIsInBhcnNlIiwic3RvcmUiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwicmVuZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJBcHAiLCJjbGVhckludGVydmFsIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwib25DaGFuZ2VIYW5kbGVyIiwic2V0SW5idWlsdEZvcm11bGEiLCJIZWFkZXJDb250YWluZXIiLCJzZXRGaWxlTmFtZSIsIm5hbWUiLCJIZWFkZXIiLCJwcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJBY3RpdmVDZWxsUmVkdWNlciIsIlNoZWV0UmVkdWNlciIsImluaXRpYWxBY3RpdmVDZWxsIiwiaW5pdGlhbFNoZWV0IiwiYWN0aW9uIiwibWFwIiwiaXRlbSIsImluZGV4IiwiSHlicmlkQ2VsbFJlZHVjZXIiLCJpbml0aWFsSHlicmlkQ2VsbCIsImFzc2lnbiIsInJlZHVjZSIsInJlc3VsdCIsIkZpbGVOYW1lUmVkdWljZXIiLCJzZWxlY3QiLCJzZWxlY3RvciIsInByZXYiLCJjdXJyZW50IiwiUmVkdXhXYXRjaGVyIiwid2F0Y2hMaXN0IiwiX193YXRjaExpc3QiLCJfX3ByZXZTdGF0ZSIsInN1YnNjcmliZSIsInByZXZTdGF0ZSIsImxpc3RlbmVycyIsInByZXZWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsImlzRXF1YWxGbiIsImlzRXF1YWwiLCJsaXN0ZW5lciIsImJpbmQiLCJzZWxlY3RvclN0ciIsImxpc3RlbmVySW5kZXgiLCJzcGxpY2UiLCJzZXRDb21wYXJlRnVuY3Rpb24iLCJhZGRIeWJyaWRDZWxsIiwicmVtb3ZlSHlicmlkQ2VsbCIsInN1bSIsInBhcnNlRmxvYXQiLCJhdmciLCJ0b3RhbCIsIm1pbiIsIk1hdGgiLCJtYXgiLCJzdWJzdHJhY3QiLCJtdWx0aXBsaWNhdGlvbiIsImRpdmlkZSIsIm1hdGhGdW5jIiwiU2hlZXRDb250YWluZXIiLCJTaGVldCIsInRvVXBwZXJDYXNlIiwiZ2VuZXJhdGVDb2x1bW4iLCJhcnJheU9mIiwib2JqZWN0Iiwib3duUHJvcHMiLCJpc0FjdGl2ZSIsIm9uU2luZ2xlQ2xpY2tIYW5kbGVyIiwib25Eb3VibGVDbGlja0hhbmRsZXIiLCJvbktleURvd25IYW5kbGVyIiwiYnlEdWJibGVDbGljayIsIlNoZWV0Q2VsbENvbnRhaW5lciIsIlNoZWV0Q2VsbCIsImZvY3VzSW5wdXQiLCJmb2N1c0RpdiIsInByZVByb3AiLCJ3YXNFZGl0YWJsZSIsImlucHV0IiwiZm9jdXMiLCJkaXYiLCJjbGFzc05hbWVWYWx1ZSIsImJvb2wiLCJvbmVPZlR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBTUEsb0NBQWMsZUFBcEI7O0FBRUEsSUFBTUMsd0NBQWdCLGlCQUF0Qjs7QUFFQSxJQUFNQyxzQ0FBZSxnQkFBckI7O0FBRUEsSUFBTUMsd0NBQWdCLGlCQUF0Qjs7QUFFQSxJQUFNQyw4Q0FBbUIsb0JBQXpCLEM7Ozs7Ozs7Ozs7O0FDUlA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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LGdCQUFjLG9CQUFVK0gsSUFBVixDQUFleEUsVUFKVDtBQUtwQjFILFNBQU8sb0JBQVVtTSxTQUFWLENBQW9CLENBQUMsb0JBQVUxRSxNQUFYLEVBQW1CLG9CQUFVRSxNQUE3QixDQUFwQixFQUEwREQsVUFMN0M7QUFNcEIzSCxZQUFVLG9CQUFVMEgsTUFBVixDQUFpQkMsVUFOUDtBQU9wQnhELFFBQU0sb0JBQVVpSSxTQUFWLENBQW9CLENBQUMsb0JBQVUxRSxNQUFYLEVBQW1CLG9CQUFVRSxNQUE3QixDQUFwQixFQUEwREQsVUFQNUM7QUFRcEIwRCx3QkFBc0Isb0JBQVV2RyxJQUFWLENBQWU2QyxVQVJqQjtBQVNwQjJELHdCQUFzQixvQkFBVXhHLElBQVYsQ0FBZTZDLFVBVGpCO0FBVXBCNEQsb0JBQWtCLG9CQUFVekcsSUFBVixDQUFlNkMsVUFWYjtBQVdwQlQsbUJBQWlCLG9CQUFVcEMsSUFBVixDQUFlNkMsVUFYWjtBQVlwQnpELG9CQUFrQixvQkFBVVksSUFBVixDQUFlNkM7QUFaYixDQUF0Qjs7a0JBZWUrRCxTOzs7Ozs7QUNySGYseUMiLCJmaWxlIjoibWFpbi45NzAyYTM4MzEwYmNmOWU2MDI2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IFNldEZpbGVOYW1lID0gJ1NFVF9GSUxFX05BTUUnO1xuXG5leHBvcnQgY29uc3QgU2V0QWN0aXZlQ2VsbCA9ICdTRVRfQUNUSVZFX0NFTEwnO1xuXG5leHBvcnQgY29uc3QgU2V0Q2VsbFZhbHVlID0gJ1NFVF9DRUxMX1ZBTFVFJztcblxuZXhwb3J0IGNvbnN0IEFkZEh5YnJpZENlbGwgPSAnQUREX0hZQlJJRF9DRUxMJztcblxuZXhwb3J0IGNvbnN0IFJlbW92ZUh5YnJpZENlbGwgPSAnUkVNT1ZFX0hZQlJJRF9DRUxMJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY29uc3RhbnRzL0FjdGlvblR5cGUuanMiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBkZWZpbmUgbm8gb2YgY29sdW1uIGFuZCByb3dcbi8vIGFuZCBjcmVhdGUgYSBhcnJheSBvZiBvYmplY3QgdG8gcmVwcmVzZW50XG4vLyBzdGF0ZSBvZiBzcHJlYWRzaGVlXG5jb25zdCBudW1iZXJPZkNvbHVtbiA9IDg7XG5jb25zdCBudW1iZXJPZlJvdyA9IDE1O1xuXG5cbmV4cG9ydCBjb25zdCBsYXN0Q29sdW1uID0gU3RyaW5nLmZyb21DaGFyQ29kZSg5NyArIChudW1iZXJPZkNvbHVtbiAtIDEpKTtcbmV4cG9ydCBjb25zdCBsYXN0Um93ID0gbnVtYmVyT2ZSb3cgLSAxO1xuXG4vLyBjcmVhdGUgYSBvYmplY3Qgd2l0aCBrZXkgb2YgYSxiLGMsZCBldGMuXG4vLyBvbmUgY29sdW1uIG9iamVjdCBwcmVzZW50IG9uZSByb3dcbi8vIGVhY2gga2V5IG9mIG9iamVjdCByZXByZXNlbnQgYSBjb2x1bW5cbmZ1bmN0aW9uIGNyZWF0ZUNvbHVtbihub09mQ29sdW1uKSB7XG4gIGNvbnN0IGNvbHVtbiA9IHt9O1xuICAvLyBjYXJlY3RlciBjb2RlIG9mICdhJyB0byB1c2UgaW4gZnVuY3Rpb24gJ1N0cmluZy5mcm9tQ2hhckNvZGUoKSdcbiAgY29uc3QgY2hhckNvZGVTdGFydCA9IDk3O1xuICBjb25zdCBjaGFyQ29kZUVuZCA9IDk3ICsgKG5vT2ZDb2x1bW4gLSAxKTtcbiAgZm9yIChsZXQgaSA9IGNoYXJDb2RlU3RhcnQ7IChpIDw9IGNoYXJDb2RlRW5kKSAmJiAoaSA8PSAxMjIpOyBpICs9IDEpIHtcbiAgICBjb2x1bW5bU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSAnJztcbiAgfVxuXG4gIHJldHVybiBjb2x1bW47XG59XG5cbi8vIG9uZSBjb2x1bW4gb2JqZWN0IHJlcHJlc2VudCBvbmUgcm93IGNyZWF0ZSBhIGFycmF5IHRvIFxuLy8gcmVwcmVzZW50IHJlcXVpcmVkIG5vIG9mIHJvd1xuZnVuY3Rpb24gY3JlYXRlU2hlZXQobm9PZkNvbHVtbiwgbm9PZlJvdykge1xuICBjb25zdCBzaGVldCA9IFtdO1xuICBjb25zdCBjb2x1bW4gPSBjcmVhdGVDb2x1bW4obm9PZkNvbHVtbik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9PZlJvdzsgaSArPSAxKSB7XG4gICAgc2hlZXQucHVzaChjb2x1bW4pO1xuICB9XG5cbiAgcmV0dXJuIHNoZWV0O1xufVxuXG4vLyBjcmVhdGUgYSBvYmplY3QgcmVwcmVzZW50IGluaXRpYWwgc3RhdGUgb2YgYXBwXG5jb25zdCBpbml0aWFsU3RvcmUgPSB7XG4gIGZpbGVOYW1lOiAnVW50aXRsZWQgU3ByYWRlc2hlZXQnLFxuICBhY3RpdmVDZWxsOiB7XG4gICAgY3VycmVudEFjdGl2ZUNlbGw6ICdhMScsXG4gICAgaXNFZGl0YWJsZTogZmFsc2UsXG4gICAgYnlEdWJsZUNsaWNrOiBmYWxzZSxcbiAgfSxcbiAgc2hlZXQ6IGNyZWF0ZVNoZWV0KG51bWJlck9mQ29sdW1uLCBudW1iZXJPZlJvdyksXG4gIGh5YnJpZENlbGxzOiB7XG4gICAgY2VsbHM6IHt9LFxuICAgIGxhc3RBY3Rpb246IHtcbiAgICAgIGFjdGlvblR5cGU6ICcnLFxuICAgICAgY2VsbElkOiAnJyxcbiAgICB9LFxuICB9LFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsU3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0b3JlL0luaXRpYWxTdG9yZS5qcyIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGUnO1xuXG5leHBvcnQgY29uc3Qgc2V0QWN0aXZlQ2VsbCA9IChjdXJyZW50QWN0aXZlQ2VsbCwgaXNFZGl0YWJsZSwgYnlEdWJsZUNsaWNrKSA9PiAoe1xuICB0eXBlOiB0eXBlcy5TZXRBY3RpdmVDZWxsLFxuICBjdXJyZW50QWN0aXZlQ2VsbCxcbiAgaXNFZGl0YWJsZSxcbiAgYnlEdWJsZUNsaWNrOiBpc0VkaXRhYmxlICYmIGJ5RHVibGVDbGljayxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0Q2VsbFZhbHVlID0gKGNvbHVtbklkLCByb3dObywgdmFsdWUpID0+ICh7XG4gIHR5cGU6IHR5cGVzLlNldENlbGxWYWx1ZSxcbiAgY29sdW1uSWQsXG4gIHJvd05vLFxuICB2YWx1ZSxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9hY3Rpb25zL0NlbGxBY3Rpb25zLmpzIiwiaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL0NvbmZpZ1N0b3JlJztcbmltcG9ydCBSZWR1eFdhdGNoZXIgZnJvbSAnLi9yZWR1eC13YXRjaGVyJztcbmltcG9ydCB7IGdldFJvd05vLCBnZXRDb2x1bW5JZCB9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQgeyBzZXRDZWxsVmFsdWUgfSBmcm9tICcuLi9hY3Rpb25zL0NlbGxBY3Rpb25zJztcbmltcG9ydCBtYXRoRnVuY3Rpb24gZnJvbSAnLi9tYXRoRnVuY3Rpb24nO1xuaW1wb3J0IHsgQWRkSHlicmlkQ2VsbCwgUmVtb3ZlSHlicmlkQ2VsbCB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlJztcblxuY29uc3Qgd2F0Y2hlciA9IG5ldyBSZWR1eFdhdGNoZXIoc3RvcmUpO1xuXG5jb25zdCByZW1vdmVXYXRjaGVyRGF0YSA9IHt9O1xuXG4vLyBhZGQgd2F0Y2hlciBmdW5jdGlvbiBhZGQgd2F0Y2hlciBvbiBjZWxscyBhbmQgXG4vLyBzZXQgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB2YWx1ZSBvZiBoeWJyaWRjZWxsXG4vLyBkZXBlbmRpbmcgb24gb3RoZXIgY2VsbCB2YWx1ZVxuLy8gYWxzbyBzZXQgdGhlIHJlbW92ZVdhdGNoZXJEYXRhIHRvIHJlbW92ZSB3YXRjaGVyIGluIGZ1dHVyZVxuY29uc3QgYWRkV2F0Y2hlciA9ICh0b1dhdGNoLCBmdW5jVHlwZSwgaHlicmlkQ2VsbElkKSA9PiB7XG4gIGNvbnN0IGNhbGxiYWNrRnVuYyA9ICh7IGN1cnJlbnRTdGF0ZSB9KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gW107XG4gICAgdG9XYXRjaC5mb3JFYWNoKChlKSA9PiB7XG4gICAgICB2YWx1ZS5wdXNoKGN1cnJlbnRTdGF0ZS5zaGVldFtnZXRSb3dObyhlKV1bZ2V0Q29sdW1uSWQoZSldKTtcbiAgICB9KTtcbiAgICB2YWx1ZSA9IG1hdGhGdW5jdGlvbltmdW5jVHlwZV0odmFsdWUpO1xuICAgIC8vIHRvIG1ha2UgaXQgYXN5bmMgc28gdGhhdCBpdCBkb24ndCBnZXQgc3R1Y2sgaW4gaW5maW5pdGUgY2FsbGJhY2tcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHNldENlbGxWYWx1ZShcbiAgICAgICAgZ2V0Q29sdW1uSWQoaHlicmlkQ2VsbElkKSxcbiAgICAgICAgZ2V0Um93Tm8oaHlicmlkQ2VsbElkKSxcbiAgICAgICAgdmFsdWUpKTtcbiAgICB9LCAwKTtcbiAgfTtcblxuICAvLyBhZGQgZW50cnkgaW4gcmVtb3ZlV2F0Y2hlckRhdGFcbiAgcmVtb3ZlV2F0Y2hlckRhdGFbaHlicmlkQ2VsbElkXSA9IFtdO1xuXG4gIC8vIHN0YXJ0IHdhdGNoaW5nIGNlbGxzIGFuZCBhZGQgcmVtb3ZlV2F0Y2hlciBtZXRob2RcbiAgdG9XYXRjaC5mb3JFYWNoKChlKSA9PiB7XG4gICAgd2F0Y2hlci53YXRjaChbJ3NoZWV0JywgZ2V0Um93Tm8oZSksIGdldENvbHVtbklkKGUpXSwgY2FsbGJhY2tGdW5jKTtcblxuICAgIC8vIGFkZCByZXNwZWN0aXZlIHJlbW92ZVdhdGNoZXIgZnVuY3Rpb24gdG8gdW5XYXRjaCBsYXR0ZXJcbiAgICByZW1vdmVXYXRjaGVyRGF0YVtoeWJyaWRDZWxsSWRdLnB1c2goKCkgPT4ge1xuICAgICAgd2F0Y2hlci5vZmYoWydzaGVldCcsIGdldFJvd05vKGUpLCBnZXRDb2x1bW5JZChlKV0sIGNhbGxiYWNrRnVuYyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIGFmdGVyIGFkZGluZyB3YXRjaGVyIG9uY2UgcnVuIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0byBjYWxjdWxhdGUgXG4gIC8vIGN1cnJlbnQgdmFsdWUgb2YgaHlicmlkQ2VsbFxuICBjYWxsYmFja0Z1bmMoeyBjdXJyZW50U3RhdGU6IHN0b3JlLmdldFN0YXRlKCkgfSk7XG59O1xuXG4vLyB0byByZW1vdmUgd2F0Y2ggb24gdW51c2VkIGNlbGxzXG5jb25zdCByZW1vdmVXYXRjaGVyID0gKGh5YnJpZENlbGxJZCkgPT4ge1xuICBpZiAocmVtb3ZlV2F0Y2hlckRhdGFbaHlicmlkQ2VsbElkXSkge1xuICAgIHJlbW92ZVdhdGNoZXJEYXRhW2h5YnJpZENlbGxJZF0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZSgpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vLyBpbml0V2F0Y2hlciB0YWtlcyBvYmplY3Qgd2l0Y2ggY29udGFpbiBhbGwgaHlicmlkQ2VsbCAoc3RhdGUuaHlicmlkY2VsbHMuY2VsbHMpXG4vLyBhcyBwYXJhbWV0ZXIgc3RhcnQgd2F0Y2hlciBpZiB0aGVyZSBpcyBhbHJlYWR5IGFueSBoeWJyaWQgY2VsbCBwcmVzZW50IGluIHN0YXRlXG4vLyBhbHNvIHNldCB3YXRjaGVyIHRvIG1hbmFnZSBmdXR1cmUgY2hhbmdlIGluIGh5YnJpZENlbGxzIChnZXRzIGFkZGVkIG9yIHJlbW92ZWQpXG5jb25zdCBpbml0V2F0Y2hlciA9ICgpID0+IHtcbiAgY29uc3QgaHlicmlkQ2VsbHMgPSBzdG9yZS5nZXRTdGF0ZSgpLmh5YnJpZENlbGxzLmNlbGxzO1xuICBjb25zdCBoeWJyaWRDZWxsSWRzID0gT2JqZWN0LmtleXMoaHlicmlkQ2VsbHMpO1xuICBpZiAoaHlicmlkQ2VsbElkcy5sZW5ndGggPiAwKSB7XG4gICAgaHlicmlkQ2VsbElkcy5mb3JFYWNoKChoeWJyaWRDZWxsSWQpID0+IHtcbiAgICAgIGNvbnN0IHRvV2F0Y2ggPSBoeWJyaWRDZWxsc1toeWJyaWRDZWxsSWRdLmNlbGxUb1dhdGNoO1xuICAgICAgY29uc3QgZnVuY1R5cGUgPSBoeWJyaWRDZWxsc1toeWJyaWRDZWxsSWRdLmNhbGxiYWNrRnVuYztcbiAgICAgIGFkZFdhdGNoZXIodG9XYXRjaCwgZnVuY1R5cGUsIGh5YnJpZENlbGxJZCk7XG4gICAgfSk7XG4gIH1cbiAgLy8gd2F0Y2ggZm9yIG5ldyBoeWJyaWRDZWxsIGFkZCBvciByZW1vdmVcbiAgd2F0Y2hIeWJyaUNlbGxDaGFuZ2UoKTtcbn07XG5cbi8vIHdoZW5ldmVyIG5ldyBoeWJyaWRjZWxsIGFkZGVkIG9yIHJlbW92ZWQgcnVuIHJlc3BlY3RpdmUgZnVuY3Rpb25cbmNvbnN0IHdhdGNoSHlicmlDZWxsQ2hhbmdlID0gKCkgPT4ge1xuICB3YXRjaGVyLndhdGNoKFsnaHlicmlkQ2VsbHMnLCAnY2VsbHMnXSwgKHsgY3VycmVudFN0YXRlIH0pID0+IHtcbiAgICBjb25zdCBjZWxsSWQgPSBjdXJyZW50U3RhdGUuaHlicmlkQ2VsbHMubGFzdEFjdGlvbi5jZWxsSWQ7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZS5oeWJyaWRDZWxscy5sYXN0QWN0aW9uLmFjdGlvblR5cGUgPT09IEFkZEh5YnJpZENlbGwpIHtcbiAgICAgIGNvbnN0IHRvV2F0Y2ggPSBjdXJyZW50U3RhdGUuaHlicmlkQ2VsbHMuY2VsbHNbY2VsbElkXS5jZWxsVG9XYXRjaDtcbiAgICAgIGNvbnN0IGZ1bmNUeXBlID0gY3VycmVudFN0YXRlLmh5YnJpZENlbGxzLmNlbGxzW2NlbGxJZF0uY2FsbGJhY2tGdW5jO1xuICAgICAgYWRkV2F0Y2hlcih0b1dhdGNoLCBmdW5jVHlwZSwgY2VsbElkKTtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFN0YXRlLmh5YnJpZENlbGxzLmxhc3RBY3Rpb24uYWN0aW9uVHlwZSA9PT0gUmVtb3ZlSHlicmlkQ2VsbCkge1xuICAgICAgcmVtb3ZlV2F0Y2hlcihjZWxsSWQpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyB0ZXN0IGZvciBsb2NhbHN0b3JhZ2VcbmV4cG9ydCBmdW5jdGlvbiBsc1Rlc3QoKSB7XG4gIGNvbnN0IHRlc3QgPSAndGVzdCc7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdCwgdGVzdCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGVzdCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gYXV0byBzYXZlIHRvIGxvY2FsIHN0b3JhZ2Ugb24gZXZlcnkgMTAgc2VjXG5leHBvcnQgY29uc3QgYXV0b1NhdmUgPSAoKSA9PiB7XG4gIGlmICghbHNUZXN0KCkpIHJldHVybjtcbiAgY29uc3QgdGltZXJJZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoc3RvcmUuZ2V0U3RhdGUoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0YXRlJywgZGF0YSk7XG4gIH0sIDEwMDAwKTtcbiAgcmV0dXJuIHRpbWVySWQ7XG59O1xuXG5leHBvcnQgY29uc3QgY29udmVydFRvQ3N2ID0gKHNoZWV0KSA9PiB7XG4gIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgc2hlZXQuZm9yRWFjaCgoY29sdW1uT2JqKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbHVtbk9iaik7XG4gICAgbGV0IHJvd1RleHQgPSAnJztcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGNvbHVtbk9ialtrZXldKSB7XG4gICAgICAgIHJvd1RleHQgKz0gYCR7Y29sdW1uT2JqW2tleV19LGA7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY3N2RGF0YS5wdXNoKHJvd1RleHQpO1xuICB9KTtcbiAgcmV0dXJuIGNzdkRhdGEuam9pbignXFxuJyk7XG59O1xuXG5leHBvcnQgY29uc3QgZG93bmxvYWRBc0NzdiA9ICgpID0+IHtcbiAgY29uc3Qgc3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBgZGF0YTphdHRhY2htZW50L2Nzdiwke2VuY29kZVVSSShjb252ZXJ0VG9Dc3Yoc3RhdGUuc2hlZXQpKX1gO1xuICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuICBhLmRvd25sb2FkID0gYCR7c3RhdGUuZmlsZU5hbWV9LmNzdmA7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XG4gIGEuY2xpY2soKTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRXYXRjaGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC91dGlsL3dhdGNoLmpzIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHNldEFjdGl2ZUNlbGwsIHNldENlbGxWYWx1ZSB9IGZyb20gJy4uL2FjdGlvbnMvQ2VsbEFjdGlvbnMnO1xuaW1wb3J0IHsgbGFzdENvbHVtbiwgbGFzdFJvdyB9IGZyb20gJy4uL3N0b3JlL0luaXRpYWxTdG9yZSc7XG5pbXBvcnQgeyBhZGRIeWJyaWRDZWxsLCByZW1vdmVIeWJyaWRDZWxsIH0gZnJvbSAnLi4vYWN0aW9ucy9IeWJyaWRDZWxsQWN0aW9ucyc7XG5cbi8vIHRvIGNoZWNrIGlmIGtleSBwcmVzc2VkIHdpbGwgcHJvZHVjZSBhIGNoYXJlY3RlclxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyS2V5UHJlc3MoZXZ0KSB7XG4gIGlmICh0eXBlb2YgZXZ0LndoaWNoID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIFRoaXMgaXMgSUUsIHdoaWNoIG9ubHkgZmlyZXMga2V5cHJlc3MgZXZlbnRzIGZvciBwcmludGFibGUga2V5c1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBldnQud2hpY2ggPT09ICdudW1iZXInICYmIGV2dC53aGljaCA+IDApIHtcbiAgICAvLyBJbiBvdGhlciBicm93c2VycyBleGNlcHQgb2xkIHZlcnNpb25zIG9mIFdlYktpdCwgZXZ0LndoaWNoIGlzXG4gICAgLy8gb25seSBncmVhdGVyIHRoYW4gemVybyBpZiB0aGUga2V5cHJlc3MgaXMgYSBwcmludGFibGUga2V5LlxuICAgIC8vIFdlIG5lZWQgdG8gZmlsdGVyIG91dCBiYWNrc3BhY2UgYW5kIGN0cmwvYWx0L21ldGEga2V5IGNvbWJpbmF0aW9uc1xuICAgIHJldHVybiAhZXZ0LmN0cmxLZXkgJiYgIWV2dC5tZXRhS2V5ICYmICFldnQuYWx0S2V5ICYmIGV2dC53aGljaCAhPSA4O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gbWFuYWdlIHdoYXQgaGFwcGVuIG9uIGtleURvd24gZXZlbnRcbmV4cG9ydCBjb25zdCBrZXlEb3duSGFuZGxlciA9IChlLCBkaXNwYXRjaCwgY29sdW1uSWQsIHJvd05vLCBpc0VkaXRhYmxlLCBieUR1YmxlQ2xpY2spID0+IHtcbiAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICBjYXNlIDI3OiAvLyBlc2Mga2V5IGV4aXQgZWRpdCBtb2RlXG4gICAgICBpZiAoaXNFZGl0YWJsZSkge1xuICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVDZWxsKChjb2x1bW5JZCArIHJvd05vKSwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzc6IC8vIGxlZnQgYXJyb3dcbiAgICAgIGlmIChjb2x1bW5JZCAhPT0gJ2EnICYmICFieUR1YmxlQ2xpY2spIHtcbiAgICAgICAgY29uc3QgbmV3QWN0aXZlQ2VsbCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29sdW1uSWQuY2hhckNvZGVBdCgwKSAtIDEpICsgcm93Tm87XG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZUNlbGwobmV3QWN0aXZlQ2VsbCwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzg6IC8vIHVwIGFycm93XG4gICAgICBpZiAocm93Tm8gIT09IDApIHtcbiAgICAgICAgY29uc3QgbmV3QWN0aXZlQ2VsbCA9IGNvbHVtbklkICsgKHJvd05vIC0gMSk7XG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZUNlbGwobmV3QWN0aXZlQ2VsbCwgZmFsc2UpKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzk6IC8vIHJpZ2h0IGFycm93XG4gICAgICBpZiAoY29sdW1uSWQgIT09IGxhc3RDb2x1bW4gJiYgIWJ5RHVibGVDbGljaykge1xuICAgICAgICBjb25zdCBuZXdBY3RpdmVDZWxsID0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2x1bW5JZC5jaGFyQ29kZUF0KDApICsgMSkgKyByb3dObztcbiAgICAgICAgZGlzcGF0Y2goc2V0QWN0aXZlQ2VsbChuZXdBY3RpdmVDZWxsLCBmYWxzZSkpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0MDogLy8gZG93biBhcnJvd1xuICAgICAgaWYgKHJvd05vICE9PSBsYXN0Um93KSB7XG4gICAgICAgIGNvbnN0IG5ld0FjdGl2ZUNlbGwgPSBjb2x1bW5JZCArIChyb3dObyArIDEpO1xuICAgICAgICBkaXNwYXRjaChzZXRBY3RpdmVDZWxsKG5ld0FjdGl2ZUNlbGwsIGZhbHNlKSk7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OiAvLyBpZiBub3QgaW4gaW5wdXQgbW9kZSB0aGVuIHJlc2V0IGNlbGwgdmFsdWUgYW5kIGVudGVyIGlucHV0IG1vZGVcbiAgICAgIGlmIChpc0NoYXJhY3RlcktleVByZXNzKGUpICYmICFpc0VkaXRhYmxlKSB7XG4gICAgICAgIGRpc3BhdGNoKHNldEFjdGl2ZUNlbGwoKGNvbHVtbklkICsgcm93Tm8pLCB0cnVlLCBmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRDZWxsVmFsdWUoY29sdW1uSWQsIHJvd05vLCAnJykpO1xuICAgICAgfVxuICB9XG59O1xuXG4vLyB3aGVuZXZlciB1c2VyIHN3aXRjaCBjZWxsIG9yIGV4aXQgaW5wdXQgbW9kZVxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNoZWNrIGlmIHRoaXMgY2VsbCBjb250YWluIGEgZm9ybXVsYSBvciBzaW1wbGUgdmFsdWVcbi8vIGFuZCBkaXNwYXRjaCBhIGFwcHJvcGlhdGUgYWN0aW9uXG5leHBvcnQgY29uc3QgaW5wdXRFeGl0SGFuZGxlciA9IChkaXNwYXRjaCwgY29sdW1uSWQsIHJvd05vLCB0ZXh0LCBpc0h5YnJpZENlbGwpID0+IHtcbiAgaWYgKCh0eXBlb2YgdGV4dCA9PT0gJ3N0cmluZycpICYmIHRleHQudHJpbSgpLmNoYXJBdCgwKSA9PT0gJz0nKSB7XG4gICAgY29uc3QgcmVnZXggPSAvXFxzL2c7XG4gICAgLy8gdHJpbSB3aGl0ZSBzcGFjZSBjb252ZXJ0IHRvIGxvd2VyY2FzZSBhbmQgcmVtb3ZlICc9J1xuICAgIGNvbnN0IGZvcm11bGEgPSB0ZXh0LnJlcGxhY2UocmVnZXgsICcnKS50b0xvd2VyQ2FzZSgpLnNsaWNlKDEpO1xuICAgIGNvbnN0IGNlbGxBbmRGdW5jdGlvbiA9IGV4dHJhY3RDZWxsQW5kRnVuY3Rpb24oZm9ybXVsYSk7XG4gICAgZGlzcGF0Y2goYWRkSHlicmlkQ2VsbChjb2x1bW5JZCArIHJvd05vLCBgPSR7Zm9ybXVsYX1gLCBjZWxsQW5kRnVuY3Rpb24udG9XYXRjaCwgY2VsbEFuZEZ1bmN0aW9uLmZ1bmMpKTtcbiAgfSBlbHNlIGlmIChpc0h5YnJpZENlbGwpIHtcbiAgICBkaXNwYXRjaChyZW1vdmVIeWJyaWRDZWxsKGNvbHVtbklkICsgcm93Tm8pKTtcbiAgfVxufTtcblxuLy8gcmV0dXJuIGFwcHJvcHJpYXRlIGZ1bmN0aW9uIGJhc2VkIG9uIGdpdmVuIHN0cmluZyhmb3JtdWxhIGVudGVyZWQgb24gY2VsbClcbi8vIGFuZCBhbHNvIHJldHVybiBhIGFycmF5IG9mIGNlbGxJZCBvbiB3aXRjaCByZXN1bHQgb2YgZm9ybXVsYSBkZXBlbmRcbmNvbnN0IGV4dHJhY3RDZWxsQW5kRnVuY3Rpb24gPSAoZm9ybXVsYSkgPT4ge1xuICBjb25zdCB0ZXN0SW5idWlsdEZvcm11bGEgPSAvXlxcd3szfVxcKFxcd3syLDN9Olxcd3syLDN9XFwpJC9nO1xuICBjb25zdCB0ZXN0VXNlckZvcm11bGEgPSAvXlxcd3syLDN9KFxcK3wtfFxcKnxcXC8pXFx3ezIsM30kL2c7XG4gIGxldCBjZWxsQW5kRnVuY3Rpb24gPSB7fTtcblxuICBpZiAoZm9ybXVsYS5zZWFyY2godGVzdEluYnVpbHRGb3JtdWxhKSA+IC0xKSB7XG4gICAgY2VsbEFuZEZ1bmN0aW9uLmZ1bmMgPSBmb3JtdWxhLnNsaWNlKDAsIDMpO1xuICAgIC8vIGdlbmVyYXRlIGFycmF5IG9mIHRvV2F0Y2ggaWYgdXNlciBlbnRlcnNcbiAgICAvLyBzb21ldGhpbmcgbGlrZSBcIkExOkI5XCJcbiAgICBjZWxsQW5kRnVuY3Rpb24udG9XYXRjaCA9IGdldFRvV2F0Y2hBcnJheShmb3JtdWxhLnNsaWNlKChmb3JtdWxhLmluZGV4T2YoJygnKSArIDEpLCAtMSkuc3BsaXQoJzonKSk7XG4gIH0gZWxzZSBpZiAoZm9ybXVsYS5zZWFyY2godGVzdFVzZXJGb3JtdWxhKSA+IC0xKSB7XG4gICAgaWYgKGZvcm11bGEuaW5kZXhPZignKycpID4gLTEpIHtcbiAgICAgIGNlbGxBbmRGdW5jdGlvbi50b1dhdGNoID0gZm9ybXVsYS5zcGxpdCgnKycpO1xuICAgICAgY2VsbEFuZEZ1bmN0aW9uLmZ1bmMgPSAnc3VtJztcbiAgICB9XG5cbiAgICBpZiAoZm9ybXVsYS5pbmRleE9mKCctJykgPiAtMSkge1xuICAgICAgY2VsbEFuZEZ1bmN0aW9uLnRvV2F0Y2ggPSBmb3JtdWxhLnNwbGl0KCctJyk7XG4gICAgICBjZWxsQW5kRnVuY3Rpb24uZnVuYyA9ICdzdWJzdHJhY3QnO1xuICAgIH1cblxuICAgIGlmIChmb3JtdWxhLmluZGV4T2YoJyonKSA+IC0xKSB7XG4gICAgICBjZWxsQW5kRnVuY3Rpb24udG9XYXRjaCA9IGZvcm11bGEuc3BsaXQoJyonKTtcbiAgICAgIGNlbGxBbmRGdW5jdGlvbi5mdW5jID0gJ211bHRpcGxpY2F0aW9uJztcbiAgICB9XG5cbiAgICBpZiAoZm9ybXVsYS5pbmRleE9mKCcvJykgPiAtMSkge1xuICAgICAgY2VsbEFuZEZ1bmN0aW9uLnRvV2F0Y2ggPSBmb3JtdWxhLnNwbGl0KCcvJyk7XG4gICAgICBjZWxsQW5kRnVuY3Rpb24uZnVuYyA9ICdkaXZpZGUnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjZWxsQW5kRnVuY3Rpb24gPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gY2VsbEFuZEZ1bmN0aW9uO1xufTtcblxuLy8gcmV0dXJuIHNvbXRoaWcgbGlrZSBcIiBhcnJbMTJdW2NdIFwiIGlmIFwiYzEyXCIgaXMgZ2l2ZW5cbmV4cG9ydCBjb25zdCBnZXRDZWxsRnJvbVN0cmluZyA9IChvYmosIHN0cikgPT4gb2JqW3BhcnNlSW50KHN0ci5zbGljZSgxKSwgMTApXVtzdHIuY2hhckF0KDApXTtcblxuZXhwb3J0IGNvbnN0IGdldENvbHVtbklkID0gc3RyID0+IHN0ci5jaGFyQXQoMCk7XG5cbmV4cG9ydCBjb25zdCBnZXRSb3dObyA9IHN0ciA9PiBwYXJzZUludChzdHIuc2xpY2UoMSksIDEwKTtcblxuLy8gZ2VuZXJhdGUgYXJyYXkgb2YgdG9XYXRjaCBpZiB1c2VyIGVudGVyc1xuLy8gc29tZXRoaW5nIGxpa2UgXCJBMTpCOVwiXG5jb25zdCBnZXRUb1dhdGNoQXJyYXkgPSAoY2VsbCkgPT4ge1xuICBsZXQgaSA9IGNlbGxbMF0uY2hhckNvZGVBdCgwKTtcbiAgY29uc3Qgc3RhcnRKID0gcGFyc2VJbnQoY2VsbFswXS5zbGljZSgxKSwgMTApO1xuICBjb25zdCBlbmRJID0gY2VsbFsxXS5jaGFyQ29kZUF0KDApO1xuICBjb25zdCBlbmRKID0gcGFyc2VJbnQoY2VsbFsxXS5zbGljZSgxKSwgMTApO1xuICBjb25zdCB0b1JldHVybiA9IFtdO1xuXG4gIGZvciAoOyBpIDw9IGVuZEk7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSBzdGFydEo7IGogPD0gZW5kSjsgaiArPSAxKSB7XG4gICAgICB0b1JldHVybi5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoaSkgKyBqLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC91dGlsL3V0aWwuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBSb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9Sb290UmVkdWNlcic7XG5pbXBvcnQgaW5pdGlhbFN0b3JlIGZyb20gJy4vSW5pdGlhbFN0b3JlJztcbmltcG9ydCB7IGxzVGVzdCB9IGZyb20gJy4uL3V0aWwvd2F0Y2gnO1xuXG5sZXQgc2F2ZWRTdG9yZSA9IGluaXRpYWxTdG9yZTtcblxuaWYgKGxzVGVzdCgpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKSB7XG4gIHNhdmVkU3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGF0ZScpKSB8fCBpbml0aWFsU3RvcmU7XG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoUm9vdFJlZHVjZXIsIHNhdmVkU3RvcmUsXG4gIC8vIGZvciByZWR1eCBkZXYgdG9vbFxuICB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3N0b3JlL0NvbmZpZ1N0b3JlLmpzIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEFycmF5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vc2NyaXB0L0FwcCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zY3JpcHQvc3RvcmUvQ29uZmlnU3RvcmUnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxBcHAgLz5cbiAgPC9Qcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cbi8vaG90IG1vZHVsZSByZWxvYWRpbmcgc2V0dGluZ3MgXG5pZihtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkZXJDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL0hlYWRlckNvbnRhaW5lcic7XG5pbXBvcnQgU2hlZXRDb250YWluZXIgZnJvbSAnLi9jb250YWluZXJzL1NoZWV0Q29udGFpbmVyJztcbmltcG9ydCBpbml0V2F0Y2hlciwgeyBhdXRvU2F2ZSB9IGZyb20gJy4vdXRpbC93YXRjaCc7XG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaW5pdFdhdGNoZXIoKTtcbiAgICB0aGlzLnRpbWVySWQgPSBhdXRvU2F2ZSgpO1xuICB9XG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklkKTtcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyQ29udGFpbmVyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hlZXQtd3JhcFwiPlxuICAgICAgICAgIDxTaGVldENvbnRhaW5lciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9BcHAuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2V0RmlsZU5hbWUgfSBmcm9tICcuLi9hY3Rpb25zL0ZpbGVBY3Rpb25zJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgZ2V0Q29sdW1uSWQsIGdldFJvd05vIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7IHNldENlbGxWYWx1ZSwgc2V0QWN0aXZlQ2VsbCB9IGZyb20gJy4uL2FjdGlvbnMvQ2VsbEFjdGlvbnMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBmaWxlTmFtZTogc3RhdGUuZmlsZU5hbWUsXG4gIGNvbHVtbklkOiBnZXRDb2x1bW5JZChzdGF0ZS5hY3RpdmVDZWxsLmN1cnJlbnRBY3RpdmVDZWxsKSxcbiAgcm93Tm86IGdldFJvd05vKHN0YXRlLmFjdGl2ZUNlbGwuY3VycmVudEFjdGl2ZUNlbGwpLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIG9uQ2hhbmdlSGFuZGxlcjogKGUpID0+IHtcbiAgICBkaXNwYXRjaChzZXRGaWxlTmFtZShlLnRhcmdldC52YWx1ZSkpO1xuICB9LFxuICBzZXRJbmJ1aWx0Rm9ybXVsYTogKGNvbHVtbklkLCByb3dObywgdmFsdWUpID0+IHtcbiAgICBkaXNwYXRjaChzZXRBY3RpdmVDZWxsKGNvbHVtbklkICsgcm93Tm8sIHRydWUsIGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0Q2VsbFZhbHVlKGNvbHVtbklkLCByb3dObywgdmFsdWUpKTtcbiAgfSxcbn0pO1xuXG5jb25zdCBIZWFkZXJDb250YWluZXIgPSBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NvbnRhaW5lcnMvSGVhZGVyQ29udGFpbmVyLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGUnO1xuXG5jb25zdCBzZXRGaWxlTmFtZSA9IG5hbWUgPT4gKHtcbiAgdHlwZTogdHlwZXMuU2V0RmlsZU5hbWUsXG4gIG5hbWUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2V0RmlsZU5hbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2FjdGlvbnMvRmlsZUFjdGlvbnMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGRvd25sb2FkQXNDc3YgfSBmcm9tICcuLi91dGlsL3dhdGNoJztcblxuZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY29sdW1uSWQsIHJvd05vLCBzZXRJbmJ1aWx0Rm9ybXVsYSB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibmF2YmFyLWZvcm0gbmF2YmFyLWxlZnRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3ByYXNoZWV0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMuZmlsZU5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2IG5hdmJhci1yaWdodFwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9pbnRlclwiPkZ1bmN0aW9uczwvYT5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5idWlsdEZvcm11bGEoY29sdW1uSWQsIHJvd05vLCAnPXN1bShhMTpiMSknKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBzdW0oYTE6YjEpXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEluYnVpbHRGb3JtdWxhKGNvbHVtbklkLCByb3dObywgJz1hdmcoYTE6YjEpJyk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgYXZnKGExOmIxKVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRJbmJ1aWx0Rm9ybXVsYShjb2x1bW5JZCwgcm93Tm8sICc9bWluKGExOmIxKScpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvaW50ZXJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIG1pbihhMTpiMSlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW5idWlsdEZvcm11bGEoY29sdW1uSWQsIHJvd05vLCAnPW1heChhMTpiMSknKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2ludGVyXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBtYXgoYTE6YjEpXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBvaW50ZXJcIj5UaXBzIGFuZCBIZWxwPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IHsgZG93bmxvYWRBc0NzdigpOyB9fT5Eb3dubG9hZCBhcyBDc3Y8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuXG5IZWFkZXIucHJvcFR5cGVzID0ge1xuICBmaWxlTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZUhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldEluYnVpbHRGb3JtdWxhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb2x1bW5JZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByb3dObzogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHsgQWN0aXZlQ2VsbFJlZHVjZXIsIFNoZWV0UmVkdWNlciB9IGZyb20gJy4vQ2VsbFJlZHVjZXJzJztcbmltcG9ydCBIeWJyaWRDZWxsUmVkdWNlcnMgZnJvbSAnLi9IeWJyaWRDZWxsUmVkdWNlcnMnO1xuaW1wb3J0IEZpbGVOYW1lUmVkdWNlciBmcm9tICcuL0ZpbGVSZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGZpbGVOYW1lOiBGaWxlTmFtZVJlZHVjZXIsXG4gIGFjdGl2ZUNlbGw6IEFjdGl2ZUNlbGxSZWR1Y2VyLFxuICBzaGVldDogU2hlZXRSZWR1Y2VyLFxuICBoeWJyaWRDZWxsczogSHlicmlkQ2VsbFJlZHVjZXJzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3JlZHVjZXJzL1Jvb3RSZWR1Y2VyLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGUnO1xuaW1wb3J0IEluaXRpYWxTdG9yZSBmcm9tICcuLi9zdG9yZS9Jbml0aWFsU3RvcmUnO1xuXG5jb25zdCBpbml0aWFsQWN0aXZlQ2VsbCA9IEluaXRpYWxTdG9yZS5hY3RpdmVDZWxsO1xuY29uc3QgaW5pdGlhbFNoZWV0ID0gSW5pdGlhbFN0b3JlLnNoZWV0O1xuXG5leHBvcnQgZnVuY3Rpb24gQWN0aXZlQ2VsbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsQWN0aXZlQ2VsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLlNldEFjdGl2ZUNlbGw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudEFjdGl2ZUNlbGw6IGFjdGlvbi5jdXJyZW50QWN0aXZlQ2VsbCxcbiAgICAgICAgaXNFZGl0YWJsZTogYWN0aW9uLmlzRWRpdGFibGUsXG4gICAgICAgIGJ5RHVibGVDbGljazogYWN0aW9uLmlzRWRpdGFibGUgJiYgYWN0aW9uLmJ5RHVibGVDbGljayxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gU2hlZXRSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFNoZWV0LCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuU2V0Q2VsbFZhbHVlOlxuICAgICAgcmV0dXJuIHN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ICE9PSBhY3Rpb24ucm93Tm8pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgW2FjdGlvbi5jb2x1bW5JZF06IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvcmVkdWNlcnMvQ2VsbFJlZHVjZXJzLmpzIiwiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGUnO1xuaW1wb3J0IEluaXRpYWxTdG9yZSBmcm9tICcuLi9zdG9yZS9Jbml0aWFsU3RvcmUnO1xuXG5jb25zdCBpbml0aWFsSHlicmlkQ2VsbCA9IEluaXRpYWxTdG9yZS5oeWJyaWRDZWxscztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSHlicmlkQ2VsbFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsSHlicmlkQ2VsbCwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHR5cGVzLkFkZEh5YnJpZENlbGw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2VsbHM6IHtcbiAgICAgICAgICAuLi5zdGF0ZS5jZWxscyxcbiAgICAgICAgICBbYWN0aW9uLmNlbGxJZF06IHtcbiAgICAgICAgICAgIGNhbGxiYWNrRnVuYzogYWN0aW9uLmNhbGxiYWNrRnVuYyxcbiAgICAgICAgICAgIGNlbGxUb1dhdGNoOiBhY3Rpb24uY2VsbFRvV2F0Y2gsXG4gICAgICAgICAgICBmb3JtdWxhOiBhY3Rpb24uZm9ybXVsYSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsYXN0QWN0aW9uOiB7XG4gICAgICAgICAgY2VsbElkOiBhY3Rpb24uY2VsbElkLFxuICAgICAgICAgIGFjdGlvblR5cGU6IHR5cGVzLkFkZEh5YnJpZENlbGwsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIGNhc2UgdHlwZXMuUmVtb3ZlSHlicmlkQ2VsbDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBjZWxsczogT2JqZWN0LmtleXMoc3RhdGUuY2VsbHMpLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IHtcbiAgICAgICAgICBpZiAoa2V5ICE9PSBhY3Rpb24uY2VsbElkKSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IHN0YXRlLmNlbGxzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sIHt9KSxcbiAgICAgIH0sIHtcbiAgICAgICAgbGFzdEFjdGlvbjoge1xuICAgICAgICAgIGNlbGxJZDogYWN0aW9uLmNlbGxJZCxcbiAgICAgICAgICBhY3Rpb25UeXBlOiB0eXBlcy5SZW1vdmVIeWJyaWRDZWxsLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9yZWR1Y2Vycy9IeWJyaWRDZWxsUmVkdWNlcnMuanMiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZSc7XG5cbmZ1bmN0aW9uIEZpbGVOYW1lUmVkdWljZXIoc3RhdGUgPSAnVW50aXRsZWQgU3ByYWRlc2hlZXQnLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgdHlwZXMuU2V0RmlsZU5hbWU6XG4gICAgICByZXR1cm4gYWN0aW9uLm5hbWU7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWxlTmFtZVJlZHVpY2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9yZWR1Y2Vycy9GaWxlUmVkdWNlcnMuanMiLCJpbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcbmltcG9ydCBpc1N0cmluZyBmcm9tICdsb2Rhc2gvaXNTdHJpbmcnXG5cbmNvbnN0IHNlbGVjdCA9IChzdGF0ZSwgc2VsZWN0b3IpID0+IGlzU3RyaW5nKHNlbGVjdG9yKSA/IHN0YXRlW3NlbGVjdG9yXSA6IHNlbGVjdG9yLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gcHJldltjdXJyZW50XSwgc3RhdGUpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWR1eFdhdGNoZXIge1xuXHRjb25zdHJ1Y3RvcihzdG9yZSkge1xuXHRcdGNvbnN0IHdhdGNoTGlzdCA9IHRoaXMuX193YXRjaExpc3QgPSB7fVxuXHRcdHRoaXMuX19wcmV2U3RhdGUgPSBzdG9yZS5nZXRTdGF0ZSgpXG5cdFx0c3RvcmUuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHN0b3JlLmdldFN0YXRlKClcblx0XHRcdGNvbnN0IHByZXZTdGF0ZSA9IHRoaXMuX19wcmV2U3RhdGVcblx0XHRcdE9iamVjdC5rZXlzKHdhdGNoTGlzdCkuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0XHRjb25zdCBsaXN0ZW5lcnMgPSB3YXRjaExpc3Rba2V5XVxuXHRcdFx0XHRpZiAoIWxpc3RlbmVycykge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnN0IHNlbGVjdG9yID0gSlNPTi5wYXJzZShrZXkpXG5cdFx0XHRcdGNvbnN0IHByZXZWYWx1ZSA9IHNlbGVjdChwcmV2U3RhdGUsIHNlbGVjdG9yKVxuXHRcdFx0XHRjb25zdCBjdXJyZW50VmFsdWUgPSBzZWxlY3QoY3VycmVudFN0YXRlLCBzZWxlY3Rvcilcblx0XHRcdFx0Y29uc3QgaXNFcXVhbEZuID0gbGlzdGVuZXJzLmlzRXF1YWwgfHwgaXNFcXVhbFxuXG5cdFx0XHRcdGlmICghaXNFcXVhbEZuKHByZXZWYWx1ZSwgY3VycmVudFZhbHVlKSkge1xuXHRcdFx0XHRcdGxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IGxpc3RlbmVyKHtcblx0XHRcdFx0XHRcdHN0b3JlLFxuXHRcdFx0XHRcdFx0c2VsZWN0b3IsXG5cdFx0XHRcdFx0XHRwcmV2U3RhdGUsXG5cdFx0XHRcdFx0XHRjdXJyZW50U3RhdGUsXG5cdFx0XHRcdFx0XHRwcmV2VmFsdWUsXG5cdFx0XHRcdFx0XHRjdXJyZW50VmFsdWVcblx0XHRcdFx0XHR9KSlcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdHRoaXMuX19wcmV2U3RhdGUgPSBjdXJyZW50U3RhdGVcblx0XHR9KVxuXHRcdHRoaXMud2F0Y2ggPSB0aGlzLndhdGNoLmJpbmQodGhpcylcblx0XHR0aGlzLm9mZiA9IHRoaXMub2ZmLmJpbmQodGhpcylcblx0fVxuXHR3YXRjaChzZWxlY3RvciwgbGlzdGVuZXIpIHtcblx0XHRjb25zdCB3YXRjaExpc3QgPSB0aGlzLl9fd2F0Y2hMaXN0XG5cdFx0Y29uc3Qgc2VsZWN0b3JTdHIgPSBKU09OLnN0cmluZ2lmeShzZWxlY3Rvcilcblx0XHR3YXRjaExpc3Rbc2VsZWN0b3JTdHJdID0gd2F0Y2hMaXN0W3NlbGVjdG9yU3RyXSB8fCBbXVxuXHRcdHdhdGNoTGlzdFtzZWxlY3RvclN0cl0ucHVzaChsaXN0ZW5lcilcblx0fVxuXHRvZmYoc2VsZWN0b3IsIGxpc3RlbmVyKSB7XG5cdFx0Y29uc3Qgd2F0Y2hMaXN0ID0gdGhpcy5fX3dhdGNoTGlzdFxuXHRcdGNvbnN0IHNlbGVjdG9yU3RyID0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0b3IpXG5cdFx0aWYgKCF3YXRjaExpc3Rbc2VsZWN0b3JTdHJdKSB7XG5cdFx0XHQvL3Rocm93IG5ldyBFcnJvcihgTm8gbGlzdGVuZXIgZm9yICR7c2VsZWN0b3JTdHJ9YClcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXJzID0gd2F0Y2hMaXN0W3NlbGVjdG9yU3RyXVxuXHRcdGNvbnN0IGxpc3RlbmVySW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcilcblx0XHRpZiAobGlzdGVuZXJJbmRleCA+PSAwKSB7XG5cdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKSwgMSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly90aHJvdyBuZXcgRXJyb3IoYE5vIHN1Y2ggbGlzdGVuZXIgZm9yICR7c2VsZWN0b3JTdHJ9YClcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcblx0XHRcdGRlbGV0ZSB3YXRjaExpc3Rbc2VsZWN0b3JTdHJdXG5cdFx0fVxuXHR9XG5cdHNldENvbXBhcmVGdW5jdGlvbihzZWxlY3RvciwgaXNFcXVhbCkge1xuXHRcdGNvbnN0IHNlbGVjdG9yU3RyID0gSlNPTi5zdHJpbmdpZnkoc2VsZWN0b3IpXG5cdFx0dGhpcy5fX3dhdGNoTGlzdFtzZWxlY3RvclN0cl0uaXNFcXVhbCA9IGlzRXF1YWxcblx0fVxuXHRjbGVhckNvbXBhcmVGdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdHRoaXMuc2V0Q29tcGFyZUZ1bmN0aW9uKHNlbGVjdG9yKVxuXHR9XG59XG5cblJlZHV4V2F0Y2hlci5zZWxlY3QgPSBzZWxlY3RcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3V0aWwvcmVkdXgtd2F0Y2hlci5qcyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKlxuICogUGVyZm9ybXMgYSBkZWVwIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZVxuICogZXF1aXZhbGVudC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2Qgc3VwcG9ydHMgY29tcGFyaW5nIGFycmF5cywgYXJyYXkgYnVmZmVycywgYm9vbGVhbnMsXG4gKiBkYXRlIG9iamVjdHMsIGVycm9yIG9iamVjdHMsIG1hcHMsIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsXG4gKiBzZXRzLCBzdHJpbmdzLCBzeW1ib2xzLCBhbmQgdHlwZWQgYXJyYXlzLiBgT2JqZWN0YCBvYmplY3RzIGFyZSBjb21wYXJlZFxuICogYnkgdGhlaXIgb3duLCBub3QgaW5oZXJpdGVkLCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuIEZ1bmN0aW9ucyBhbmQgRE9NXG4gKiBub2RlcyBhcmUgY29tcGFyZWQgYnkgc3RyaWN0IGVxdWFsaXR5LCBpLmUuIGA9PT1gLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmlzRXF1YWwob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogb2JqZWN0ID09PSBvdGhlcjtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRXF1YWwodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRXF1YWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNFcXVhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNFcXVhbERlZXAgPSByZXF1aXJlKCcuL19iYXNlSXNFcXVhbERlZXAnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAqIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICogIDIgLSBQYXJ0aWFsIGNvbXBhcmlzb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgdmFsdWVgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3RMaWtlKHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcjtcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDI0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0VxdWFsRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gMjUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMjU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDI1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMjYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMjY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDI3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpLFxuICAgIHNldENhY2hlQWRkID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVBZGQnKSxcbiAgICBzZXRDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX3NldENhY2hlSGFzJyk7XG5cbi8qKlxuICpcbiAqIENyZWF0ZXMgYW4gYXJyYXkgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU2V0Q2FjaGUodmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzID09IG51bGwgPyAwIDogdmFsdWVzLmxlbmd0aDtcblxuICB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTZXRDYWNoZWAuXG5TZXRDYWNoZS5wcm90b3R5cGUuYWRkID0gU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBzZXRDYWNoZUFkZDtcblNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxubW9kdWxlLmV4cG9ydHMgPSBTZXRDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDI4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanNcbi8vIG1vZHVsZSBpZCA9IDI4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlSGFzKHZhbHVlKSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5U29tZS5qc1xuLy8gbW9kdWxlIGlkID0gMjgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgYGNhY2hlYCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gY2FjaGUgVGhlIGNhY2hlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlSGFzKGNhY2hlLCBrZXkpIHtcbiAgcmV0dXJuIGNhY2hlLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHLFxuICAgICAgb2JqUHJvcHMgPSBnZXRBbGxLZXlzKG9iamVjdCksXG4gICAgICBvYmpMZW5ndGggPSBvYmpQcm9wcy5sZW5ndGgsXG4gICAgICBvdGhQcm9wcyA9IGdldEFsbEtleXMob3RoZXIpLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gIGlmIChvYmpMZW5ndGggIT0gb3RoTGVuZ3RoICYmICFpc1BhcnRpYWwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGluZGV4ID0gb2JqTGVuZ3RoO1xuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgaWYgKCEoaXNQYXJ0aWFsID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IHRydWU7XG4gIHN0YWNrLnNldChvYmplY3QsIG90aGVyKTtcbiAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gIHZhciBza2lwQ3RvciA9IGlzUGFydGlhbDtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBvYmpWYWx1ZSwga2V5LCBvdGhlciwgb2JqZWN0LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICA/IChvYmpWYWx1ZSA9PT0gb3RoVmFsdWUgfHwgZXF1YWxGdW5jKG9ialZhbHVlLCBvdGhWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spKVxuICAgICAgICAgIDogY29tcGFyZWRcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgdmFyIG9iakN0b3IgPSBvYmplY3QuY29uc3RydWN0b3IsXG4gICAgICAgIG90aEN0b3IgPSBvdGhlci5jb25zdHJ1Y3RvcjtcblxuICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgIGlmIChvYmpDdG9yICE9IG90aEN0b3IgJiZcbiAgICAgICAgKCdjb25zdHJ1Y3RvcicgaW4gb2JqZWN0ICYmICdjb25zdHJ1Y3RvcicgaW4gb3RoZXIpICYmXG4gICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgIHR5cGVvZiBvdGhDdG9yID09ICdmdW5jdGlvbicgJiYgb3RoQ3RvciBpbnN0YW5jZW9mIG90aEN0b3IpKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanNcbi8vIG1vZHVsZSBpZCA9IDI4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAyOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gMjkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDI5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDI5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDMwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDMwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDMwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gMzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMzA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDMwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDMwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gMzEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMzE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDMxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZSc7XG5cbmV4cG9ydCBjb25zdCBhZGRIeWJyaWRDZWxsID0gKGNlbGxJZCwgZm9ybXVsYSwgY2VsbFRvV2F0Y2gsIGNhbGxiYWNrRnVuYykgPT4gKHtcbiAgdHlwZTogdHlwZXMuQWRkSHlicmlkQ2VsbCxcbiAgY2VsbElkLFxuICBmb3JtdWxhLFxuICBjZWxsVG9XYXRjaCxcbiAgY2FsbGJhY2tGdW5jLFxufSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVIeWJyaWRDZWxsID0gY2VsbElkID0+ICh7XG4gIHR5cGU6IHR5cGVzLlJlbW92ZUh5YnJpZENlbGwsXG4gIGNlbGxJZCxcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NjcmlwdC9hY3Rpb25zL0h5YnJpZENlbGxBY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IHN1bSA9IGEgPT4gYS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBwYXJzZUZsb2F0KGN1cnJlbnQpLCAwKTtcblxuZXhwb3J0IGNvbnN0IGF2ZyA9IChhKSA9PiB7XG4gIGNvbnN0IHRvdGFsID0gYS5yZWR1Y2UoKHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBwYXJzZUZsb2F0KGN1cnJlbnQpLCAwKTtcbiAgcmV0dXJuIHRvdGFsIC8gYS5sZW5ndGg7XG59O1xuXG5leHBvcnQgY29uc3QgbWluID0gYSA9PiBhLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gTWF0aC5taW4ocHJldiwgcGFyc2VGbG9hdChjdXJyZW50KSkpO1xuXG5leHBvcnQgY29uc3QgbWF4ID0gYSA9PiBhLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gTWF0aC5tYXgocHJldiwgcGFyc2VGbG9hdChjdXJyZW50KSkpO1xuXG5leHBvcnQgY29uc3Qgc3Vic3RyYWN0ID0gYSA9PiBwYXJzZUZsb2F0KGFbMF0pIC0gcGFyc2VGbG9hdChhWzFdKTtcblxuZXhwb3J0IGNvbnN0IG11bHRpcGxpY2F0aW9uID0gYSA9PiBhLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4gcHJldiAqIHBhcnNlRmxvYXQoY3VycmVudCksIDEpO1xuXG5leHBvcnQgY29uc3QgZGl2aWRlID0gYSA9PiBwYXJzZUZsb2F0KGFbMF0pIC8gcGFyc2VGbG9hdChhWzFdKTtcblxuY29uc3QgbWF0aEZ1bmMgPSB7XG4gIHN1bSxcbiAgbWluLFxuICBhdmcsXG4gIG1heCxcbiAgc3Vic3RyYWN0LFxuICBtdWx0aXBsaWNhdGlvbixcbiAgZGl2aWRlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWF0aEZ1bmM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L3V0aWwvbWF0aEZ1bmN0aW9uLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgU2hlZXQgZnJvbSAnLi4vY29tcG9uZW50cy9TaGVldCc7XG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgc2hlZXQ6IHN0YXRlLnNoZWV0LFxufSk7XG5cbmNvbnN0IFNoZWV0Q29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG51bGwpKFNoZWV0KTtcblxuZXhwb3J0IGRlZmF1bHQgU2hlZXRDb250YWluZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NvbnRhaW5lcnMvU2hlZXRDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBTaGVldENlbGxDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9TaGVldENlbGxDb250YWluZXInO1xuXG5jbGFzcyBTaGVldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdlbmVyYXRlQ29sdW1uKHJvd05vKSB7XG4gICAgLy8gZG9uJ3QgZ2VuZXJhdGUgcm93IG5vICcwJ1xuICAgIC8vIGZvciBnb29kIFVYIHN0YXJ0IGNvdW50aW5nIGZyb20gMSBub3QgemVyb1xuICAgIC8vIGV4YW1wbGUgXCI9YTAgKyBiMFwiIGRvc2Ugbm90IGZlZWwgbmV0dXJhbFxuICAgIGNvbnN0IGNvbHVtbiA9IFtdO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzLnNoZWV0W3Jvd05vXSk7XG4gICAgaWYgKHJvd05vID09PSAwKSB7XG4gICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb2x1bW4ucHVzaCg8dGQga2V5PXtgY29yZGluYXRlJHtrZXl9YH0gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgY29yZGluYXRlXCI+e2tleS50b1VwcGVyQ2FzZSgpfTwvdGQ+KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGNvbHVtbi5wdXNoKFxuICAgICAgICA8U2hlZXRDZWxsQ29udGFpbmVyIGtleT17a2V5ICsgcm93Tm99IGNvbHVtbklkPXtrZXl9IHJvd05vPXtyb3dOb30gLz4sXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBjb2x1bW47XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaGVldCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHNoZWV0X190YWJsZVwiPlxuICAgICAgICA8dGJvZHk+e3NoZWV0Lm1hcCgob2JqLCByb3dObykgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e3Jvd05vfT5cbiAgICAgICAgICAgIDx0ZCBrZXk9e2Bjb3JkaW5hdGUke3Jvd05vfWB9IGNsYXNzTmFtZT1cImNvcmRpbmF0ZSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHtyb3dOb31cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICB7dGhpcy5nZW5lcmF0ZUNvbHVtbihyb3dObyl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKSl9PC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG5TaGVldC5wcm9wVHlwZXMgPSB7XG4gIHNoZWV0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hlZXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2NyaXB0L2NvbXBvbmVudHMvU2hlZXQuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IFNoZWV0Q2VsbCBmcm9tICcuLi9jb21wb25lbnRzL1NoZWV0Q2VsbCc7XG5pbXBvcnQgeyBzZXRBY3RpdmVDZWxsLCBzZXRDZWxsVmFsdWUgfSBmcm9tICcuLi9hY3Rpb25zL0NlbGxBY3Rpb25zJztcbmltcG9ydCB7IGtleURvd25IYW5kbGVyLCBpbnB1dEV4aXRIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbC91dGlsJztcblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gIGNvbnN0IGlzQWN0aXZlID0gc3RhdGUuYWN0aXZlQ2VsbC5jdXJyZW50QWN0aXZlQ2VsbCA9PT0gb3duUHJvcHMuY29sdW1uSWQgKyBvd25Qcm9wcy5yb3dObztcbiAgY29uc3QgaXNIeWJyaWRDZWxsID0gISEoc3RhdGUuaHlicmlkQ2VsbHMuY2VsbHNbb3duUHJvcHMuY29sdW1uSWQgKyBvd25Qcm9wcy5yb3dOb10pO1xuICBjb25zdCBpc0VkaXRhYmxlID0gaXNBY3RpdmUgJiYgc3RhdGUuYWN0aXZlQ2VsbC5pc0VkaXRhYmxlO1xuICByZXR1cm4ge1xuICAgIHJvd05vOiBvd25Qcm9wcy5yb3dObyxcbiAgICBjb2x1bW5JZDogb3duUHJvcHMuY29sdW1uSWQsXG4gICAgaXNBY3RpdmUsXG4gICAgYnlEdWJsZUNsaWNrOiBzdGF0ZS5hY3RpdmVDZWxsLmJ5RHVibGVDbGljayxcbiAgICBpc0VkaXRhYmxlLFxuICAgIHRleHQ6IChpc0h5YnJpZENlbGwgJiYgaXNBY3RpdmUgJiYgIWlzRWRpdGFibGUpID9cbiAgICAgIHN0YXRlLmh5YnJpZENlbGxzLmNlbGxzW293blByb3BzLmNvbHVtbklkICsgb3duUHJvcHMucm93Tm9dLmZvcm11bGFcbiAgICAgIDogc3RhdGUuc2hlZXRbb3duUHJvcHMucm93Tm9dW293blByb3BzLmNvbHVtbklkXSxcbiAgICBmb3JtdWxhOiBpc0h5YnJpZENlbGwgJiYgc3RhdGUuaHlicmlkQ2VsbHMuY2VsbHNbb3duUHJvcHMuY29sdW1uSWQgKyBvd25Qcm9wcy5yb3dOb10uZm9ybXVsYSxcbiAgICBpc0h5YnJpZENlbGwsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBvblNpbmdsZUNsaWNrSGFuZGxlcjogKGUsIGNvbHVtbklkLCByb3dObywgaXNBY3RpdmUpID0+IHtcbiAgICBpZiAoaXNBY3RpdmUpIHJldHVybjtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlQ2VsbCA9IGNvbHVtbklkICsgcm93Tm87XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlQ2VsbChjdXJyZW50QWN0aXZlQ2VsbCwgZmFsc2UsIGZhbHNlKSk7XG4gIH0sXG4gIG9uRG91YmxlQ2xpY2tIYW5kbGVyOiAoZSwgY29sdW1uSWQsIHJvd05vLCBpc0VkaXRhYmxlKSA9PiB7XG4gICAgaWYgKGlzRWRpdGFibGUpIHJldHVybjtcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlQ2VsbCA9IGNvbHVtbklkICsgcm93Tm87XG4gICAgZGlzcGF0Y2goc2V0QWN0aXZlQ2VsbChjdXJyZW50QWN0aXZlQ2VsbCwgdHJ1ZSwgdHJ1ZSkpO1xuICB9LFxuICBvbktleURvd25IYW5kbGVyOiAoZSwgY29sdW1uSWQsIHJvd05vLCBpc0VkaXRhYmxlLCBieUR1YmJsZUNsaWNrKSA9PiB7XG4gICAga2V5RG93bkhhbmRsZXIoZSwgZGlzcGF0Y2gsIGNvbHVtbklkLCByb3dObywgaXNFZGl0YWJsZSwgYnlEdWJibGVDbGljayk7XG4gIH0sXG4gIG9uQ2hhbmdlSGFuZGxlcjogKHZhbHVlLCBjb2x1bW5JZCwgcm93Tm8pID0+IHtcbiAgICBkaXNwYXRjaChzZXRDZWxsVmFsdWUoY29sdW1uSWQsIHJvd05vLCB2YWx1ZSkpO1xuICB9LFxuICBpbnB1dEV4aXRIYW5kbGVyOiAoY29sdW1uSWQsIHJvd05vLCB0ZXh0LCBpc0h5YnJpZENlbGwpID0+IHtcbiAgICBpbnB1dEV4aXRIYW5kbGVyKGRpc3BhdGNoLCBjb2x1bW5JZCwgcm93Tm8sIHRleHQsIGlzSHlicmlkQ2VsbCk7XG4gIH0sXG59KTtcblxuY29uc3QgU2hlZXRDZWxsQ29udGFpbmVyID0gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoXG4gIFNoZWV0Q2VsbCxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNoZWV0Q2VsbENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY29udGFpbmVycy9TaGVldENlbGxDb250YWluZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgU2hlZXRDZWxsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmZvY3VzSW5wdXQgPSB0aGlzLmZvY3VzSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvY3VzRGl2ID0gdGhpcy5mb2N1c0Rpdi5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuaXNBY3RpdmUgJiYgIXRoaXMucHJvcHMuaXNFZGl0YWJsZSkge1xuICAgICAgdGhpcy5mb2N1c0RpdigpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmVQcm9wKSB7XG4gICAgY29uc3Qgd2FzRWRpdGFibGUgPSBwcmVQcm9wLmlzRWRpdGFibGU7XG4gICAgY29uc3QgeyBpc0VkaXRhYmxlLCBpc0h5YnJpZENlbGwsIGNvbHVtbklkLCByb3dObyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0aGlzLnByb3BzLmlzQWN0aXZlICYmICF0aGlzLnByb3BzLmlzRWRpdGFibGUpIHtcbiAgICAgIHRoaXMuZm9jdXNEaXYoKTtcbiAgICB9XG4gICAgaWYgKGlzRWRpdGFibGUgJiYgIXdhc0VkaXRhYmxlKSB7XG4gICAgICB0aGlzLmZvY3VzSW5wdXQoKTtcbiAgICAgIGlmIChpc0h5YnJpZENlbGwgJiYgKHByZVByb3AudGV4dCAhPT0gdGhpcy5wcm9wcy50ZXh0KSkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlSGFuZGxlcihwcmVQcm9wLnRleHQsIGNvbHVtbklkLCByb3dObyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh3YXNFZGl0YWJsZSAmJiAhaXNFZGl0YWJsZSkge1xuICAgICAgdGhpcy5wcm9wcy5pbnB1dEV4aXRIYW5kbGVyKFxuICAgICAgICBwcmVQcm9wLmNvbHVtbklkLFxuICAgICAgICBwcmVQcm9wLnJvd05vLFxuICAgICAgICBwcmVQcm9wLnRleHQsXG4gICAgICAgIHByZVByb3AuaXNIeWJyaWRDZWxsKTtcbiAgICB9XG4gIH1cblxuICBmb2N1c0lucHV0KCkge1xuICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGZvY3VzRGl2KCkge1xuICAgIHRoaXMuZGl2LmZvY3VzKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgaXNBY3RpdmUsXG4gICAgICBpc0VkaXRhYmxlLFxuICAgICAgYnlEdWJsZUNsaWNrLFxuICAgICAgcm93Tm8sXG4gICAgICBjb2x1bW5JZCxcbiAgICAgIHRleHQsXG4gICAgICBvblNpbmdsZUNsaWNrSGFuZGxlcixcbiAgICAgIG9uRG91YmxlQ2xpY2tIYW5kbGVyLFxuICAgICAgb25LZXlEb3duSGFuZGxlcixcbiAgICAgIG9uQ2hhbmdlSGFuZGxlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjbGFzc05hbWVWYWx1ZSA9IGlzQWN0aXZlID8gJ3NoZWV0X19jZWxsLS1hY3RpdmUnIDogJ3NoZWV0X19jZWxsJztcblxuICAgIHJldHVybiAoXG4gICAgICA8dGRcbiAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICBvblNpbmdsZUNsaWNrSGFuZGxlcihlLCBjb2x1bW5JZCwgcm93Tm8sIGlzQWN0aXZlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Eb3VibGVDbGljaz17KGUpID0+IHtcbiAgICAgICAgICBvbkRvdWJsZUNsaWNrSGFuZGxlcihlLCBjb2x1bW5JZCwgcm93Tm8sIGlzRWRpdGFibGUpO1xuICAgICAgICB9fVxuICAgICAgICBvbktleURvd249eyhlKSA9PiB7XG4gICAgICAgICAgb25LZXlEb3duSGFuZGxlcihlLCBjb2x1bW5JZCwgcm93Tm8sIGlzRWRpdGFibGUsIGJ5RHVibGVDbGljayk7XG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lVmFsdWV9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJzaGVldF9fc3ViLWNlbGxcIlxuICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgcmVmPXsoZGl2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpdiA9IGRpdjtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2lzRWRpdGFibGUgPyAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hlZXRfX2NlbGxfX2lucHV0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIG9uQ2hhbmdlSGFuZGxlcihlLnRhcmdldC52YWx1ZSwgY29sdW1uSWQsIHJvd05vKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RkPlxuICAgICk7XG4gIH1cbn1cblxuU2hlZXRDZWxsLnByb3BUeXBlcyA9IHtcbiAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGJ5RHVibGVDbGljazogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNFZGl0YWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNIeWJyaWRDZWxsOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICByb3dObzogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLmlzUmVxdWlyZWQsXG4gIGNvbHVtbklkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKS5pc1JlcXVpcmVkLFxuICBvblNpbmdsZUNsaWNrSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Eb3VibGVDbGlja0hhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uS2V5RG93bkhhbmRsZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlSGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaW5wdXRFeGl0SGFuZGxlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoZWV0Q2VsbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zY3JpcHQvY29tcG9uZW50cy9TaGVldENlbGwuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9
//
//     Topson
//     Copyright(c) 2015 Matt Hernandez <matt@modulus.io>
//     MIT Licensed
//

//
// Parses the result of the top command removing the specified offset.
//
exports.parse = function (input, offset, fn) {
  var result = [];
  var keys = [];

  //
  // Remove the offset.
  //
  var parts = input.split('\n').slice(offset);

  for (var i = 0; i < parts.length - 1; i++) {
    var current = parts[i].replace(/[ ]+/g, ',');
    var inner = {};

    if (i === 0) {
      // Header row.
      keys = current.split(',');
    }

    var vals = current.split(',');

    for (var ii = 0; ii < vals.length; ii++) {
      if (vals[ii].length === 0) {
        continue;
      }

      inner[keys[ii]] = vals[ii];
    }

    result.push(inner);
  }

  fn(null, JSON.stringify(result));
};

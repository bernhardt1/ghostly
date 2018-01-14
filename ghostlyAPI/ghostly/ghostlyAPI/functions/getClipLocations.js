/**
* Gets all nearby clips and their locations
* @param {number} lat
* @param {number} lon
* @returns {array}
*/

module.exports = (lat, lon, context, callback) => {
  callback(null, [{"clip": "albasl309a0", "lat":30, "lon":202},
  					{"clip": "aHIWasd02", "lat":49, "lon":123}]);
};

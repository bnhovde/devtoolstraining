/**
 * @function getRandomInt
 * @desc returns a random integer between the specified values
 * @param {number} min Min value
 * @param {number} max Max value
 * @return {int} - Random int between values
 */
function getRandomInt(min, max) {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt)) + minInt; //The maximum is exclusive and the minimum is inclusive
};

export {
    getRandomInt
};

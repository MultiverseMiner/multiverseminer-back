"use strict";

/**
 * Returns a key-value pair for all command line arguments passed. If the parameter does not have a value, then
 *  it defaults to 'true.'
 *
 * @param {Array} [optCommandLine] - will use real command line arguments if omitted. note: first 2 elements are not parsed
 * @returns {Object} - key-value pairs of all parameters
 */
function parseCommandLine(optCommandLine) {
  var commandLine = optCommandLine || process.argv,
    commandLineLength = commandLine.length,
    parsedCommandLine = {},
    ii,
    currentCommand;

  for (ii = 2; ii < commandLineLength; ii++) {
    currentCommand = commandLine[ii].split('=');

    if (currentCommand.length > 1) {
      parsedCommandLine[currentCommand[0]] = currentCommand[1];
    } else {
      parsedCommandLine[currentCommand[0]] = true;
    }
  }

  return parsedCommandLine;
}

module.exports = parseCommandLine;
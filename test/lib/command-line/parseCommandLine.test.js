var parseCommandLine = require('../../../lib/command-line/parseCommandLine.js');

describe('parseCommandLine', function () {

  it('returns an object containing all the command line parameters as key: values', function () {
    var commandLine = [
        'node',
        'someFilename.js',
        'name=niroshan',
        'month=september'
        ],
      expectedParsedCommandLine = {
        name: 'niroshan',
        month: 'september'
        },
      parsedCommandLine = parseCommandLine(commandLine);

    expect(parsedCommandLine).to.deep.equal(expectedParsedCommandLine);
  });

  it('sets values of parameters to true if the key does not have a value', function () {
    var commandLine = [
        'node',
        'someFilename.js',
        'debug_mode'
      ],
      expectedParsedCommandLine = {
        debug_mode: true
      },
      parsedCommandLine = parseCommandLine(commandLine);

    expect(parsedCommandLine).to.deep.equal(expectedParsedCommandLine);
  });
});

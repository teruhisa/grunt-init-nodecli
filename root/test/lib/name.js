/* global describe, it, TestBootstrap */

// Test setup

var bootstrap = TestBootstrap.get(__filename),
    // file name that you are testing
    testfile = bootstrap.name,
    // module that you are testing
    imported = bootstrap.file;

// Test cases below
describe(testfile, function() {
  it('default', function(){
    imported.cli.start().should.equal('awesome');
  });
  it.skip('TODO: fill in test cases', function(){
    // TODO: fill in test cases
  });
});

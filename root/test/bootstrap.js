var sinon = require("sinon");
var chai = require("chai");
var should = require("chai").Should();

var path = require('path');
var SEP = path.sep;
var testpath = process.cwd() + SEP + 'test' + SEP;

TestBootstrap = {
    get: function get(filename) {
        var testfile = filename.replace(testpath, "");

        if (process.env.TEST_COV) {
            var blocks = testfile.split(SEP),
                firstblock = blocks.shift();
            testfile = firstblock + ".cov" + SEP + blocks.join(SEP);
        }

        return {
            name: testfile,
            file: require('../' + testfile)
        };
    }
};

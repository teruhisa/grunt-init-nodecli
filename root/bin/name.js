#! /usr/bin/env node

/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var optimist = require('optimist')
    .usage("{%= description %}\nUsage: $0"),
    argv = optimist.argv;

if (argv.help || argv.h) {
    optimist.showHelp();
} else {
    require('../lib/{%= name %}').cli.start(argv);
}
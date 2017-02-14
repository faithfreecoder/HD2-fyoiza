var chalk       = require('chalk');
var clear       = require('clear');
var CLI         = require('clui');
var figlet      = require('figlet');
var inquirer    = require('inquirer');
var Preferences = require('preferences');
var Spinner     = CLI.Spinner;
var ip2countrify = require('ip2countrify');
var countryCode = require('./lib/countryCode');
//var GitHubApi   = require('github');
var _           = require('lodash');
var git         = require('simple-git')();
var touch       = require('touch');
var fs          = require('fs');

clear();
console.log(
  chalk.blue(
    figlet.textSync('MY CLI', { horizontalLayout: 'full' })
  )
);
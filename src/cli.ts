#!/usr/bin/env node

import yargs from "yargs";

yargs(process.argv.slice(2))
  .scriptName("kreat")
  .usage("$0 <cmd> [args]")
  .commandDir("commands", { extensions: ["ts", "js"] })
  .demandCommand(2, "Enter scaffold type and name")
  .help()
  .parse();

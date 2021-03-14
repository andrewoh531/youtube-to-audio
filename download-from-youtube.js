#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const youtubedl = require('youtube-dl-exec');
const dateFns = require("date-fns");

if (!argv.link) {
    console.error("Please provide a youtube link: './download-from-youtube.js --link=https://www.youtube.com/watch?v=SzEfgO24FnI'");
    process.exit(1);
}

const date = dateFns.format(new Date, "yyyy-MM-dd");
const outputFileName = `${date}-original.mp3`

youtubedl(argv.link, {
    noMarkWatched: true,
    extractAudio: true,
    audioFormat: "mp3",
    audioQuality: 0,
    verbose: true,
    output: outputFileName,
}).then(output => {
    console.log(`\nFinished downloading ${argv.link} into ${outputFileName}`);
    console.log(output);
})
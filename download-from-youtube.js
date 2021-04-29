#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const youtubedl = require('youtube-dl-exec');
const dateFns = require("date-fns");

if (!argv.link) {
    console.error("Please provide a youtube link: './download-from-youtube.js --link=https://www.youtube.com/watch?v=SzEfgO24FnI' --output-file=output.mp3");
    process.exit(1);
}
if (!argv["output-file"]) {
    console.error("Please provide an output file name: './download-from-youtube.js --link=https://www.youtube.com/watch?v=SzEfgO24FnI' --output-file=output.mp3");
    process.exit(1);
}

const youtubeLink = argv.link;
const outputFileName = argv["output-file"]
console.log(`Downloading ${youtubeLink}...`)
youtubedl(youtubeLink, {
    noMarkWatched: true,
    extractAudio: true,
    audioFormat: "mp3",
    audioQuality: 0,
    verbose: true,
    output: outputFileName,
}).then(output => {
    console.log(`\nFinished downloading ${youtubeLink} into ${outputFileName}`);
    console.log(output);
})
#!/usr/bin/env node
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;
const { exec } = require("child_process");

if (!argv.startTime) {
    console.error("Please provide a start time: './trim-audio.js --startTime=00:00:10 --endTime=00:00:20 --input-file=input.mp3 --output-file=output.mp3");
    process.exit(1);
}
if (!argv.endTime) {
    console.error("Please provide an end time: './trim-audio.js --startTime=00:00:10 --endTime=00:00:20 --input-file=input.mp3 --output-file=output.mp3");
    process.exit(1);
}
if (!argv["input-file"]) {
    console.error("Please provide an input file: './trim-audio.js --startTime=00:00:10 --endTime=00:00:20 --input-file=input.mp3 --output-file=output.mp3");
    process.exit(1);
}
if (!argv["output-file"]) {
    console.error("Please provide an output file: './trim-audio.js --startTime=00:00:10 --endTime=00:00:20 --input-file=input.mp3 --output-file=output.mp3");
    process.exit(1);
}

const startTime = argv.startTime;
const endTime = argv.endTime;
const inputFileName = argv["input-file"]
const outputFileName = argv["output-file"]
console.log(`Trimming ${inputFileName} from ${startTime} to ${endTime} into ${outputFileName}`)


const trim = () => {
    return new Promise((resolve, reject) => {
        exec(`ffmpeg -ss ${startTime} -to ${endTime} -i "${inputFileName}" -c:a libmp3lame "${outputFileName}"`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${stderr}`);
                return reject(stderr);
            }
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
            return resolve();
        });
    });
}

trim()
    .then(() => { console.log("Successfully trimmed!!")})
    .catch(err => console.log("ERROR trimming: ", err));
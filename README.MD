## Overview
There are a few steps involved in the script:
1. Download the Youtube video as an mp3 file
2. Trim the front and end of the mp3
3. Increase the volume if required

## Running the scripts
To download a Youtube link as audio and then prune it, run the script:
`./download-crop.sh <youtube-link> 00:38:44.00 01:26:47.00`

To increase volume:
`ffmpeg -i input.mp3 -filter:a "volume=3" output.mp3`

# TODO
- [x] Create a nodeJS script to download the file from Youtube (might be able to just use it in lambda) 
- [x] Create a NodeJS script to trim the mp3 audio file 
- [ ] Create lambda for the steps above


`./download-crop.sh <youtube-link> 00:38:44.00 01:26:47.00`

To increase volume:
`ffmpeg -i input.mp3 -filter:a "volume=3" output.mp3`

# TODO
- [x] Create a nodeJS script to download the file from Youtube (might be able to just use it in lambda) 
- [ ] Create a NodeJS script to prune the mp3 audio file 
- [ ] If both the steps above are quick then could just create them as a lambda function
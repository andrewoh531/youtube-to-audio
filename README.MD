`youtube-dl -i --no-mark-watched --extract-audio --audio-format mp3 --audio-quality 0 YT_URL`

`ffmpeg -ss 00:32:50.00 -to 01:12:25.00 -i "2021-02-28-original.mp3" -c:a libmp3lame output.mp3`

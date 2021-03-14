#!/bin/bash

set -euo pipefail

# TODO Do better argument checking
# Should provide 3 arguments:
#   1 - the youtube link
#   2 - start time
#   3 - end time
if [ $# -eq 0 ]; then
    echo "No arguments provided"
    exit 1
fi


TODAYS_DATE=$(date +"%Y-%m-%d")
DOWNLOADED_FILENAME="${TODAYS_DATE}-original.mp3"
EDITED_FILENAME="${TODAYS_DATE}-pruned.mp3"

echo "Downloading $1..."
youtube-dl -i --no-mark-watched --extract-audio --audio-format mp3 --audio-quality 0 --output ${DOWNLOADED_FILENAME} $1

echo "Editing $1..."
ffmpeg -ss $2 -to $3 -i "${DOWNLOADED_FILENAME}" -c:a libmp3lame "${EDITED_FILENAME}"

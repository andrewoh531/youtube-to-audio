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
DOWNLOADED_FILENAME="archives/${TODAYS_DATE}-original.mp3"
EDITED_FILENAME="archives/${TODAYS_DATE}-pruned.mp3"

./download-from-youtube.js --link=$1 --output-file=${DOWNLOADED_FILENAME}

echo "Editing $1..."
ffmpeg -ss $2 -to $3 -i "${DOWNLOADED_FILENAME}" -c:a libmp3lame "${EDITED_FILENAME}"

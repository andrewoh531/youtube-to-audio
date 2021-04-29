#!/bin/bash

set -euo pipefail

# TODO Do better argument checking
# Should provide 3 arguments:
#   1 - the youtube link
#   2 - start time
#   3 - end time
#   e.g. ./download-crop.sh https://www.youtube.com/watch\?v\=DXoKX97cufE 00:41:42 01:31:10

if [ $# -eq 0 ]; then
    echo "No arguments provided"
    exit 1
fi

TODAYS_DATE=$(date +"%Y-%m-%d")
DOWNLOADED_FILENAME="archives/${TODAYS_DATE}-original.mp3"
EDITED_FILENAME="archives/${TODAYS_DATE}-pruned.mp3"

./download-from-youtube.js --link=$1 --output-file=${DOWNLOADED_FILENAME}
./trim-audio.js --startTime=${2} --endTime=${3} --input-file=${DOWNLOADED_FILENAME} --output-file=${EDITED_FILENAME}

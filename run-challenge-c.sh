#!/bin/bash

# absolute path to the input file
INPUT_DIR="C:/Users/aidil/Desktop/job-hunting/tasks/snappymob-challenge"
OUTPUT_DIR="C:/Users/aidil/Desktop/job-hunting/tasks/snappymob-challenge"  # Mount the directory, not the specific file

IMAGE_NAME="snappymob-challenge-c"

echo "Running $IMAGE_NAME..."
echo "Input filepath: $INPUT_DIR"
echo "Output directory: $OUTPUT_DIR"

docker run \
    -v "$INPUT_DIR/out/random.txt:/app/out/random.txt" \
    -v "$OUTPUT_DIR/out:/app/out" \
    "$IMAGE_NAME"
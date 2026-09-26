#!/bin/bash

set -e

TMP_DIR="/tmp/aws-codeartifact-auth"

mkdir -p "$TMP_DIR"

npm install \
  --prefix "$TMP_DIR" \
  --no-save \
  @aws-sdk/client-sts \
  @aws-sdk/client-codeartifact

NODE_PATH="$TMP_DIR/node_modules" node scripts/codeartifact-auth.mjs
#!/usr/bin/env bash

VERSION=$(node -p "require('./package.json').version")
echo "$VERSION"

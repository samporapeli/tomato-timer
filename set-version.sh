#!/usr/bin/env bash

VERSION=$1

if [[ -z "$VERSION" ]]; then
	echo "Usage: $0 <new-version>"
	exit 1
fi

# Update the version in the package.json file
sed -i 's/\("version": *"\)[^"]*\(" *\)/\1'"$1"'\2/' package.json

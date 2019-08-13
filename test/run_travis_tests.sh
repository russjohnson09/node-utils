#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
dir="$(pwd)"
cd $dir

whoami
echo "hello run_tests.sh"

#echo "set directory to node application"
#cd ../../node_app

echo "install required node modules"

npm install

#echo "compile"
#tsc

echo "running main mocha tests with coverage"
npm test
#should exit with 0
#npm run coverage

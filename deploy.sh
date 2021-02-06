#!/bin/bash

rm -rf .next out
npx next build
npx next export
cd out
rm -rf .git
git init
git checkout -b gh-pages
touch .nojekyll
git add .
git commit -am "deploy to gh-pages at $(date)"
git  push --force "git@github.com:sshplendid/nextjs-study.git" gh-pages
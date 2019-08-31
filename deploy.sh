#!/usr/bin/env bash

rm -rf public/
gatsby build && rsync -avzh public/ unsystem:/var/www/unsystem.dev/html/

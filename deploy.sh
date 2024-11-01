#!/bin/bash

set -e
export $(cat .env | xargs)

TF_DIR="./terraform"
cd $TF_DIR

./terraform.exe init
./terraform.exe fmt
./terraform.exe validate
./terraform.exe plan
./terraform.exe apply

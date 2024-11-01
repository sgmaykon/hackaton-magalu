#!/bin/bash

set -e
export $(cat .env | xargs)

TF_DIR="./terraform"
cd $TF_DIR

terraform init
terraform fmt
terraform validate
terraform plan -out=tfplan
terraform apply "tfplan"

#!/bin/bash

if [ -f .env ]; then
  source .env
  echo "Variáveis de ambiente carregadas com sucesso."
else
  echo "Arquivo .env não encontrado!"
  exit 1
fi

TF_DIR="./terraform"
cd $TF_DIR

terraform init
terraform fmt
terraform validate
terraform apply
terraform {
  required_providers {
    mgc = {
      source = "magalucloud/mgc"
    }
  }
}

provider "mgc" {
  alias  = "nordeste"
  region = "br-ne1"
}

resource "mgc_ssh_keys" "key" {
  name = "gustavo-gimenes"
  # Altere para a sua chave publica
  key = var.userssh
}

resource "mgc_virtual_machine_instances" "vm-sudeste" {
  provider = mgc.sudeste
  name     = "vm-sudeste"
  machine_type = {
    name = var.machinetype
  }
  image = {
    name = var.image
  }
  network = {
    associate_public_ip = true
    interface = {
      security_groups = [{
         # grupo criado previamente pelo gabriel
        id = "4aa1a237-2d57-439b-bf6a-177ddbace4cb"
      }]
    }
  }

  ssh_key_name = "Danilo"
}

output "ip" {
  value = mgc_virtual_machine_instances.vm-sudeste.network.public_address
}

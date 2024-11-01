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

resource "mgc_virtual_machine_instances" "vm-nordeste" {
  provider = mgc.nordeste
  name     = var.vmname
  machine_type = {
    name = var.machinetype
  }
  image = {
    name = "cloud-ubuntu-22.04 LTS"
  }
  network = {
    associate_public_ip = true
  }

  ssh_key_name = "Danilo"
}

output "ip" {
  value = mgc_virtual_machine_instances.vm-nordeste.network.public_address
}
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
<<<<<<< HEAD
  name     = var.vmname
=======
  name     = "vm-nordeste"
>>>>>>> 6bd54df83497225685f2acfe863b50a331e34017
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 6bd54df83497225685f2acfe863b50a331e34017

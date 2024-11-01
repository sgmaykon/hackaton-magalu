---
# generated by https://github.com/hashicorp/terraform-plugin-docs
page_title: "mgc_ssh_keys Resource - terraform-provider-mgc"
subcategory: "SSH Keys"
description: |-
  Add a new SSH key to your account
---

# mgc_ssh_keys (Resource)

Add a new SSH key to your account

## Example Usage

```terraform
resource "mgc_ssh_keys" "my_key" {
  name = "my_new_key"
  key = "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIP+E3U/DpNagT79ueF+xQn9dNFUKheopjx/kIBC1qQM3"
}
```

<!-- schema generated by tfplugindocs -->
## Schema

### Required

- `key` (String) Public key
- `name` (String) Name of the SSH key

### Read-Only

- `id` (String) ID of the SSH key
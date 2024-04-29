import json
import os

def save_to_json(admin_user,admin_password, fabric):
    data = {
        "arista": {
            "hosts": {},
            "vars": {
                "ansible_network_os": "eos",
                "ansible_httpapi_use_ssl": "yes",
                "ansible_httpapi_validate_certs": "no",
                "ansible_user": admin_user,
                "ansible_httpapi_password": admin_password
            }
        }
    }
    for leaf, ip in fabric['leafs'].items():
        data["arista"]["hosts"][leaf] = {
            "ansible_host": ip.split('/')[0],
            "ansible_httpapi_port": 443
        }

    for spine, ip in fabric['spines'].items():
        data["arista"]["hosts"][spine] = {
            "ansible_host": ip.split('/')[0],
            "ansible_httpapi_port": 443
        }

    directory = 'Ansible/connectivity/'
    os.makedirs(directory, exist_ok=True)

    with open("Ansible/" + 'hosts.json', 'w') as f:
        json.dump(data, f, indent=4)
        print("✅ hosts.json créé avec succès")
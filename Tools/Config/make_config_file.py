from Tools.Config.File.Connect_test.connect_test import yaml_content , ansible_data
import os

def init():
  path_playbook = "Ansible/connectivity/get-version.yml"
  path_ansible_cfg = "Ansible/connectivity/ansible.cfg"
  generate_config_file(path_ansible_cfg,ansible_data)
  generate_config_file(path_playbook,yaml_content)


def generate_config_file(path_playbook,file_content):
    with open(path_playbook, "w") as file:
        file.write(file_content)
        print(f"✅{os.path.basename(path_playbook)} get_version.yml créé avec succès")

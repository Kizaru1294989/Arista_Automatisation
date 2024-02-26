

def init():
    make_config_file()
    generate_ansible_yaml("Ansible/connectivity/get-version.yml")


def generate_ansible_yaml(filename):
    yaml_content = f"""---
- name: Run commands on remote cEOS-lab device
  hosts: arista
  connection: httpapi
  gather_facts: no
  vars:
    ansible_python_interpreter: "python"
  tasks:
    - name: Execute Arista EOS command
      eos_command:
        commands: show version
      when: ansible_network_os == 'eos'
      register: version
    - name: Display result
      debug:
        msg: "{{{{ version.stdout[0] }}}}" """
    
    with open(filename, "w") as file:
        file.write(yaml_content)
        print("✅ get_version.yml créé avec succès")


def make_config_file():
    config_data = """
[defaults]
inventory = ./hosts.json
host_key_checking = False
roles_path = roles.galaxy:roles
stdout_callback = yaml
                """

    file_path = "Ansible/connectivity/ansible.cfg"
    with open(file_path, "w") as f:
        f.write(config_data)
        print("✅ ansible.cfg créé avec succès")
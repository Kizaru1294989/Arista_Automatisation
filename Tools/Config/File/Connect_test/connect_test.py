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
        
ansible_data = """
[defaults]
inventory = ./hosts.json
host_key_checking = False
roles_path = roles.galaxy:roles
stdout_callback = yaml
                """
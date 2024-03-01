import Tools.Color
from Tools.Input.input import input_fabric, welcome
from Tools.Json.convert_to_json import save_to_json
from Tools.Config.make_config_file import init
from Tools.Run_Playbook.run_playbook import run_ansible_playbook
from Tools.Color.colors import orange, red

def mlag_on_leaf():
    print("Mlag")

def main():
    print(welcome)
    fabric_info = input_fabric()
    admin_user = fabric_info['admin_user']
    admin_password = fabric_info['password']
    save_to_json(admin_user,admin_password,fabric_info)
    init()
    connection = run_ansible_playbook("Ansible/connectivity/get-version.yml")
    if connection : 
        print(f"{orange} Test de connexion réussie")
    else :
        print(f"{red} Test de connexion échoué")

if __name__ == '__main__':
    main()

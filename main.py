
from Tools.Input.input import input_fabric, welcome
from Tools.Json.convert_to_json import save_to_json
import subprocess
from Tools.Config.make_config_file import init
import os


def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'exécution du playbook : {e}")
    else:
        print("Le playbook a été exécuté avec succès.")


    

def main():
    print(welcome)
    fabric_info = input_fabric()
    admin_user = fabric_info['admin_user']
    admin_password = fabric_info['password']
    save_to_json(admin_user,admin_password,fabric_info)
    init()
    run_ansible_playbook("Ansible/connectivity/get-version.yml")

if __name__ == '__main__':
    main()

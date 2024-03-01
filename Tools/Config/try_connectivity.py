import os
import subprocess

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        print(f"Erreur lors de l'exécution du playbook : {e}")
    else:
        print("Le playbook a été exécuté avec succès.")
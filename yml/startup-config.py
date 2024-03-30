import os
import subprocess

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        return False
    else:
        return True
    
def main():
    print("Startup-Config \n")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Startup-Config/Leaf/Leaf.yml")
    
if __name__ == '__main__':
    main()
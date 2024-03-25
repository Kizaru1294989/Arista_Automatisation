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
    run_ansible_playbook("Ansible/connectivity/get-version.yml")
    print("MLAG PEER LINK - LEAF-4 <=> LEAF-5")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/peer_link_1/Leaf_4/leaf_4.json")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/peer_link_1/Leaf_5/leaf_5.json")
    print("MLAG PEER LINK - LEAF-3 <=> LEAF-6")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/peer_link_2/Leaf6-7.yml")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VLAN_MLAG/vlan_mlag.yml")

if __name__ == '__main__':
    main()
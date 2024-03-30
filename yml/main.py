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
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/connectivity/get-version.yml")
    # print("MLAG PEER LINK - LEAF-4 <=> LEAF-5 \n")
    # print("LEAF_4")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/peer_link_1/Leaf_4/Leaf4.yml")
    # print("LEAF_5")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/peer_link_1/Leaf_5/Leaf5.yml")
    # print("MLAG PEER LINK - LEAF-3 <=> LEAF-6")
    # print("LEAF_3")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/peer_link_2/Leaf_3/Leaf3.yml")
    # print("LEAF_6")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/peer_link_2/Leaf_6/Leaf6.yml")
    print("SPINE_2")
    run_ansible_playbook("yml/Ansible/MLAG/peer_link_1/Spine_2/spine.yml")
    print("SPINE_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/peer_link_2/Spine_3/spine.yml")

if __name__ == '__main__':
    main()
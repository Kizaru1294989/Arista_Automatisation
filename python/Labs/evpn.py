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


def evpn():
    print("EVPN")
    
    print("SPINE_1")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/Backend/Ansible/EVPN/Spine/Spine_1/Spine.yml")
    print("SPINE_2")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/Backend/Ansible/EVPN/Spine/Spine_2/Spine.yml")
    
    print("LEAF_1")
    #run_ansible_playbook("/home/rais/Arista_Automatisation/Backend/Ansible/EVPN/Leaf/Leaf_1/Leaf1.yml")
    # print("LEAF_3")
    # run_ansible_playbook("/home/rais/Arista_Automatisation/Backend/Ansible/EVPN/Leaf/Leaf_3/Leaf3.yml")
    print("LEAF_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/Backend/Ansible/EVPN/Leaf/Leaf_4/Leaf4.yml")
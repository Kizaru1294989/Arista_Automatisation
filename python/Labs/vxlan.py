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
        






def vxlan():
    print("VXLAN")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/I/Leaf_1/Leaf1.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/I/Leaf_2/Leaf2.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/I/Leaf_3/Leaf3.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/I/Leaf_4/Leaf4.yml")
    
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/II/Leaf_5/Leaf5.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/II/Leaf_6/Leaf6.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/II/Leaf_7/Leaf7.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/VXLAN/Leaf/II/Leaf_8/Leaf8.yml")
    
    
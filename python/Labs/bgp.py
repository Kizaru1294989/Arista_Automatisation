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


def bgp():
    print("BGP")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/NO_MLAG/no_mlag_spine.yml")
    
    print("SPINE_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Spine/Spine_1/Spine.yml")
    print("SPINE_2")    
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Spine/Spine_2/Spine.yml")
    print("SPINE_3") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Spine/Spine_3/Spine.yml")
    print("SPINE_4") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Spine/Spine_4/Spine.yml")
    
    print("LEAF_1") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_1/Leaf1.yml")
    print("LEAF_2") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_2/Leaf2.yml")
    print("LEAF_3") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_3/Leaf3.yml")
    print("LEAF_4") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_4/Leaf4.yml")
    
    print("LEAF_5") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_5/Leaf5.yml")
    print("LEAF_6") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_6/Leaf6.yml")
    print("LEAF_7") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_7/Leaf7.yml")
    print("LEAF_8") 
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/BGP/Leaf/Leaf_8/Leaf8.yml")
    return True
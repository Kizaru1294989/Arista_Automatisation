import os
import subprocess
from database import insert_record_device


def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True )
    except subprocess.CalledProcessError as e:
        return False
    else:
        return True


def Leaf_mlag():
    print("LEAF_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_1/Leaf_1/Leaf1.yml")
    data = {  'leaf1': True }
    insert_record_device(data,"leaf1")
    
    print("LEAF_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_1/Leaf_2/Leaf2.yml")
    data = { 'leaf2': True }
    insert_record_device(data,"leaf2")
    
    print("LEAF_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_2/Leaf_3/Leaf3.yml")
    data = {  'leaf3': True }
    insert_record_device(data,"leaf3")
    
    print("LEAF_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_2/Leaf_4/Leaf4.yml")
    data = {  'leaf4': True }
    insert_record_device(data,"leaf4")
    
    print("LEAF_5")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_3/Leaf_5/Leaf5.yml")
    data = {  'leaf5': True }
    insert_record_device(data,"leaf5")
    
    print("LEAF_6")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_3/Leaf_6/Leaf6.yml")
    data = {  'leaf6': True }
    insert_record_device(data,"leaf6")
    
    print("LEAF_7")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_4/Leaf_7/Leaf7.yml")
    data = {  'leaf7': True }
    insert_record_device(data,"leaf7")
    
    print("LEAF_8")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Leef/peer_link_4/Leaf_8/Leaf8.yml")
    data = {  'leaf8': True }
    insert_record_device(data,"leaf8")
    
def Spine_mlag():
    print("SPINE_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Spine/peer_link_1/Spine_1/Spine.yml")
    data = {  'spine1': True }
    insert_record_device(data,"spine1")
    
    print("SPINE_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Spine/peer_link_1/Spine_2/Spine.yml")
    data = {'spine2': True }
    insert_record_device(data,"spine2")
    
    print("SPINE_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Spine/peer_link_2/Spine_3/Spine.yml")
    data = {'spine3': True }
    insert_record_device(data,"spine3")
    
    print("SPINE_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Spine/peer_link_2/Spine_4/Spine.yml")
    data = {'spine4': True }
    insert_record_device(data,"spine4")
    
def Host_mlag():
    print("HOST")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/MLAG/Peer_Link_Spine/peer_link_1/Spine_1/Spine.yml")
    
def mlag():
    print("✅ Connectivity test")
    test = run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/TEST/connectivity/get-version.yml")
    if test:
        print("✅")
        Leaf_mlag()
        Spine_mlag()
        return True
    else:
        print("❌ Error : network unreachable")
        return False
    
if __name__ == '__main__':
    mlag()
    
    
    
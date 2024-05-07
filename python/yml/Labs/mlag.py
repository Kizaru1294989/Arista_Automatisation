from main import run_ansible_playbook


def Leaf_mlag():
    
    print("MLAG PEER LINK - LEAF-1 <=> LEAF-2 \n")
    print("LEAF_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_1/Leaf_1/Leaf1.yml")
    print("LEAF_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_1/Leaf_2/Leaf2.yml")

    print("MLAG PEER LINK - LEAF-3 <=> LEAF-4 \n")
    print("LEAF_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_2/Leaf_3/Leaf3.yml")
    print("LEAF_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_2/Leaf_4/Leaf4.yml")

    print("MLAG PEER LINK - LEAF-5 <=> LEAF-6")
    print("LEAF_5")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_3/Leaf_5/Leaf5.yml")
    print("LEAF_6")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_3/Leaf_6/Leaf6.yml")
    
    print("MLAG PEER LINK - LEAF-7 <=> LEAF-8")
    print("LEAF_7")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_4/Leaf_7/Leaf7.yml")
    print("LEAF_8")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Leef/peer_link_4/Leaf_8/Leaf8.yml")
    
    
def Spine_mlag():
    print("SPINE_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Spine/peer_link_1/Spine_1/Spine.yml")
    print("SPINE_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Spine/peer_link_1/Spine_2/Spine.yml")
    print("SPINE_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Spine/peer_link_2/Spine_3/Spine.yml")
    print("SPINE_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/MLAG/Peer_Link_Spine/peer_link_2/Spine_4/Spine.yml")
    
def mlag():
    print("✅ Connectivity test")
    if run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/connectivity/get-version.yml"):
        print("✅")
        Leaf_mlag()
        Spine_mlag()
        return True
    else:
        print("❌ Error : network unreachable")
        return False
    
import os
import subprocess
import paramiko
import time

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        return False
    else:
        return True  


def ssh_connection(ip, bgp_router_id,rd_ip):
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(ip, port=22, username="cvpadmin", password="Exaprobe1234")

    shell_session = client.invoke_shell()
    shell_session.send("configure\n")
    time.sleep(1)
    shell_session.send(f"router bgp {bgp_router_id}\n")
    time.sleep(1)
    shell_session.send("vlan 3\n")
    time.sleep(1)
    shell_session.send(f"rd {rd_ip}:3\n")
    time.sleep(1)
    shell_session.send("route-target both 1:3\n")
    time.sleep(1)
    shell_session.send("redistribute learned\n")
    time.sleep(1)
    print("END")
    
    shell_session.close()
    shell_session.closed

    client.close()

def evpn():
    print("EVPN")
    
    print("SPINE_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Spine/Spine_1/Spine.yml")
    print("SPINE_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Spine/Spine_2/Spine.yml")
    print("SPINE_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Spine/Spine_3/Spine.yml")
    print("SPINE_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Spine/Spine_4/Spine.yml")
    
    print("LEAF_1")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_1/Leaf1.yml")
    ssh_connection("10.43.192.29","65001","1.1.1.1")
    
    print("LEAF_2")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_2/Leaf2.yml")
    ssh_connection("10.43.192.30","65001","2.2.2.2")
    
    print("LEAF_3")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_3/Leaf3.yml")
    ssh_connection("10.43.192.31","65002","3.3.3.3")
    
    print("LEAF_4")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_4/Leaf4.yml")
    ssh_connection("10.43.192.32","65002","4.4.4.4")
    
    
    
    print("LEAF_5")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_5/Leaf5.yml")
    ssh_connection("10.43.192.33","65004","5.5.5.5")
    
    print("LEAF_6")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_6/Leaf6.yml")
    ssh_connection("10.43.192.34","65004","6.6.6.6")
    
    print("LEAF_7")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_7/Leaf7.yml")
    ssh_connection("10.43.192.35","65005","7.7.7.7")
    
    print("LEAF_8")
    run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/EVPN/Leaf/Leaf_8/Leaf8.yml")
    ssh_connection("10.43.192.36","65005","8.8.8.8")


    
    
if __name__ == '__main__':
    evpn()
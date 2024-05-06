import pexpect
from paramiko import SSHClient 
from scp import SCPClient
import logging
import os
import subprocess
import paramiko

def ssh_scp_files(ssh_host, ssh_user, ssh_password, source_volume, destination_volume):
    logging.info("In ssh_scp_files() method, copying files to the server")
    ssh = SSHClient()
    # ssh.load_system_host_keys()
    # ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy()) 
    ssh.connect(ssh_host, username=ssh_user, password=ssh_password, look_for_keys=False)

    with SCPClient(ssh.get_transport()) as scp:
        scp.put(source_volume, recursive=True, remote_path=destination_volume)

def execute_scp_command(password, user):
    ssh_scp_files("10.43.192.25", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Spine/Spine-1.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.26", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Spine/Spine-2.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.27", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Spine/Spine-3.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.28", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Spine/Spine-4.txt", "/home/cvpadmin/")

    ssh_scp_files("10.43.192.29", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-1.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.30", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-2.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.31", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-3.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.32", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-4.txt", "/home/cvpadmin/")

    ssh_scp_files("10.43.192.33", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-5.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.34", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-6.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.35", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-7.txt", "/home/cvpadmin/")
    ssh_scp_files("10.43.192.36", user, password, "/home/rais/Arista_Automatisation/usb/basic-config/Leaf/Leaf-8.txt", "/home/cvpadmin/")

# /home/rais/Arista_Automatisation/Backend/usb/basic-config/Host/Host-1.txt

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        return False
    else:
        return True
    

def main():
    execute_scp_command("cvpadmin" , "cvpadmin")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/1/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/2/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/3/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/4/Leaf.yml")
    
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/5/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/6/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/7/Leaf.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Leaf/8/Leaf.yml")
    
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Spine/1/Spine.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Spine/2/Spine.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Spine/3/Spine.yml")
    run_ansible_playbook("/home/rais/Arista_Automatisation/yml/Ansible/Reset_basic_config/Spine/4/Spine.yml")


if __name__ == '__main__':
    main()

from paramiko import SSHClient 
from scp import SCPClient
import logging
import os
import subprocess
import paramiko
from database import *


def ssh_scp_files(ssh_host, ssh_user, ssh_password, source_volume, destination_volume):
    logging.info("In ssh_scp_files() method, copying files to the server")
    ssh = SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(ssh_host, username=ssh_user, password=ssh_password, look_for_keys=False)

    with SCPClient(ssh.get_transport()) as scp:
        scp.put(source_volume, recursive=True, remote_path=destination_volume)
        

def execute_scp_command_manual(password, user):
    print("SPINE 1")
    ssh_scp_files("10.43.192.25", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/1/conf.txt", "/home/cvpadmin/")
    print("SPINE 2")
    ssh_scp_files("10.43.192.26", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/2/conf.txt", "/home/cvpadmin/")
    print("SPINE 3")
    ssh_scp_files("10.43.192.27", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/3/conf.txt", "/home/cvpadmin/")
    print("SPINE 4")
    ssh_scp_files("10.43.192.28", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/4/conf.txt", "/home/cvpadmin/")

    print("LEAF 1")
    ssh_scp_files("10.43.192.29", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/1/conf.txt", "/home/cvpadmin/")
    print("LEAF 2")
    ssh_scp_files("10.43.192.30", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/2/conf.txt", "/home/cvpadmin/")
    print("LEAF 3")
    ssh_scp_files("10.43.192.31", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/3/conf.txt", "/home/cvpadmin/")
    print("LEAF 4")
    ssh_scp_files("10.43.192.32", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/4/conf.txt", "/home/cvpadmin/")
    print("LEAF 5")
    ssh_scp_files("10.43.192.33", user, password, "/home/rais/Arista_Automatisation/python/usb/basic-config/Leaf/5/conf.txt", "/home/cvpadmin/")
    print("LEAF 6")
    ssh_scp_files("10.43.192.34", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/6/conf.txt", "/home/cvpadmin/")
    print("LEAF 7")
    ssh_scp_files("10.43.192.35", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/7/conf.txt", "/home/cvpadmin/")
    print("LEAF 8")
    ssh_scp_files("10.43.192.36", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/8/conf.txt", "/home/cvpadmin/")
    
    print("HOST 1")
    ssh_scp_files("10.43.192.37", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/1/conf.txt", "/home/cvpadmin/")
    print("HOST 2")
    ssh_scp_files("10.43.192.38", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/2/conf.txt", "/home/cvpadmin/")
    print("HOST 3")
    ssh_scp_files("10.43.192.39", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/3/conf.txt", "/home/cvpadmin/")
    print("HOST 4")
    ssh_scp_files("10.43.192.40", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/4/conf.txt", "/home/cvpadmin/")


def execute_scp_command(password, user):
    print("SPINE 1")
    ssh_scp_files("10.43.192.25", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/1/conf.txt", "/home/cvpadmin/")
    print("SPINE 2")
    ssh_scp_files("10.43.192.26", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/2/conf.txt", "/home/cvpadmin/")
    print("SPINE 3")
    ssh_scp_files("10.43.192.27", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/3/conf.txt", "/home/cvpadmin/")
    print("SPINE 4")
    ssh_scp_files("10.43.192.28", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Spine/4/conf.txt", "/home/cvpadmin/")

    print("LEAF 1")
    ssh_scp_files("10.43.192.29", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/1/conf.txt", "/home/cvpadmin/")
    print("LEAF 2")
    ssh_scp_files("10.43.192.30", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/2/conf.txt", "/home/cvpadmin/")
    print("LEAF 3")
    ssh_scp_files("10.43.192.31", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/3/conf.txt", "/home/cvpadmin/")
    print("LEAF 4")
    ssh_scp_files("10.43.192.32", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/4/conf.txt", "/home/cvpadmin/")
    print("LEAF 5")
    ssh_scp_files("10.43.192.33", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/5/conf.txt", "/home/cvpadmin/")
    print("LEAF 6")
    ssh_scp_files("10.43.192.34", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/6/conf.txt", "/home/cvpadmin/")
    print("LEAF 7")
    ssh_scp_files("10.43.192.35", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/7/conf.txt", "/home/cvpadmin/")
    print("LEAF 8")
    ssh_scp_files("10.43.192.36", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Leaf/8/conf.txt", "/home/cvpadmin/")
    
    print("HOST 1")
    ssh_scp_files("10.43.192.37", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/1/conf.txt", "/home/cvpadmin/")
    print("HOST 2")
    ssh_scp_files("10.43.192.38", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/2/conf.txt", "/home/cvpadmin/")
    print("HOST 3")
    ssh_scp_files("10.43.192.39", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/3/conf.txt", "/home/cvpadmin/")
    print("HOST 4")
    ssh_scp_files("10.43.192.40", user, password, "/home/rais/Arista_Automatisation/python/usb/mlag-file/Host/4/conf.txt", "/home/cvpadmin/")

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
    except subprocess.CalledProcessError as e:
        return False
    else:
        return True
    
# def run_ansible_playbook(playbook_path):
#     os.chdir(os.path.dirname(playbook_path))
#     result_path = os.path.join(os.path.dirname(playbook_path), "ansible_output.log")  # Chemin où l'output sera sauvegardé
#     try:
#         # On capture la sortie dans un objet CompletedProcess
#         completed_process = subprocess.run(
#             ["ansible-playbook", os.path.basename(playbook_path)],
#             check=True,
#             text=True,  # Assure que la sortie est traitée comme du texte
#             stdout=subprocess.PIPE,  # Capture la sortie standard
#             stderr=subprocess.STDOUT  # Redirige les erreurs vers la sortie standard
#         )
        
#         # Écriture formatée de la sortie dans un fichier
#         with open(result_path, "w") as file:
#             for line in completed_process.stdout.splitlines():
#                 file.write(f"LOG: {line}\n")  # Préfixe chaque ligne avec "LOG :"
#                 print(f"LOG: {line}")  # Imprime chaque ligne formatée dans la console
#     except subprocess.CalledProcessError as e:
#         print("LOG: Error executing playbook")
#         return False
#     else:
#         return True

def mlag_file():
    execute_scp_command("Exaprobe1234" , "cvpadmin")
    playbook = run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/TEST/Reset_basic_config/Reset_Conf/host.yml")
    return playbook

def mlag_file_manual():
    execute_scp_command_manual("Exaprobe1234" , "cvpadmin")
    playbook = run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/TEST/Reset_basic_config/Reset_Conf/host.yml")
    return playbook

if __name__ == '__main__':
    mlag_file()

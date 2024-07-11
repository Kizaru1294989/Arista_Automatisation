from paramiko import SSHClient, AutoAddPolicy
from scp import SCPClient
import os
import subprocess
import paramiko
import ipaddress

def ssh_scp_files(ssh_host, ssh_user, ssh_password, source_volume, destination_volume):
    try:
        ssh = SSHClient()
        ssh.set_missing_host_key_policy(AutoAddPolicy())
        ssh.connect(ssh_host, username=ssh_user, password=ssh_password, look_for_keys=False)
        with SCPClient(ssh.get_transport()) as scp:
            scp.put(source_volume, recursive=True, remote_path=destination_volume)
        return True
    except (paramiko.SSHException, paramiko.ssh_exception.NoValidConnectionsError, TimeoutError, Exception) as e:
        print(f"Error copying files to {ssh_host}: {e}")
        return False

def execute_scp_command(password, user):
    devices = [
        ("Spine", "10.43.192.25", 4),
        ("Leaf", "10.43.192.29", 8),
        ("Host", "10.43.192.37", 4)
    ]

    for device_type, base_ip, count in devices:
        base_ip_addr = ipaddress.ip_address(base_ip)
        for i in range(count):
            ip = str(base_ip_addr + i)
            device_number = i + 1
            print(f"{device_type} {device_number}")
            source_path = f"/home/rais/Arista_Automatisation/python/usb/basic-config/{device_type}/{device_number}/conf.txt"
            success = ssh_scp_files(ip, user, password, source_path, "/home/cvpadmin/")
            if success:
                print(f"Successfully copied to {device_type} {device_number} at {ip}")
            else:
                print(f"Failed to copy files to {device_type} {device_number} at {ip}")
                return False
    return True

def run_ansible_playbook(playbook_path):
    os.chdir(os.path.dirname(playbook_path))
    try:
        subprocess.run(["ansible-playbook", os.path.basename(playbook_path)], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error running ansible playbook: {e}")
        return False

def reset():
    if execute_scp_command("Exaprobe1234", "cvpadmin"):
        return run_ansible_playbook("/home/rais/Arista_Automatisation/python/Ansible/TEST/Reset_basic_config/Reset_Conf/host.yml")
    return False

if __name__ == '__main__':
    reset()

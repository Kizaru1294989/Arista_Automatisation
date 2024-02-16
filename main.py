from Tools.Terminal.console_menu import terminal
import configparser
from Arista.make_eapi_active import connect_to_arista_switch


def get_ip_addresses():
    switch = {}

    for spine_number in range(1, 3):
        spine_ip = input(f"Veuillez saisir l'adresse IP du Spine {spine_number}: ")
        spine_user = input(f"Veuillez saisir l'utilisateur du Spine {spine_number}: ")
        spine_pswd = input(f"Veuillez saisir le mot de passe du Spine {spine_number}: ")
        switch[f"Spine {spine_number}"] = {"ip": spine_ip, "user": spine_user, "password": spine_pswd}

    for leaf_number in range(1, 5):
        leaf_ip = input(f"Veuillez saisir l'adresse IP du Leaf {leaf_number}: ")
        leaf_user = input(f"Veuillez saisir l'utilisateur du Leaf {leaf_number}: ")
        leaf_pswd = input(f"Veuillez saisir le mot de passe du Leaf {leaf_number}: ")
        switch[f"Leaf {leaf_number}"] = {"ip": leaf_ip, "user": leaf_user, "password": leaf_pswd}

    return switch


def generate_inventory(ip_addresses):
    config = configparser.ConfigParser()

    for device, details in ip_addresses.items():
        config[device] = {"ansible_host": details["ip"], "ansible_user": details["user"], "ansible_password": details["password"]}

    with open('Ansible/inventory.ini', 'w') as configfile:
        config.write(configfile)

    print("Fichier inventory.ini généré avec succès.")

def generate_cfg(ip_addresses):
    with open('Ansible/config.cfg', 'w') as cfg_file:
        for device, details in ip_addresses.items():
            cfg_file.write(f"{device}: IP = {details['ip']}, User = {details['user']}, Password = {details['password']}\n")

    print("Fichier config.cfg généré avec succès.")

def main():
    equipement = get_ip_addresses()
    print("Adresses IP des équipements:")
    for device, details in equipement.items():
        print(f"{device}: IP = {details['ip']}, User = {details['user']}, Password = {details['password']}")
    
    while True:
        cli = input("Est-ce correct ? (o/n) : ")
        if cli.lower() == "o":
            generate_inventory(equipement)
            generate_cfg(equipement)
            break
        elif cli.lower() == "n":
            main()
            break
        else:
            print("Veuillez entrer une réponse valide (o/n).")

if __name__ == '__main__':
    #connect_to_arista_switch("10.")
    main()

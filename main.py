from Tools.Terminal.console_menu import terminal
import configparser

def get_ip_addresses():
    ip_addresses = {}

    for spine_number in range(1, 3):
        spine_ip = input(f"Veuillez saisir l'adresse IP du Spine {spine_number}: ")
        spine_user = input(f"Veuillez saisir l'user du Spine {spine_number}: ")
        spine_pswd = input(f"Veuillez saisir le mot de passe du Spine {spine_number}: ")
        ip_addresses[f"Spine {spine_number}"] = spine_ip

    for leaf_number in range(1, 5):
        leaf_ip = input(f"Veuillez saisir l'adresse IP du Leaf {leaf_number}: ")
        leaf_user = input(f"Veuillez saisir l'user du Leaf {leaf_number}: ")
        leaf_pswd = input(f"Veuillez saisir le mot de passe du Leaf {leaf_number}: ")
        ip_addresses[f"Leaf {leaf_number}"] = leaf_ip

    return ip_addresses

def generate_inventory(ip_addresses):
    config = configparser.ConfigParser()

    for device, ip in ip_addresses.items():
        config[device] = {"ansible_host": ip, "ansible_user": "your_username", "ansible_password": "your_password"}

    with open('inventory.ini', 'w') as configfile:
        config.write(configfile)

    print("Fichier inventory.ini généré avec succès.")

def generate_cfg(ip_addresses):
    with open('config.cfg', 'w') as cfg_file:
        for device, ip in ip_addresses.items():
            cfg_file.write(f"{device} {ip}\n")

    print("Fichier config.cfg généré avec succès.")

def main():
    ip_addresses = get_ip_addresses()
    print("Adresses IP des équipements:")
    for device, ip in ip_addresses.items():
        print(f"{device}: IP = {ip}")
    
    while True:
        cli = input("Est-ce correct ? (o/n) : ")
        if cli.lower() == "o":
            generate_inventory(ip_addresses)
            generate_cfg(ip_addresses)
            break
        elif cli.lower() == "n":
            # Si l'utilisateur veut corriger les adresses IP, relancer la fonction principale
            main()
            break
        else:
            print("Veuillez entrer une réponse valide (o/n).")

if __name__ == '__main__':
    main()


#username passwords# zerotouch cancel
